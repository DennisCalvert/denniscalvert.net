import React from "react";
import Layout from "../components/layout";

const Video = (props) => {
  return (
    <Layout>
      <main className="video contentWrapper">
        <div className="videoWrapper">
          <iframe
            title="Visitant"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xTTVYc074DI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="videoWrapper">
          <iframe
            title="Day and Night"
            src="https://player.vimeo.com/video/54956306?h=57c4b266d3"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>
            <a href="https://vimeo.com/54956306">Day and Night</a> from{" "}
            <a href="https://vimeo.com/user5156571">Dennis Calvert</a> on{" "}
            <a href="https://vimeo.com">Vimeo</a>.
          </p>
        </div>
        <div className="videoWrapper">
          <iframe
            title="Explore"
            src="https://player.vimeo.com/video/39917214?h=f08d2457a4"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>
            <a href="https://vimeo.com/39917214">Explore</a> from{" "}
            <a href="https://vimeo.com/user5156571">Dennis Calvert</a> on{" "}
            <a href="https://vimeo.com">Vimeo</a>.
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default Video;
