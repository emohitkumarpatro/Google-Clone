import React, { useContext } from "react";
import "./SearchPage.css";
import SearchIcon from "@material-ui/icons/Search";
import { StateContext } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import response from "../response";
import { Link } from "react-router-dom";
import Search from "./Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  const stateContext = useContext(StateContext);
  const { data } = useGoogleSearch(stateContext.state.term);
  // const data = response;
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          {/* <h1>{stateContext.state.term} </h1> */}
          <img
            className="searchPage__logo"
            src="https://www.transparentpng.com/thumb/google-logo/quality-google-written-background-hd-images-free-2EKbNn.png"
            alt="quality google written background hd images free @transparentpng.com"
          ></img>
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage_option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage_option">
                <LocalOfferIcon />
                <Link to="/shopping">shopping</Link>
              </div>
              <div className="searchPage_option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchPage__optionRight">
              <div className="searchPage_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {stateContext.state.term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for{" "}
            {stateContext.state.term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink} ▽
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
