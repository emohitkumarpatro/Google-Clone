import React from "react";
import "./Home.css";
import Search from "./Search";
import { Avatar } from "@material-ui/core";
import { Outlet, Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar className="avatar"></Avatar>
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.transparentpng.com/thumb/google-logo/quality-google-written-background-hd-images-free-2EKbNn.png"
          alt="quality google written background hd images free @transparentpng.com"
        ></img>
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
