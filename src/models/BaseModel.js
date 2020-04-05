// The base model will serve as an interface for bth gif and sticker models. Since we want
// our app to be as abstract as possible without actually knowing what is it dealing with
// In the grid and modal, we will assume we get a base model and use its getters to access data without
// knowing what they really are. Merely items.
// This requires as to remap the different data shapes for stickers and gifs to fall into this model as required
// using thier models constructor
// That is in case we are using different apis

class BaseModel {
  constructor(id, src, title, username, url, embedUrl, mp4, json) {
    this.id = id;
    this.src = src;
    this.title = title;
    this.username = username;
    this.embedUrl = embedUrl;
    this.url = url;
    this.mp4 = mp4;
    this.json = json;
  }

  getImageSize() {
    return null;
  }

  getSrc() {
    return this.src;
  }

  getAlt() {
    return this.title;
  }

  getEmbed() {
    return this.embedUrl;
  }

  getMp4() {
    return this.url;
  }

  getId() {
    return this.id;
  }
}

export default BaseModel;
