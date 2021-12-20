// dependencies
import Head from 'next/head';
// layout
import { DefaultLayout } from 'layout';
// components
import { Hello } from 'components';

/* TYPES */
interface Content {
  pageTitle: string;
  helloContent: {
    text: string;
  }
};

interface Props {
  content: Content;
};

const Home = ( {
  content: {
    pageTitle,
    helloContent
  },
}: Props ) => {

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

        <DefaultLayout>
          <Hello id='hello-component' content={helloContent} />
        </DefaultLayout>
    </>
  
  );
}

const HomeContent = {
  pageTitle: 'Next.JS Starting Template',
  // Component Content
  helloContent: {
    text: 'Welcome!'
  }
};

export async function getStaticProps() {
  return {
    props: {
      content: HomeContent,
    }
  }
}

export default Home;