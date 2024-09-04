import Head from "next/head";
import { DisplayLayout } from "layout";
import type { DisplayLayoutContent } from "layout/types";
import type { GetStaticProps } from "next";

interface Content extends DisplayLayoutContent {
  pageTitle: string;
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
