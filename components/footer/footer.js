
import FooterCopyright from "./footer-copyright"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from "next/image";
import Logo from "../../src/images/logo.webp";
import LinkedIn from "../../src/images/linkedin.webp";
import Twitter from "../../src/images/twitter.webp";
import Instagram from "../../src/images/instagram.webp";
import YouTube from "../../src/images/youtube.webp";
import Link from "next/link";
import Subscribe from "../subscribe";



export default function FullWidthGrid() {


  return (
      <>
      <section className="footer-bg-section mt-8r">
      <div className="footer-background">
      <div className="container">
    <div className="mt-18r" >
      <Grid container spacing={1} style={{textAlign: "left"}}>
      <Grid item lg={6} md={6} xs={12} sm={12} style={{marginLeft: 2 + "rem", marginRight: 13 + "rem"}}>
      <div style={{color: "#000", fontSize: 1.5 + "rem"}}>
        <Link href="/" passHref>
          <a>
          <Image 
          src={Logo} 
          alt="Website Logo"
          width="396px"
          height="173px"/> 
          </a>
        </Link>
      </div>
        </Grid>
 
        

     
        <Grid item lg={1} md={1} xs={12} sm={12} style={{margin: 0.4 + "rem", color: "#fff"}}>
       <h1 style={{float: "right"}}><i> Text Goes Here </i></h1>
       <ul style={{float: "right", listStyle: "none"}}>
        <li> Link #1 </li>
        <li> Link #2 </li>
        <li> Link #3 </li>
        <li> Link #4 </li>
        <li> Link #5 </li></ul>
        </Grid>
        <Grid item lg={1} md={1} xs={12} sm={12} style={{margin: 0.4 + "rem", color: "#fff"}}>
        <h1 style={{float: "right"}}> <i>Support Links </i></h1>
        <ul style={{float: "right", listStyle: "none"}}>
        <li> Link #1 </li>
        <li> Link #2 </li>
        <li> Link #3 </li>
        <li> Link #4 </li>
        <li> Link #5 </li></ul>
        </Grid>
        <Grid item lg={1} md={1} xs={12} sm={12} style={{ margin: 0.4 + "rem", color: "#fff"}}>
        <h1 style={{float: "right"}}> <i>Policies </i></h1>
        <ul style={{float: "right", listStyle: "none"}}>
        <li> Link #1 </li>
        <li> Link #2 </li>
        <li> Link #3 </li>
        <li> Link #4 </li>
        <li> Link #5 </li></ul>
        </Grid>
        <Grid item lg={4} md={5} xs={12} sm={12} style={{marginLeft: 2 + "rem", marginRight: 2 + "rem", marginBottom: 2 + "rem", color: "#fff"}}>
           <i style={{fontSize: 3.2 + "rem"}}>STAY CONNECTED . </i>
           <div style={{float: "right"}}><Subscribe /></div>
           <div style={{display:"flex", margin:"auto", float: "left", marginTop: 1 + "rem", marginBottom: 1 + "rem"}}>
           <Link href="https://www.youtube.com/c/jamesqquick" passHref>
          <a style={{marginTop: 0.1 + "rem"}}>
          <Image 
          src={YouTube} 
          alt="YouTube icon"
          width="50px"
          height="50px"/> 
          </a>
        </Link>
 
        <Link href="https://www.facebook.com/learnbuildteach/" passHref>
          <a>
          <Image 
          src={LinkedIn} 
          alt="LinkedIn icon"
          width="50px"
          height="50px"/> 
          </a>
        </Link>
        <Link href="https://wwww.twitter.com" passHref>
          <a style={{marginTop: 0.1 + "rem"}}>
          <Image 
          src={Twitter} 
          alt="Twitter icon"
          width="50px"
          height="50px"/> 
          </a>
        </Link>
        <Link href="http://www.instagram.com/larnbuildteach" passHref>
          <a>
          <Image 
          src={Instagram} 
          alt="Instagram icon"
          width="50px"
          height="50px"/> 
          </a>
        </Link>
        </div>
        </Grid>
      </Grid>
      
    </div>
    
    <FooterCopyright/>
    </div>
    </div>
    </section>
    </>
  );
}