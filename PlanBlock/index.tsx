import cn from 'classnames';

import Infg from 'components/atoms/Infg';

import styles from './styles.module.scss';

type PlanItemProps = {
  icon: React.ReactElement;
  title: string;
  description?: string;
};
interface PlanBlockProps {
  title: string;
  titleTag?: string;
  text?: string;
  data: PlanItemProps[];
  isReverseColors?: boolean;
}

const PlanBlock = ({
  title,
  titleTag,
  text,
  data,
  isReverseColors,
}: PlanBlockProps) => (
  <div className="container">
    {text && <p className={cn('h4', styles.text)}>{text}</p>}
    <h2
      className={cn(titleTag ? titleTag : 'h2', styles.title, {
        [styles.title_color_reverse]: !!isReverseColors,
      })}
    >
      {title}
    </h2>
    <div className={styles.list}>
      {data.map((item, idx) => (
        <Infg
          key={idx}
          icon={item.icon}
          title={item.title}
          description={item.description}
          className={cn(styles.item, {
            [styles.item_color_reverse]: !!isReverseColors,
          })}
        />
      ))}
    </div>
  </div>
);

export default PlanBlock;
