import React from "react";
import styles from "./App.module.css";
import { useState } from "react";
import Yelp from "../../utils/yelpAPI";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = (location, term, sortBy) => {
    Yelp.getData(location, term, sortBy).then((data) => {
      setBusinesses(data.businesses);
      console.log(location, term, sortBy);
    });
  };

  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
