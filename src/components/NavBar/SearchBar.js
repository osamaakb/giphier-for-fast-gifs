import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

import {
  MDBIcon
} from "mdbreact";
import { Gradient } from "react-gradient";

const searchGradient = [
  ["lime", "coral"],
  ["magenta", "gold"],
  ["violet", "royalblue"]
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();
  const isLoading = useSelector(state => state.isLoading)
  const searchType = history.location.pathname.split('/')[2] ?? history.location.pathname.split('/')[1];

  const search = e => {
    e.preventDefault();
    history.push(`/search/${searchType}/${query}`);
  };

  return (
    <form onSubmit={search}>
      <div className="d-flex">
        <input
          className="flex-fill"
          placeholder={'Search for ' + searchType}
          onChange={e => setQuery(e.target.value)}
        />
        <Gradient
          gradients={searchGradient} // required
          property="background"
          duration={3000}
          angle="45deg"
        >
          <div className="search-btn d-flex justify-content-center align-items-center">
            {isLoading ? <span className="spinner-border text-white"></span> :
              <MDBIcon className="text-white" icon="search" />}
          </div>
        </Gradient>
      </div>
    </form>
  );
};

export default SearchBar;
