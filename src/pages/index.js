import * as React from "react";
import Layout from "../components/layout";

const images = [
  "https://live.staticflickr.com/65535/48522179056_8fa1c2bf76_o.jpg",
  "https://i.pinimg.com/originals/da/88/99/da8899c5a2d65e1875cfcd093b5bb95d.jpg",
  "https://live.staticflickr.com/2869/10519922964_35cfb7997b_o.jpg",
  "https://live.staticflickr.com/8281/7794234418_7a09e727c4_o.jpg",
  "https://live.staticflickr.com/65535/48522179056_8fa1c2bf76_o.jpg",
  "https://live.staticflickr.com/65535/48522179056_8fa1c2bf76_o.jpg",
  "https://i.pinimg.com/originals/da/88/99/da8899c5a2d65e1875cfcd093b5bb95d.jpg",
  "https://live.staticflickr.com/65535/48522179056_8fa1c2bf76_o.jpg",
  "https://live.staticflickr.com/65535/48522179056_8fa1c2bf76_o.jpg",
  "https://live.staticflickr.com/65535/48522179056_8fa1c2bf76_o.jpg",
  "https://live.staticflickr.com/65535/48522179056_8fa1c2bf76_o.jpg",
  "https://live.staticflickr.com/65535/48522179056_8fa1c2bf76_o.jpg",
  "https://live.staticflickr.com/65535/48522179056_8fa1c2bf76_o.jpg",
  "https://live.staticflickr.com/65535/48522179056_8fa1c2bf76_o.jpg",
  "https://live.staticflickr.com/65535/48522179056_8fa1c2bf76_o.jpg",
  "https://live.staticflickr.com/65535/48522179056_8fa1c2bf76_o.jpg",
  "https://live.staticflickr.com/65535/48522179056_8fa1c2bf76_o.jpg",
  "https://live.staticflickr.com/65535/48522179056_8fa1c2bf76_o.jpg",
];

const imgPreview = (url) => (
  <div className="imgWrapper" style={{ backgroundImage: `url(${url})` }} />
);

const IndexPage = () => {
  return (
    <Layout>
      <div className="imgGallery">{images.map(imgPreview)}</div>
    </Layout>
  );
};

export default IndexPage;
