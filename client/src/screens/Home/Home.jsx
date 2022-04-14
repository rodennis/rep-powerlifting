import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import "../../firebase/firebase";
import { useState } from "react";
import realTime from "../../firebase/realTime";

function Home({ posts, user }) {
  const [comment, setComment] = useState("");

  const newComment = {
    user: user.displayName,
    comment,
  };

  const handleCommentSubmit = (url, oldComments) => {
    const data = {
      comments:  [...oldComments, newComment]
    };
    try {
      const res = realTime.patch(`/posts/${url}.json`, data);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

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
                <video
                  controls
                  width="400px"
                  height="400px"
                  src={post.url}
                ></video>
              )}
            </div>
            <div className="post-bottom-div">
              {post.comments.map(comment => (
                <div>
                  <span>{comment.user}</span>
                  <h6>{comment.comment}</h6>
                </div>
              ))}
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleCommentSubmit(post.key, post.comments)
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
