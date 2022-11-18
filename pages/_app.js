import '../styles/styles.scss'
import app from 'next/app';
import React from 'react'





export default class MyApp extends app {
  static getInitialProps({ Component, router, ctx }) {
    let pageProps = app.getInitialProps({ Component, router, ctx });


    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <section id="app">
        
        
       
        <Component {...pageProps} />

      
       
      </section>
    );
  }
}
