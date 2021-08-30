import * as React from "react";
import Layout from "../components/layout";

const features = [
  {
    href: "/about",
    title: "Digital Photographer Brazil",
  },
  {
    href: "https://improvephotography.com/36193/creative-light-with-dennis-calvert-ps-41/",
    title: (
      <>
        Improve Photography Podcast With Nick Page <br />
        <iframe
          width="320"
          height="50"
          src="https://improvephotography.com/?powerpress_embed=36193-podcast&powerpress_player=mediaelement-audio"
          frameborder="0"
          scrolling="no"
          title="Improve Photography"
        />
      </>
    ),
  },
  {
    href: "http://www.slate.com/blogs/browbeat/2011/10/26/paranormal_light_painting_activity_.html",

    title: "Slate",
  },
  {
    href: "https://www.southernliving.com/travel/2016-people-changing-south?slide=1f8dc520-b339-47d5-b2a7-1c7a2e2cfc46#1f8dc520-b339-47d5-b2a7-1c7a2e2cfc46",
    title: "Southern Living - Innovators Changing the South",
  },
  {
    href: "https://mymodernmet.com/dennis-calvert-flashlight-photography/",
    title: "My Modern Met",
  },
  {
    href: "https://lightpaintingphotography.com/light-painting-artist/featured-artist-2/dennis-calvert/",
    title: "LightPaintingPhotography.com interview",
  },
  {
    href: "https://www.amazon.com/Night-Photography-Light-Painting-Finding/dp/0415718988/ref=asc_df_0415718988/?tag=hyprod-20&linkCode=df0&hvadid=312038987516&hvpos=&hvnetw=g&hvrand=5259060208160987141&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1013014&hvtargid=pla-449452096002&psc=1",
    title: (
      <>
        Night Photography and Light Painting: <br />
        Finding Your Way in the Dark <br />
        (Book)
      </>
    ),
  },
];

const tutorials = [
  {
    href: "https://www.diyphotography.net/light-painting-and-el-wire-secrets-revealed/",
    title: "El Wire",
  },
  {
    href: "https://www.diyphotography.net/light-painting-people-on-magical-fire/",
    title: "Man on Fire",
  },
  {
    href: "https://www.diyphotography.net/bts-how-deserted-cave-was-light-painted-magical-realm/",
    title: "Light Painting in a Cave",
  },
  {
    href: "https://www.diyphotography.net/make-light-painting-circles-with-light/",
    title: "Light Cirlces",
  },
];

const ListItems = (list) => (
  <ul>
    {list.map((item) => (
      <li>
        <a href={item.href} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      </li>
    ))}
  </ul>
);

export default function Component() {
  return (
    <Layout>
      <main className="about contentWrapper">
        <div className="aboutWrapper">
          <div>
            <h2 id="what-is-light-painting">What is Light Painting?</h2>
            <p>
              Light is the primary factor in our ability to interpret and define
              the universe. Capturing light in long exposures breaks down our
              conventional understandings of time and space. Time is no longer
              linear. We see multiple moments all at once. We become time
              travelers.
            </p>
            <p>
              Dennis’s light paintings are straight out of the camera with NO
              digital manipulation whatsoever. The effects are all created in
              camera during the exposure.
            </p>
            <h2 id="who-is-dennis">Who is Dennis?</h2>
            <p>
              Dennis Calvert is a photographer and software engineer living in
              Birmingham, Alabama.
            </p>
          </div>
          <div>
            <img
              src="https://live.staticflickr.com/2877/34264816695_b57100bc4b_c.jpg"
              alt="Dennis Calvert"
            />
          </div>
        </div>
        <div className="videoWrapper">
          <iframe
            src="https://www.youtube.com/embed/sd--AdjwNcg"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            title="Dennis Calvert"
            allowfullscreen
          ></iframe>
        </div>
        <div className="aboutWrapper">
          <div>
            <h2 id="interviews-and-features">Interviews and Features</h2>
            {ListItems(features)}
          </div>
          <div>
            <h2 id="published-tutorials">Published Tutorials</h2>
            {ListItems(tutorials)}
          </div>
        </div>
      </main>
    </Layout>
  );
}
