import Layout from "../components/layout";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import Image from "next/image";
import Logo from "../src/images/logo.webp";
import { Button } from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "../components/carousel-btn";
import useEmblaCarousel from "embla-carousel-react";


export default function AboutUs({ abouts, feed }) {

  console.log(feed.data)
  const images = feed.data
  const SLIDE_COUNT = 120;
  const slides = Array.from(Array(SLIDE_COUNT).keys()); 
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 1,
    skipSnaps: false
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);
  return (
  <>
      <Layout>
        <section className="container">
          <main className="main">
            <Grid container spacing={1}>
              {abouts.map((about) => {
                return (
                  <Grid item lg={7} md={7} xs={12} sm={12}>
                    <div
                      className="mt-5r "
                      style={{ color: "#000", fontSize: 1.5 + "rem" }}
                    >
                      <div className=" mb-2r">
                      <Image
                        src={Logo}
                        alt="Website Logo"
                        width="450px"
                        height="475px"
                        
                      /></div>

                     
                        <div className="about-overlay-header-text-right">
                          {about.headerOne}
                        </div>
                     
                    </div>
                  </Grid>
                );
              })}

              <Grid item lg={5} md={5} xs={12} sm={12}>
                <div style={{ color: "#000", fontSize: 1.5 + "rem" }}>
                  {abouts.map((about) => {
                    return (
                      <div className="about-header-two-right mt-5r">
                        <h2>{about.headerTwo}</h2>
                        <Link href="/" passHref>
                          <a>
                            <Button variant="contained" className="right">
                              {about.btn}
                            </Button>
                          </a>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={1}>

<Grid item lg={5} md={5} xs={12} sm={12}>
    <div style={{ color: "#000", fontSize: 1.5 + "rem" }}>
      {abouts.map((about) => {
        return (
          <div className="about-header-two-left mt-5r">
            <h2>{about.headerTwo}</h2>
            <Link href="/" passHref>
              <a>
                <Button variant="contained" className="left">
                  {about.btn}
                </Button>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  </Grid>

  {abouts.map((about) => {
    return (
      <Grid item lg={7} md={7} xs={12} sm={12}>
        <div
          className="mt-5r"
          style={{ color: "#000", fontSize: 1.5 + "rem" }}
        >
          <div className="right mb-2r">
          <Image
            src={Logo}
            alt="Website Logo"
            width="450px"
            height="475px"
           

          /></div>

         
            <div className="about-overlay-header-text-left">
              {about.headerOne}
            </div>
         
        </div>
      </Grid>
    );
  })}
</Grid>
            <div className="col-md-12 col-lg-12 col-sm-12 mt-8r center">
              <Grid container spacing={1}>
                <Grid item lg={4} md={4} xs={12} sm={12}>
                  <Link href="/" passHref>
                    <a>
                      <Image
                        src={Logo}
                        alt="Website Logo"
                        width="800px"
                        height="650px"
                      />
                    </a>
                  </Link>
                </Grid>

                <Grid item lg={4} md={4} xs={12} sm={12}>
                  <Link href="/" passHref>
                    <a>
                      <Image
                        src={Logo}
                        alt="Website Logo"
                        width="800px"
                        height="650px"
                      />
                    </a>
                  </Link>
                </Grid>

                <Grid item lg={4} md={4} xs={12} sm={12}>
                  <Link href="/" passHref>
                    <a>
                      <Image
                        src={Logo}
                        alt="Website Logo"
                        width="800px"
                        height="650px"
                      />
                    </a>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </main>
        </section>


  

        <section className="service-section"><h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing{' '}
          <code className="code">pages/index.js</code>
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div></section>

        <section className="">
          <main className="main">
            <h1 className="title">
              Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>

            <p className="description">
              Get started by editing{" "}
              <code className="code">pages/index.js</code>
            </p>

            <div className="grid">
              <a href="https://nextjs.org/docs" className="card">
                <h2>Documentation &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>

              <a href="https://nextjs.org/learn" className="card">
                <h2>Learn &rarr;</h2>
                <p>
                  Learn about Next.js in an interactive course with quizzes!
                </p>
              </a>

              <a
                href="https://github.com/vercel/next.js/tree/master/examples"
                className="card"
              >
                <h2>Examples &rarr;</h2>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>

              <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className="card"
              >
                <h2>Deploy &rarr;</h2>
                <p>
                  Instantly deploy your Next.js site to a public URL with
                  Vercel.
                </p>
              </a>
            </div>
          </main>
        </section>


        <section className="service-section"><h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing{' '}
          <code className="code">pages/index.js</code>
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div></section>

        <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
        {images && images.map((image =>  (
          <div className="embla__slide" key={image.id}>
              <div className="embla__slide__inner">
                <img 
                  className="embla__slide__img"
                  src={image.media_url} 
                  alt={image.caption} 
                  width="604px"
                  height="604px"/>
              </div>
          </div>
          )))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>


      </Layout>
      </>
  )}

 

export async function getStaticProps() {
    const response = await fetch("http://localhost:4000/abouts");
    const aboutData = await response.json();
    const url =   `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
    const data = await fetch(url)
    const feed = await data.json();
  
    return {
      props: {
        abouts: aboutData,
        feed,
      },
    };
  }

 
  

