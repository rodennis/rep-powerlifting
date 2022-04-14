import React, { useState } from "react";
import "./Upload.css";
import realTime from "../../firebase/realTime";
import { useNavigate } from "react-router-dom";

function Upload({ setToggle, user }) {

  const [pickedPicture, setPickedPicture] = useState();
  const [userMedia, setUserMedia] = useState([])
  const [caption, setCaption] = useState('')

  const navigate = useNavigate()

  const createPost = async (data) => {
    try{
      const res = realTime.post('/posts.json', data)
      return res
    } catch(error) {
      console.log(error)
    }
  }

  const handlePostSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("file", userMedia);
    formData.append("upload_preset", "bt4evw90");

    const data = await fetch(
      userMedia.type.slice(0, 5) === 'image' ? "http://api.cloudinary.com/v1_1/rodennis/image/upload" : "http://api.cloudinary.com/v1_1/rodennis/video/upload",
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
        url: userMedia.type.slice(0, 5) === 'image' ? `https://res.cloudinary.com/rodennis/image/upload/v1649176656/${data?.public_id}.jpg` : `https://res.cloudinary.com/rodennis/video/upload/v1649176656/${data?.public_id}.mp4`,
        caption,
        comments: ['these will be comments']
      }

      await createPost(newPost)
      setToggle(prevToggle => !prevToggle)
      navigate('/')
  }

  const handleFileChange = (file) => {
    setUserMedia(file)
    setPickedPicture(URL.createObjectURL(file))
  }

  return (
    <div>
      <form onSubmit={handlePostSubmit}>
        <button>Upload</button>
        <input
          onChange={e => handleFileChange(e.target.files[0])}
          type="file"
          className="input"
        />{" "}
        <br />
          <img
            className="picked-picture"
            src={pickedPicture}
            alt=""
          />
        <br />
        <textarea onChange={e => setCaption(e.target.value)} placeholder='Leave a caption...' cols="30" rows="5"></textarea> <br />
      </form>
    </div>
  );
}

export default Upload;
