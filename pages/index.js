import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shehroz's blog - Shehroz's coding journey</title>
        <meta name="description" content="Shehroz's coding journey - programming, working and life stories through the keyboard of an open minded Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='header'>
        <h1>The blog is in the process of coding</h1>
      </header>
    </div>
  )
}