import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import NavBar from './NavBar'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ian Sornson</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        {/* <script src="https://kit.fontawesome.com/0d174862ad.js" crossOrigin="anonymous"></script> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Ian Sornson
        </h1>
        <p className={styles.description}>
          Computer Science student at the <span className={styles.uiuc}>University of 
          Illinois at Urbana-Champaign</span>.
        </p>
        <div className={styles.socials}>
          <Link href="https://github.com/Sorsmo">
            <a className={styles.social} target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </Link>
          {/* <Link href="https://www.instagram.com/ian_sornson/">
            <a className={styles.social} target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </Link> */}
        </div>
        

      </main>
      <div className={styles.divider} id='about'></div>
      <section className={styles.section}>
        <h1 className={styles.header}>About Me</h1>
        <p className={styles.details}>
          I am currently a student at the University of Illinois at Urbana-Champaign
          pursuing a B.S. in Computer Science with interests in <strong>artificial intelligence</strong>, <strong>machine learning</strong>
          , and <strong>autonomous robots</strong>.
          <br/>
          <br/>
          Throughout highschool I particpated in a robotics competition called FIRST Tech Challenge (FTC).
          The autonomous portion of the competition was always the coolest part as I got to see teams 
          utilize computer vision with the help of depth cameras and real time robot localization and path finding 
          using various forms of odometry to smoothly navigate the field. Ever since I have hoped to work on similar 
          projects involving autonomous robots in the future.
          <br/>
          <br/>
          Currently I am exploring and working on my web development skills with projects, such as this one,
          and taking courses learning to program autonomous robotics.
        </p>
      </section>

      <div className={styles.divider} id='projects'></div>
      <section className={styles.section}>
        <h1 className={styles.header}>Projects</h1>
        <div className={styles.grid}>
          <Link href="https://headlines.wtf">
            <a className={styles.card} target="_blank">
              <div className={styles.cardHeader}>
                <h2 className={styles.projectName}>Headlines</h2>
                <Image className={styles.cardImage} src="/headlines2.png" alt="Headlines" width={300} height={200} />
              </div>
              <div className={styles.cardBox}>
                <p className={styles.cardDetails}>
                  Headlines is web game where you guess 
                  the publication date of New York Times headlines to test just how well read you are.
                  Built using <strong>JavaScript</strong>, <strong>Next.js</strong>, <strong>Typescript</strong>, and 
                  the <strong>New York Times API</strong>. 
                </p>
              </div>
            </a>
          </Link>
          <Link href="https://ambermusic.netlify.app">
            <a className={styles.card} target="_blank">
              <div className={styles.cardHeader}>
                <h2 className={styles.projectName}>Amber</h2>
                <Image className={styles.cardImage} src="/ambermusic2.png" alt="ambermusic" width={300} height={200} />
              </div>
              <div className={styles.cardBox}>
                <p className={styles.cardDetails}>
                  Amber is a music oriented guessing game fueled by 
                  your own Spotify stats. How well do you know yourself? Built using <strong>JavaScript</strong>, <strong>React.js</strong>, 
                  {" "}<strong>Axios</strong>, and the <strong>Spotify SDK</strong>.
                </p>
              </div>
            </a>
          </Link>
          <Link href="https://iansornson.vercel.app">
            <a className={styles.card} target="_blank">
              <div className={styles.cardHeader}>
                <h2 className={styles.projectName}>My Portfolio</h2>
                <Image className={styles.cardImage} src="/port2.png" alt="port" width={300} height={200} />
              </div>
              <div className={styles.cardBox}>
                <p className={styles.cardDetails}>
                  I mean it counts doesn&apos;t it? Built using <strong>JavaScript</strong>,  
                  {" "}<strong>Next.js</strong>, and <strong>Typescript</strong>.
                </p>
              </div>
            </a>
          </Link>

          {/* <a className={styles.card} target="_blank">
            <div className={styles.cardHeader}>
              <h2 className={styles.projectName}>Coming soon...</h2>
              <Image className={styles.cardImage} src="" alt="" width={300} height={200} />
            </div>
            <div className={styles.cardBox}>
              <p className={styles.cardDetails}>
                Stay tuned!
              </p>
            </div>
          </a> */}
        </div>
      </section>

      {/* <div className={styles.divider} id="contact"></div>
      <section className={styles.section}>
        <h1 className={styles.header}>Contact Me</h1>
        <p className={styles.details}>
        </p>
      </section> */}
      <footer>
        <span className={styles.footer}>
          <a href='mailto:iansornson55@gmail.com'>
            Email me! (iansornson55@gmail.com)
          </a>
        </span>
      </footer>
    </div>
  )
}

export default Home;