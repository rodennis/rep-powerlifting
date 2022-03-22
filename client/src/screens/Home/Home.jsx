import React, { useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import video from '../../photos/lift.MOV'
import VideoConverter from 'convert-video'

function Home({posts}) {

  const [temp, setTemp] = useState('')

  VideoConverter.convert(video, 'mp4');
  async function convertVideo(input) {
    let sourceVideoFile = video
    let targetVideoFormat = 'mp4'
    let convertedVideo = await VideoConverter.convert(sourceVideoFile, targetVideoFormat);
    setTemp(convertedVideo)
}
convertVideo()
  
  return (
    <div className="home">
      <Navbar />
      {
        posts?.map(post => (
          <div>
            <img className="pic" src={post.picUrl} alt="" />
          </div>
        ))
      }
      <video className="picked-video" controls autoPlay loop muted>
            <source
              src={temp}
              type="video/mp4"
            ></source>
          </video>
    </div>
  );
}

export default Home;
