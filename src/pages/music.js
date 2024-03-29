import React from "react";
import Layout from "../components/layout";

const Music = (props) => {
  return (
    <Layout>
      <main className="about contentWrapper">
        <a href="ttps://twitter.com/munook" target="_blank" rel="noreferrer">
          Munook
        </a>
        <a href="https://www.coryanchors.com/" target="_blank" rel="noreferrer">
          Cory Anchors
        </a>
        <iframe
          src="https://open.spotify.com/embed/artist/2BP7WZscW5fKFsXf53Eh7B?theme=0"
          width="100%"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="The Volstead Act"
        ></iframe>
      </main>
    </Layout>
  );
};

export default Music;
