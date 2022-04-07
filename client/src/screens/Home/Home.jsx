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
    </div>
  );
}

export default Home;
