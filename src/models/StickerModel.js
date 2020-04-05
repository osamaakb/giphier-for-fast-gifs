import BaseModel from "./BaseModel";

//This file is useless for now until sticker features start. It is created as a place holder

const size = "downsized_medium";
const video = 'original'

class StickerModel extends BaseModel {
  constructor(json) {
    super(
      json.id,
      json.images[size].url,
      json.title,
      json.username,
      json.url,
      json.embed_url,
      json.images[video].mp4,
      json
    );
    this.isSticker = true;
  }
}

export default StickerModel;
