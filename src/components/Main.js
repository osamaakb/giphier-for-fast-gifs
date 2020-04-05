import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Api from "../api";

import Grid from "./Layout/Grid";
import Modal from "./Modal";

const Main = () => {
  const location = useLocation();
  const itemType = location.pathname.split("/")[1];
  const isRandom = location.pathname.split("/")[2];

  // Key is helpful to listen for router changes
  const key = location.key;

  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const onItemClick = item => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    Api.getTrending(itemType, signal)
      .then(data => setItems(data))
      .catch(err => {
        console.error(err.message);
        setItems([]);
      });

    return () => {
      abortController.abort();
    };
  }, [itemType]);

  useEffect(() => {
    if (!isRandom) return;

    const abortController = new AbortController();
    const signal = abortController.signal;

    Api.getRandom(itemType, signal)
      .then(data => setSelectedItem(data))
      .catch(err => {
        console.error(err.message);
        setSelectedItem(null);
      });

    return () => {
      abortController.abort();
    };
  }, [itemType, key, isRandom]);

  return (
    <>
      <Grid items={items} onItemClick={onItemClick} />;
      {selectedItem && (
        <Modal
          item={selectedItem}
          show={!!selectedItem}
          toggleHandler={() => setSelectedItem(null)}
        />
      )}
    </>
  );
};

export default Main;
