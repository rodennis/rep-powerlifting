import React, { useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import video from "../../photos/lift.MOV";
import "../../firebase/firebase";
import { CloudinaryContext, Transformation, Video } from "cloudinary-react";

function Home({ posts, media }) {
  return (
    <div className="home">
      <Navbar />
      <CloudinaryContext cloudName="rep-powerlifting">
        <div>
          <Video
            onClick={(event) => event.target.play()}
            onScroll={(event) => event.target.pause()}
            publicId="IMG_4378_xjcm8l"
            width="600"
            height="600"
          />
        </div>
      </CloudinaryContext>
      <img src="https://res.cloudinary.com/rodennis/image/upload/v1649176656/igkqrwwjocc4clwqlzqd.jpg" alt="" />
    </div>
  );
}

export default Home;
