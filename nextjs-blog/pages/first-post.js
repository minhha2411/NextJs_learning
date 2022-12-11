import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';



export default function FirstPost() {
    return (
    <Layout>
    <Head>
        <title>First Post</title>
        <link href='/images/iu'></link>
    </Head>
    <h1>First Post</h1>
    Redirect to <Link href="/">home</Link> page!!!
    </Layout>
    )
  }