import clsx from "clsx";
import type { ComponentProps } from "components/types";
import styles from "./_Paragraphs.module.scss";

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
      <p className="text--norm">{`Text Normal: ${text}`}</p>
      <p className="text--sm">{`Text Small: ${text}`}</p>
      <p className="text--xs">{`Text Extra Small: ${text}`}</p>
      <p className="text--xxs">{`Text Extra Extra Small: ${text}`}</p>
    </section>
  );
};

export default Paragraphs;
