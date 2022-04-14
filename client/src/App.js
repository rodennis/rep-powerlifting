import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./screens/Home/Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserLogin from "./screens/UserLogin/UserLogin";
import UserSignup from "./screens/UserSignup/UserSignup";
import { ref as dbRef, onValue } from "firebase/database";
import { db } from "./firebase/firebase";
import Upload from "./components/Upload/Upload";

function App() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const func = async () => {
      const auth = getAuth();
      await onAuthStateChanged(auth, (user) => setUser(user));
    };
    func();
  }, []);

  useEffect(() => {
    onValue(dbRef(db), (snapshot) => {
      const res = snapshot.val();
      let data = res?.posts;
      if (data) {
        const returnedPosts = Object?.entries(data).map(
          ([key, { caption, comments, url, user }]) => ({
            key,
            caption,
            comments,
            url,
            user,
          })
        );
        setPosts(returnedPosts);
      }
    });
  }, [toggle]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Home posts={posts} user={user} />
            ) : (
              <UserLogin setUser={setUser} />
            )
          }
        />
        <Route path="/signup" element={<UserSignup setUser={setUser} />} />
        {user && (
          <Route
            path="/upload"
            element={<Upload user={user} setToggle={setToggle} />}
          />
        )}
      </Routes>
    </div>
  );
}

export default App;
