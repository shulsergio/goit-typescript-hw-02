import css from './Heading.module.css';

interface HeadingProps{
  title: string;
}

export const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <h2
      className={css.title}>
      {title}
    </h2>
  );
};
