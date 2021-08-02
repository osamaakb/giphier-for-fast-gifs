import GifModel from "../models/GifModel";
//import StickerModel from "../Models/StickerModel"

const API_KEY = "api_key=xXR45rtNp9MpA4a2Q5LziSnkOACSSgmQ&limit=25";

class GifsRequests {
  static getTrending(itemType, signal) {
    // itemType is here in order to make the api customizable.
    // We will use it as interface to fetch gifs, stickers, etc...

    // signal will be used to abort a fetch in useEffect
    return fetch(`https://api.giphy.com/v1/${itemType}/trending?${API_KEY}`, {
      signal
    })
      .then(response => response.json())
      .then(jsonArr => jsonArr.data.map(gif => new GifModel(gif)))
      .catch(err => console.log(err));
  }

  static getRandom(itemType, signal) {

    return fetch(`https://api.giphy.com/v1/${itemType}/random?${API_KEY}`, { signal })
      .then(response => response.json())
      .then(json => new GifModel(json.data))
      .catch(err => console.log(err));
  }

  static search(query, itemType, signal) {

    return fetch(`https://api.giphy.com/v1/${itemType}/search?${API_KEY}&q=${query}`, {
      signal
    })
      .then(response => response.json())
      .then(jsonArr => jsonArr.data.map(gif => new GifModel(gif)))
      .catch(err => console.log(err));
  }
}
export default GifsRequests;
