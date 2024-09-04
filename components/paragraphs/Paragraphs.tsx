import clsx from "clsx";
import type { ComponentProps } from "components/types";
import styles from "./_Paragraphs.module.scss";
import textStyles from "styles/_typography.module.scss";

export interface Content {
  text: string;
}

export interface Props extends ComponentProps {
  content: Content;
}

const Paragraphs = ({ id, className, content }: Props) => {
  const { text } = content;

  return (
    <section id={id} className={clsx(styles.paragraphs, className)}>
      <p>{`Regular: ${text}`}</p>
      <p className={textStyles.norm}>{`Text Normal: ${text}`}</p>
      <p className={textStyles.sm}>{`Text Small: ${text}`}</p>
      <p className={textStyles.xs}>{`Text Extra Small: ${text}`}</p>
      <p className={textStyles.xxs}>{`Text Extra Extra Small: ${text}`}</p>
    </section>
  );
};

export default Paragraphs;
