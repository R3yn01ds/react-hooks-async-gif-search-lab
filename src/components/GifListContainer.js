import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer () {
  const [gifs, setGifs] = useState([]);
  // const [query, setQuery] = useState("dolphins");

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=7aWOUF7ltSlvncKu49oY2qXXWcYEjkxx&rating=g`
    )
      .then(resp => {
        return resp.json()
      })

      .then(({data}) => {
        console.log(data.slice(0,3))
        const newData = data.slice(0,3).map (gif => {
          return {url: gif.images.original.url}
        
      })
      setGifs(newData)
    })
  }, [])

  const onSearchFormSubmit = () => {
    console.log("running on search function")
  }

  return (
    <div style={{ display: "flex" }}>
      <GifList theGifs={gifs} />
      <GifSearch onSearchFormSubmit={onSearchFormSubmit} />
    </div>
  );
}

export default GifListContainer;