import React, { useState, useEffect, useRef } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { storage } from "../../firebase/firebase";
import "../../firebase/firebase.js";
import { db } from "../../firebase/firebase";
import { uid } from "uid";
import { set, ref as dbRef } from "firebase/database";

function Upload({ setToggle, user }) {
  const [progress, setProgress] = useState(0);
  const [picUrl, setPicUrl] = useState("");
  const [pickedPicture, setPickedPicture] = useState('')
  const [message, setMessage] = useState('')

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const writeToDatabase = () => {
      const uuid = uid();
      set(dbRef(db, `/${uuid}`), {
        picUrl,
        user,
        uuid
      });
      console.log("fired");
    };
    writeToDatabase();
    setToggle((prevToggle) => !prevToggle);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [picUrl]);

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
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setPicUrl(url);
        });
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setPickedPicture(URL.createObjectURL(e.target.files[0]))} type="file" className="input" /> <br />
        <textarea name="" id="" cols="30" rows="5"></textarea> <br />
        <button>Upload</button>
      </form>
      <br />
      <h3>Uploaded {progress} %</h3>
      <img src={pickedPicture} alt="" />
      <br />
    </div>
  );
}

export default Upload;
