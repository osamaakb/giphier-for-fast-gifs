import BaseModel from "./BaseModel";

const sizes = {
  downsized: {
    large: "downsized_large",
    medium: "downsized_medium",
    base: "downsized",
    small: "downsized_small"
  },

  stills: {
    fhs: "fixed_height_small_still",
    ds: "downsized_still",
    fh: "fixed_height_still",
    fws: "fixed_width_small_still",
    o: "original_still",
    fw: "fixed_width_still",
    w480: "480w_still"
  },
  fixed_width: {
    downsampled: "fixed_width_downsampled",
    small: "fixed_width_small",
    base: "fixed_width"
  },
  fixed_height: {
    downsampled: "fixed_height_downsampled",
    small: "fixed_height_small",
    base: "fixed_height"
  },
  preview: { webp: "preview_webp", base: "preview", gif: "preview_gif" },
  original: { base: "original", mp4: "original" },
  looping: "looping"
};

const size = sizes.downsized.medium;
const video = sizes.original.mp4

class GifModel extends BaseModel {
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
    this.isGif = true;
  }
}

export default GifModel;
