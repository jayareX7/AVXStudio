import React from "react";
import Toolbar from "./navigation/toolbar.js";
import Hamburger from "./navigation/hamburger";
import BackDrop from "./navigation/backdrop";

class Navigation extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    // let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />;
      backdrop = <BackDrop click={this.backDropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <Hamburger show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}

export default Navigation;
