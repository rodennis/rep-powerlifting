import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { storage } from "../../firebase/firebase";
import '../../firebase/firebase.js'

function Upload() {
    const [progress, setProgress] = useState(0);
    const [picUrl, setPicUrl] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const file = e.target[0].files[0];
      upLoadFiles(file);
    };
  
    const upLoadFiles = (file) => {
      if (!file) return;
      const storageRef = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => setPicUrl(url));
        }
      );
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="file" className="input" />
          <button>Upload</button>
        </form>
        <br />
        <h3>Uploaded {progress} %</h3>
        <br />
        <img className="uploadedPicture" src={picUrl} alt="" />
      </div>
    );
  }

export default Upload