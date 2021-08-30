import * as React from "react";
import Layout from "../components/layout";

const images = [
  {
    src: "https://live.staticflickr.com/65535/48522179056_8fa1c2bf76_o.jpg",
    alt: "Dennis Calvert",
  },
  {
    src: "https://i.pinimg.com/originals/da/88/99/da8899c5a2d65e1875cfcd093b5bb95d.jpg",
    alt: "Light Painting Dennis Calvert",
    portrait: true,
  },
  {
    src: "https://i.pinimg.com/originals/da/88/99/da8899c5a2d65e1875cfcd093b5bb95d.jpg",
    alt: "Light Painting Dennis Calvert",
    portrait: true,
  },
  {
    src: "https://live.staticflickr.com/2869/10519922964_35cfb7997b_o.jpg",
    alt: "Light Painting Dennis Calvert",
  },
  {
    src: "https://live.staticflickr.com/8281/7794234418_7a09e727c4_o.jpg",
    alt: "Light Painting Dennis Calvert",
  },
  {
    src: "https://pro2-bar-s3-cdn-cf1.myportfolio.com/5700757d-0065-43b1-b2cd-469cfd68d952/94f1a23c-6475-4b13-b6be-4e3f33fa7e52_rw_1920.jpg?h=0505e16df8b41fe61b792e7dc4918356",
  },
  {
    src: "https://pro2-bar-s3-cdn-cf.myportfolio.com/5700757d-0065-43b1-b2cd-469cfd68d952/1904d210-c714-43e4-8cb8-6612471a9e55_rw_1920.jpg?h=62164982a9295082811629754ad5e846",
  },
  {
    src: "https://pro2-bar-s3-cdn-cf.myportfolio.com/5700757d-0065-43b1-b2cd-469cfd68d952/19ffdc05-a538-41c5-b3f7-b283df00b0b5_rw_1920.jpg?h=af64ac75b26650f1cd894dc6ba633478",
  },
  {
    src: "https://pro2-bar-s3-cdn-cf2.myportfolio.com/5700757d-0065-43b1-b2cd-469cfd68d952/dd21bfca-fdf1-4445-a22d-caced0ba91d9_rw_1920.jpg?h=28a76c1628acb14b26ed4b7e4a5880ea",
  },
  {
    src: "https://pro2-bar-s3-cdn-cf4.myportfolio.com/5700757d-0065-43b1-b2cd-469cfd68d952/5bc49717-d316-4ce0-9f65-785ae4d5f8d4_rw_1920.jpg?h=1acadc4f4a320af0388fa4eda3bd7184",
  },
  {
    src: "https://pro2-bar-s3-cdn-cf.myportfolio.com/5700757d-0065-43b1-b2cd-469cfd68d952/bd64334e-4898-4bca-9fb4-cff15df7e53e_rw_1920.jpg?h=30182487eaea3ac57072f324f8be7966",
  },
  {
    src: "https://pro2-bar-s3-cdn-cf2.myportfolio.com/5700757d-0065-43b1-b2cd-469cfd68d952/3013576f-c077-4bde-8086-11130aa51fe5_rw_1920.jpg?h=7c6d55a152abdd7787c776930f49d9b4",
  },
  {
    src: "https://pro2-bar-s3-cdn-cf.myportfolio.com/5700757d-0065-43b1-b2cd-469cfd68d952/bf5d966f-6276-4d9c-874e-54390fef2dc4_rw_1920.jpg?h=4826b5330dac6be6d7e73d91c0566737",
  },
  {
    src: "https://pro2-bar-s3-cdn-cf1.myportfolio.com/5700757d-0065-43b1-b2cd-469cfd68d952/246a127f-b556-4e5f-a495-dfca6044d482_rw_1920.jpg?h=524d3c111fd8fc9d3935379af01c96ea",
  },
  {
    src: "https://pro2-bar-s3-cdn-cf.myportfolio.com/5700757d-0065-43b1-b2cd-469cfd68d952/b50e3134-f010-4ecf-9bfe-b2a3b7d66964_rw_1920.jpg?h=fac7900ace066a1a9f6e87b430b962f1",
  },
  {
    src: "https://pro2-bar-s3-cdn-cf3.myportfolio.com/5700757d-0065-43b1-b2cd-469cfd68d952/42f8810d-c35d-445a-bb89-1872daa4674c_rw_1920.jpg?h=c2f784ba8753ab1845adfac3bb24115d",
  },
  {
    src: "https://pro2-bar-s3-cdn-cf6.myportfolio.com/5700757d-0065-43b1-b2cd-469cfd68d952/7319d781-ead4-4879-a18d-ae4a0ee665a0_rw_1920.jpg?h=4b43755f1f39c4976a785d32c9ddd63a",
  },
  {
    src: "https://pro2-bar-s3-cdn-cf4.myportfolio.com/5700757d-0065-43b1-b2cd-469cfd68d952/53693513-1d0d-453e-b861-d670c2e32757_rw_1920.jpg?h=09653998d999b4cb1486fead7765eb46",
  },
];

const imgPreview = ({ src, alt, portrait }) => (
  // <div className="imgWrapper" style={{ backgroundImage: `url(${url})` }} />
  <img
    className={`galleryImg ${portrait ? "portrait" : ""}`}
    alt={alt}
    src={src}
  />
);

const IndexPage = () => {
  return (
    <Layout>
      <div className="imgGallery">{images.map(imgPreview)}</div>
    </Layout>
  );
};

export default IndexPage;
