// dependencies
import Head from 'next/head';

// pages
import DefaultLayout from './layout/defaultLayout';

const Content = ({
}) => {
  return (
        <DefaultLayout>
            <div className="container">
                <Head>
                    <title>React Components Template</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <h1>
                    NextJS Starting Template
                </h1>

                <img src="/favicon.svg" className='logo-placeholder' />
            </div>
        </DefaultLayout>
  );
}

export default Content;