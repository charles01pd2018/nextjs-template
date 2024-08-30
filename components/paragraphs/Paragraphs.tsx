import styles from "./_Paragraphs.module.scss";

export interface Content {
  text: string;
}

export interface Props {
  content: Content;
}

const Paragraphs = ({ content }: Props) => {
  const { text } = content;

  return (
    <section className={styles.paragraphs}>
      <p>{`Regular: ${text}`}</p>
      <p className="text--norm">{`Text Normal: ${text}`}</p>
      <p className="text--sm">{`Text Small: ${text}`}</p>
      <p className="text--xs">{`Text Extra Small: ${text}`}</p>
      <p className="text--xxs">{`Text Extra Extra Small: ${text}`}</p>
    </section>
  );
};

export default Paragraphs;
