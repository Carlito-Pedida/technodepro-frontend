import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./App.css";
import EditPost from "./components/EditPost";
import NewPost from "./components/NewPost";
import Landing from "./components/Landing";
import NewsFeed from "./components/NewsFeed";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import { UserProvider } from "./contexts/UserProvider";
import { PostProvider } from "./contexts/PostProvider";
import jwtDecode from "jwt-decode";
import SignOut from "./components/SignOut";
import EditProfile from "./components/EditProfile";
import EditUserPost from "./components/EditUserPost";
import NewUser from "./components/NewUser";
import TechWorld from "./components/TechWorld";
import TechWorldArticle from "./components/TechWorldArticle";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("myUserToken");
      const userToken = jwtDecode(jwt);
      setUser(userToken);
    } catch (ex) {}
  }, []);

  return (
    <div>
      <UserProvider>
        <PostProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigation user={user} />}>
                <Route index element={<Landing user={user} />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/new-user" element={<NewUser />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signout" element={<SignOut />} />
                <Route path="/newsfeed" element={<NewsFeed />} />
                <Route path="/post/new" element={<NewPost />} />
                <Route path="/tech-world" element={<TechWorld />} />
                <Route path="/tech-world-html" element={<TechWorldArticle />} />
                <Route path="/post/:postId/edit/" element={<EditPost />} />
                <Route
                  path="/userpost/:postId/edit/"
                  element={<EditUserPost />}
                />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/profile/:id/edit" element={<EditProfile />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PostProvider>
      </UserProvider>
    </div>
  );
}

export default App;
