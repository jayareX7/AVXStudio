import Link from "next/link";
import React from "react";

const hamburger = props => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
      <li>
          <Link href="/">INDEX</Link>
        </li>
        <li>
          <Link href="/about-us">WHO WE ARE</Link>
        </li>
        <li>
          <Link href="/services">WHAT WE DO</Link>
        </li>
        <li>
          <Link href="/past-works">WHAT WEVE DONE</Link>
        </li>
      </ul>
    </nav>
  );
};
export default hamburger;
