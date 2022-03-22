import React from "react";
import "./Home.css";

function Home({posts}) {
  
  return (
    <div className="home">
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
