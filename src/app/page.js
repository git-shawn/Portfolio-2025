"use client"
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import Carousel from "@/components/carousel";
import ContactForm from "@/components/contact-form";
import Header from "@/components/header";

export default function Home() {
  const [scrollFactor, setScrollFactor] = useState(0);

  const appRef = useRef(null);
  const writeRef = useRef(null);
  const contactRef = useRef(null);

  const CAROUSEL_OPTIONS = {
    align: "start",
    skipSnaps: "true"
  }
  const APPS = [
    {
      title: "QR Pop",
      href: "https://github.com/git-shawn/QR-Pop",
      bgImage: "/qrpop.png",
      accent: "#FF4F00"
    },
    {
      title: "Daily Egyptian",
      href: "https://www.salukiadlab.com/post/the-daily-egyptian",
      bgImage: "/de.png",
      accent: "#5D0E07"
    },
  ]
  const WRITING = [
    {
      title: "Duda",
      href: "https://blog.duda.co/blog-search?searchTerm=Shawn%20Davis",
      bgImage: "/duda.png",
      accent: "#41147D"
    },
  ]

  useEffect(() => {
    const handleScroll = (evt) => {
      setScrollFactor(Math.max(0, Math.min((evt.target.scrollTop / evt.target.offsetHeight), 1)));
      console.log(evt.target.scrollTop);
    };

    document.getElementById('page').addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blurStyle = {
    "--blur": (scrollFactor * 20) + "px"
  }

  const opacityStyle = {
    "--opacity": (scrollFactor)
  }

  return (
    <div id="page" className={styles.page} style={blurStyle}>
      <section className={styles.content}>
        <div id="top" className={styles.hero}>
          <h1>Hi, I'm Shawn.</h1>
          <p>I'm a writer and freelance developer based in Denver. I love running, cycling, fun pastries, great coffee, and being outside.</p>
          <a href="#contact" title="Email me">
            Let's talk <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>
          </a>
        </div>
      </section>
      <Header opacityStyle={opacityStyle} appRef={appRef} writeRef={writeRef} contactRef={contactRef} />
      <section ref={appRef} id="code" className={styles.content}>
        <div className={styles.work}>
          <div className={styles.sectionHeader}>
            <h2>Code</h2>
            <p>A smattering of things I've built with code — mostly Swift and JavaScript.</p>
          </div>
          <Carousel slides={APPS} options={CAROUSEL_OPTIONS} />
        </div>
      </section>
      <section ref={writeRef} id="writing" className={styles.content}>
        <div className={styles.work}>
          <div className={styles.sectionHeader}>
            <h2>Writing</h2>
            <p>A collection of various writings, some personal and some professional.</p>
          </div>
          <Carousel slides={WRITING} options={CAROUSEL_OPTIONS} />
        </div>
      </section>
      <section ref={contactRef} id="contact" className={`${styles.content} ${styles.flexEnd}`}>
        <div className={styles.contact}>
          <div className={styles.sectionHeader}>
            <h2>Contact</h2>
            <p>Go ahead. I'm all ears.</p>
            <p>I'm actively seeking volunteer opportunities, with a particular interest in progressive organizations or projects related to equity, inclusivity, migrant support, climate justice, and prison reform. If that sounds like you, please reach out!</p>
            <div className={styles.socialNetworks}></div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
