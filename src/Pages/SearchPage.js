import React from "react";
import { Link } from "react-router-dom";
import Search from "../Component/Search";
import "./SearchPage.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import NewspaperSharpIcon from "@mui/icons-material/NewspaperSharp";
import PhotoSharpIcon from "@mui/icons-material/PhotoSharp";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import FmdGoodSharpIcon from "@mui/icons-material/FmdGoodSharp";
import UseGoogleSearch from "../useGoogleSearch";
import { useSelector } from "react-redux";

const SearchPage = () => {
  const term = useSelector((state) => state.term);
  const { data } = UseGoogleSearch(term);
  console.log("This is the data" + data);
  console.log("This is term " + term);

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

        {/* {term && (
          <div className="searchPage_results">
            <p className="searchPage_resultCount">
              About {data?.searchInformation.formattedTotalResults} results (
              {data?.searchInformation.formattedSearchTime} seconds) for {term}
            </p> */}

        {/* {data?.items.map((item) => (
              <div className="searchPage_result"> */}
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        {/* <a href={item.link} target="_blank">
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        className="searchPage_resultImage"
                        src={
                          item.pagemap?.cse_image?.length > 0 &&
                          item.pagemap?.cse_image[0]?.src
                        }
                        alt=""
                      /> */}
        {/* )}
                  {item.displayLink} ✔
                </a>
               
                <a
                  className="searchPage_resultTitle"
                  href={item.link}
                  target="_blank"
                > */}
        {/* <h2>{item.title}</h2>
                </a>
                <p className="searchPage_resultSnippet">{item.snippet}</p>
                <hr />
              </div>
            ))}
          </div>
        )} */}
      </div>
    </>
  );
};

export default SearchPage;
