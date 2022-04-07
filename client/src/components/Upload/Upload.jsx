import React, { useState, useEffect, useRef } from "react";
import "./Upload.css";
import realTime from "../../firebase/realTime";

function Upload({ setToggle, user, setMedia }) {

  const [pickedPicture, setPickedPicture] = useState();
  const [userMedia, setUserMedia] = useState([])

  const createPost = async (data) => {
    try{
      const res = realTime.post('/posts.json', data)
      return res
    } catch(error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append("file", userMedia);
    formData.append("upload_preset", "bt4evw90");

    const data = await fetch(
      "http://api.cloudinary.com/v1_1/rodennis/image/upload",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        return result;
      });

      const newPost = {
        user: user?.displayName,
        url: `https://res.cloudinary.com/rodennis/image/upload/v1649176656/${data?.public_id}.jpg`
      }

      await createPost(newPost)
      setToggle(prevToggle => !prevToggle)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button>Upload</button>
        <input
          onChange={e => setUserMedia(e.target.files[0])}
          type="file"
          className="input"
        />{" "}
        <br />
          {/* <video className="picked-video" controls autoPlay loop muted>
            <source type="video/quicktime" src={pickedPicture} />
            <source type="video/mp4" src={pickedPicture} />
            <source type="video/ogg" src={pickedPicture} />
          </video> */}
          <img
            className="picked-picture"
            src={pickedPicture}
            alt=""
          />
        <br />
        <textarea name="" id="" cols="30" rows="5"></textarea> <br />
      </form>
    </div>
  );
}

export default Upload;
