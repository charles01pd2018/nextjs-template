import type { LayoutProps } from "layout/types";
import { Headings, Paragraphs, Container } from "components";
import type { HeadingsContent, ParagraphsContent } from "components/types";
import styles from "./_DisplayLayout.module.scss";

export interface Content {
  headingsContent: HeadingsContent;
  paragraphsContent: ParagraphsContent;
}

export interface Props extends LayoutProps {
  content: Content;
}

const DisplayLayout = ({ content }: Props) => {
  const { headingsContent, paragraphsContent } = content;

  return (
    <main className={styles.displayLayout}>
      <Container>
        <Headings content={headingsContent} />
      </Container>
      <Container className={styles.paragraphs}>
        <Paragraphs content={paragraphsContent} />
      </Container>
    </main>
  );
};

export default DisplayLayout;
