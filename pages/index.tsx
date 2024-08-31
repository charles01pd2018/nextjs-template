import Head from "next/head";
import { DisplayLayout } from "layout";
import { Headings, Paragraphs, Container } from "components";
import type { HeadingsContent, ParagraphsContent } from "components/types";
import type { GetStaticProps } from "next";

interface Content {
  pageTitle: string;
  headingsContent: HeadingsContent;
  paragraphsContent: ParagraphsContent;
}

interface Props {
  content: Content;
}

const Home = ({ content }: Props) => {
  const { pageTitle, ...layoutContent } = content;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <DisplayLayout content={layoutContent} />
    </>
  );
};

const HomeContent: Content = {
  pageTitle: "Next.JS Starting Template",
  headingsContent: {
    text: "Welcome!",
  },
  paragraphsContent: {
    text: "Paragraph",
  },
};

export const getStaticProps: GetStaticProps = () => {
  const props: Props = {
    content: HomeContent,
  };

  return {
    props,
  };
};

export default Home;
