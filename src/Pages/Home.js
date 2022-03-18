import React from "react";
import "./Home.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppsIcon from "@mui/icons-material/Apps";
import Search from "../Component/Search";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-header">
          <div className="home-headers-left">
            <p>About</p>
            <p>Store</p>
          </div>
          <div className="home-headers-right">
            <p>Email</p>
            <p>Images</p>
            <AppsIcon />
            <AccountCircleIcon />
          </div>
        </div>
        <div className="home-body">
          <div className="img-container">
            <img
              src="https://www.trevipay.com/wp-content/uploads/2019/11/classyllama.png"
              alt=""
              height="100"
            />
          </div>
          <div className="search-container">
            <Search />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
