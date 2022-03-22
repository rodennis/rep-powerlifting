import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";

function Home({posts}) {
  
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
    </div>
  );
}

export default Home;
