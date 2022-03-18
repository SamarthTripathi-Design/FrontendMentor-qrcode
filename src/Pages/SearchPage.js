import React from "react";
import { Link } from "react-router-dom";
import Search from "../Component/Search";
import "./SearchPage.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import NewspaperSharpIcon from "@mui/icons-material/NewspaperSharp";
import PhotoSharpIcon from "@mui/icons-material/PhotoSharp";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import FmdGoodSharpIcon from "@mui/icons-material/FmdGoodSharp";

const SearchPage = () => {
  return (
    <>
      <div className="searchpage">
        <div className="searchpage-header">
          <Link to="/">
            <img
              src="https://www.trevipay.com/wp-content/uploads/2019/11/classyllama.png"
              alt=""
              height="50"
              className="searchpage-img"
            />
          </Link>
          <div className="searchpage-headerbody">
            <Search hidebuttons />
            <div className="searchpage-options">
              <div className="searchpage-optionsleft">
                <div className="search-option">
                  <SearchSharpIcon />
                  <Link to="/all">All</Link>
                </div>
                <div className="search-option">
                  <NewspaperSharpIcon />
                  <Link to="/all">News</Link>
                </div>
                <div className="search-option">
                  <PhotoSharpIcon />
                  <Link to="/all">Images</Link>
                </div>
                <div className="search-option">
                  <ShoppingCartSharpIcon />
                  <Link to="/all">Shopping</Link>
                </div>
                <div className="search-option">
                  <FmdGoodSharpIcon />
                  <Link to="/all">Maps</Link>
                </div>
              </div>

              <div className="searchpage-optionsright">
                <div className="search-option">
                  <Link to="/all">Settings</Link>
                </div>
                <div className="search-option">
                  <Link to="/all">Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="searchpage-results">
          <p className="searchpage-resultcount"></p>
          <div className="result">
            <a href="">
              <img src="" alt="" className="searchpage-resultimg" />
              link.com
            </a>
            <a href="" className="searchpage-resulttitle">
              <h2>Title</h2>
            </a>
            <p className="searchpage-resultdescription">description</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
