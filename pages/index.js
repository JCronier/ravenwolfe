import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export async function getStaticProps() {

  return {
    props: {
    }
  }
}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
     
    </Layout>
  )
}