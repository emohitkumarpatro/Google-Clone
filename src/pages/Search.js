import React, { useContext, useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../StateProvider";
import { actionTypes } from "../reducer";
function Search({ hideButtons = false }) {
  const stateContext = useContext(StateContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    stateContext.dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    });
    navigate("/search");
  };
  return (
    <form className="search">
      <div className="search__input center">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttonHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
