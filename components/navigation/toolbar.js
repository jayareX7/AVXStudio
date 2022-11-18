import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Toggle from "./toggle";
import Link from 'next/link';



const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigator">
      <div />
      <div className="toggle-btn">
        <Toggle click={props.drawerToggleClickHandler} />
      </div>
      <div className="toolbar_logo">
        <Link href="/">The Logo</Link>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
      <MyMenu />
      </div>
    </nav>
  </header>
);


function LinkTab(props) {
  return (
    <Tab
      component="a"
      {...props}
    />
  );
}

export function MyMenu () {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



    return (
      <Box sx={{ width: '100%' }}>

        <LinkTab label="INDEX" href="/" className="nav-link nav-link-ltr nav-link-active"/>
          <LinkTab label="WHO WE ARE" href="/about-us" className="nav-link nav-link-ltr nav-link-active" />
          <LinkTab label="WHAT WE DO" href="/services" className="nav-link nav-link-ltr nav-link-active"/>
          <LinkTab label="WHAT WE'VE DONE" href="/past-works" className="nav-link nav-link-ltr nav-link-active" />
       
      </Box>
    );
  }
  




export default toolbar;





