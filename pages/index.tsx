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
        <link rel="icon" href="\pfp.jpg" />
      </Head>
      {/* <NavBar/> */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          (George) Ian Sornson
        </h1>
        <p className={styles.description}>
          <a href="https://www.linkedin.com/in/ian-sornson">LinkedIn</a> | <a href="https://github.com/Sorsmo">Github</a>
        </p>
      </main>
      {/* <div className={styles.divider} id='about'></div> */}
      <section className={styles.section}>
        <h1 className={styles.header}>About Me</h1>
        <ul className={styles.details}>
          <li>BS/MCS in Computer Science at UIUC, expected graduation May 2026</li>
          <li>Passionate about <strong>quant finance</strong>, <strong>machine learning</strong>, and <strong>robotics</strong></li>
          <li>Chess, ice hockey, poker, video games, kpop/alternative music</li>
        </ul>
      </section>
      
      <section className={styles.section}>
        <h1 className={styles.header}>Experience</h1>
        <ul className={styles.details}>
          <li><strong>IMC Trading</strong>: Software Engineer Intern (Jun 2025 - Aug 2025)</li>
          <li><strong>Capital One</strong>: Machine Learning Engineer Intern (Sep 2024 - Mar 2025)</li>
          <li><strong>Gallagher</strong>: Software Engineer Intern (Jun 2024 - Aug 2024)</li>
        </ul>
      </section>


      {/* <div className={styles.divider} id='projects'></div>
      <section className={styles.section}>
        <h1 className={styles.header}>Projects</h1>
        <div className={styles.grid}>

          <Link href="https://github.com/Sorsmo/gtav-neural-net">
            <a className={styles.card} target="_blank">
              <div className={styles.cardHeader}>
                <h2 className={styles.projectName}>Self-Driving Car in Grand Theft Auto V</h2>
                <Image className={styles.cardImage} src="/gtav.jpg" alt="port" width={300} height={200} />
              </div>
              <div className={styles.cardBox}>
                <p className={styles.cardDetails}>
                  A self driving car in GTAV trained with a convolution neural network using <strong>Tensorflow</strong>, <strong>OpenCV</strong>, and <strong>Python</strong>.
                </p>
              </div>
            </a>
          </Link>

          <Link href="https://github.com/Sorsmo/chess-engine">
            <a className={styles.card} target="_blank">
              <div className={styles.cardHeader}>
                <h2 className={styles.projectName}>&quot;YanNepocho&quot; Chess Engine</h2>
                <Image className={styles.cardImage} src="/yan.png" alt="port" width={300} height={200} />
              </div>
              <div className={styles.cardBox}>
                <p className={styles.cardDetails}>
                  A chess engine integrated with the <strong>LiChess API</strong> for online play. Developed using <strong>Python</strong>.
                </p>
              </div>
            </a>
          </Link> 

          <Link href="https://fourhead.vercel.app/">
            <a className={styles.card} target="_blank">
              <div className={styles.cardHeader}>
                <h2 className={styles.projectName}>Fourheads</h2>
                <Image className={styles.cardImage} src="/headlines2.png" alt="Headlines" width={300} height={200} />
              </div>
              <div className={styles.cardBox}>
                <p className={styles.cardDetails}>
                  Fourheads is a collection of web games that test your vocabulary and knowledge of the world. 
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
        </div>
      </section> */}

      {/* <div className={styles.divider} id="contact"></div>
      <section className={styles.section}>
        <h1 className={styles.header}>Contact Me</h1>
        <p className={styles.details}>
        </p>
      </section> */}
      {/* <footer> */}
        <span className={styles.footer}>
          <a href='mailto:iansornson55@gmail.com'>
            iansornson55@gmail.com
          </a>
        </span>
      {/* </footer> */}
    </div>
  )
}

export default Home;