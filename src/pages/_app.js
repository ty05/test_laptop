import '../styles/globals.css'
import styles from '../styles/MyApp.module.css'
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navbarContactBox}>
          <Link href='/'><a>
            <div className={styles.brandPizza}>
              <img src="/img/vercel.svg" alt="brand" />
              <p>Laptops</p>
            </div>
          </a></Link>
          <Link href="/"><a><li className={styles.navbarContact}>home</li></a></Link>
          <Link href="/about"><a><li className={styles.navbarContact}>about</li></a></Link>
          
        </ul>
      </nav>
      <div className={styles.container}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
