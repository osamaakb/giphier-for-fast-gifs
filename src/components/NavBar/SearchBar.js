import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBIcon
} from "mdbreact";
import { Gradient } from "react-gradient";

import { SEARCH_TYPES } from "../Search";

const searchGradient = [
  ["lime", "coral"],
  ["magenta", "gold"],
  ["violet", "royalblue"]
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState(SEARCH_TYPES.default);
  const history = useHistory();
  const isLoading = useSelector(state => state.isLoading)

  const search = e => {
    e.preventDefault();
    history.push(`/search/${searchType.slug}/${query}`);
  };

  return (
    <form onSubmit={search}>
      <div className="d-flex">
        <MDBDropdown size="sm">
          <MDBDropdownToggle caret color="dark">
            {searchType.name}
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
            {Object.values(SEARCH_TYPES).map(item => (
              <MDBDropdownItem
                key={item.slug}
                onClick={() => setSearchType(item)}
              >
                {item.name}
              </MDBDropdownItem>
            ))}
          </MDBDropdownMenu>
        </MDBDropdown>
        <input
          className="flex-fill"
          placeholder="Search for gif or sticker"
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
