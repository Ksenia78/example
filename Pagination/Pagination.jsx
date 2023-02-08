import cn from "classnames";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styles from "./Pagination.module.css";

const DELIMITER = "...";

const range = (from, to) => {
  let i = from;
  const range = [];
  while (i <= to) {
    range.push(i);
    i += 1;
  }
  return range;
};

Pagination.propTypes = {
  totalNumberOfRecords: PropTypes.number.isRequired,
  limit: PropTypes.number,
  neighbours: PropTypes.number,
  activePage: PropTypes.number,
  changer: PropTypes.func,
  className: PropTypes.string,
};

/**
 * @typedef Props
 * @prop {Number} totalNumberOfRecords описание
 * @prop {Number} limit описание
 * @prop {Number} neighbours описание
 * @prop {Number} activePage описание
 * @prop {Function} changer описание
 * @prop {String} className описание
 */

/**
 * Компонент пагинации
 * @param {Props} props
 */

export function Pagination({
  totalNumberOfRecords,
  limit = 5,
  neighbours = 1,
  activePage = 2,
  changer,
  className,
}) {
  const [activePageState, setActivePageState] = useState(activePage);
  const [pageLimitState, setPageLimitState] = useState(activePage);

  const totalPages = Math.ceil(totalNumberOfRecords / pageLimitState);

  const fetchPageNumbers = () => {
    const totalNumbers = neighbours * 2;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, activePageState - neighbours);
      const endPage = Math.min(totalPages - 1, activePageState + neighbours);
      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [DELIMITER, ...extraPages, ...pages];
          break;
        }

        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, DELIMITER];
          break;
        }

        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [DELIMITER, ...pages, DELIMITER];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }
    return range(1, totalPages);
  };

  const pages = fetchPageNumbers();

  const gotoPage = (page) => {
    const activePage = Math.max(0, Math.min(page, totalPages));
    setActivePageState(activePage);
    changer(page);
  };

  const handleClick = (page) => (evt) => {
    evt.preventDefault();
    gotoPage(page);
  };

  useEffect(() => {
    gotoPage(activePageState);
  }, []);

  useEffect(() => {
    setActivePageState(activePage || 1);
  }, [totalNumberOfRecords, limit]);

  useEffect(() => {
    setActivePageState(activePage);
  }, [activePage]);

  useEffect(() => {
    setPageLimitState(limit);
  }, [limit]);

  if (!totalNumberOfRecords || totalPages === 1) return null;

  return (
    <>
      <div className={cn(styles.pagination, { [className]: className })}>
        <ul className={styles.pagination__list}>
          {pages.map((page, index) => {
            if (page === DELIMITER)
              return (
                <li
                  key={index}
                  className={cn(styles.pagination__list_item, styles.dots)}
                >
                  ...
                </li>
              );

            return (
              <li
                key={index}
                className={cn(
                  styles.pagination__list_item,
                  activePageState === page && styles.active
                )}
                onClick={handleClick(page)}
              >
                {page}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
