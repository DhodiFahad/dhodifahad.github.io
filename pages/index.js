import { About } from "../comp/about";
import { Contact } from "../comp/contact";
import { Hero } from "../comp/hero";
import { Nav } from "../comp/nav";
import { Talk } from "../comp/talk";
import {Footer} from '../comp/footer';
import { Socials } from "../comp/socials";
import styles from '../styles/Home.module.css'
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dhodi Fahad Kinene | Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="I am full-stack developer and QA automation engineer" key="Dhodi Fahad Kinene | Software Engineer" />
  
      </Head>
      <Socials/>
      <Nav/>
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}
