import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import "../../firebase/firebase";
import { useState, useRef } from "react";
import realTime from "../../firebase/realTime";
import Play from "../../photos/play.png";

function Home({ posts, user }) {
  const [comment, setComment] = useState("");
  const [vidToggle, setVidToggle] = useState(false);

  const ref = useRef(null);
  const handlePlayVideo = () => {
    setVidToggle((prevVidToggle) => !prevVidToggle);
    if (!vidToggle) ref.current.play();
    else ref.current.pause();
  };

  const newComment = {
    user: user.displayName,
    comment,
  };

  const handleCommentSubmit = (url, oldComments) => {
    const data = {
      comments: [...oldComments, newComment],
    };
    try {
      const res = realTime.patch(`/posts/${url}.json`, data);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">
      <Navbar />
      {posts &&
        posts.map((post, index) => (
          <div key={index} className="post-div">
            <div className="post-top-div">{post.user}</div>
            <div className="post-middle-div">
              {post.url?.slice(36, 41) === "image" ? (
                <img className="pic" src={post.url} alt="" />
              ) : (
                <div className="video-div">
                  <video
                    onClick={handlePlayVideo}
                    ref={ref}
                    preload="metadata"
                    width="400px"
                    height="400px"
                    src={post.url}
                  ></video>
                  <img className={!vidToggle ? "play" : "paused"} src={Play} alt="" />
                </div>
              )}
            </div>
            <div className="post-bottom-div">
              {post.comments.map((comment) => (
                <div>
                  <span>{comment.user}</span>
                  <h6>{comment.comment}</h6>
                </div>
              ))}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCommentSubmit(post.key, post.comments);
                }}
              >
                <textarea
                  onChange={(e) => setComment(e.target.value)}
                  cols="30"
                  rows="10"
                ></textarea>
                <button>submit</button>
              </form>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Home;
