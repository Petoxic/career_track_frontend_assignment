import React, { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// import Article from "./Article";
import Article from "Articles/Article";
import ArticleList from "Articles/ArticleList";
// import ArticleList from "./ArticleList";
import Editor from "./Editor";
import LoginRegister from "./LoginRegister";
import Logout from "./Logout";
import Profile from "./Profile";
// import Settings from "./Settings";
import Settings from "Settings/Settings";
import Footer from "common/Footer";
import Header from "common/Header";
import NewArticle from "NewArticle/NewArticle";
import Login from "AccountManaging/Login";
import Register from "AccountManaging/Register";
import articles from "api/articles";
import UserProfile from "UserProfile/UserProfile";

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [articleLink, setArticleLink] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  window.onload = async () => {
    if (sessionStorage.getItem("token")) {
      setIsLogin(true);
    }
    const slug: string | null = sessionStorage.getItem("slug");
    if (slug) {
      setArticleLink(slug);
    }
  };

  useEffect(() => {
    const user: string | null = sessionStorage.getItem("currentUserProfile");
    if (user) {
      setUsername(user);
    }
  }, []);

  return (
    <Router>
      <div>
        <Header isLogin={isLogin} setIsLogin={setIsLogin} />
        <Switch>
          {/* <Route path="/editor" exact component={Editor} /> */}
          <Route path="/editor" exact component={NewArticle} />
          <Route path="/editor/:slug" exact component={Editor} />
          <Route
            path="/login"
            exact
            component={() => (
              <Login setIsLogin={setIsLogin} setUsername={setUsername} />
            )}
          />
          <Route path="/logout" exact component={Logout} />
          <Route
            path="/profile/:username"
            exact
            component={() => (
              <UserProfile
                username={username}
                setArticleLink={setArticleLink}
              />
            )}
          />
          <Route
            path="/profile/:username/favorites"
            exact
            component={Profile}
          />
          <Route path="/register" exact component={Register} />
          <Route path="/settings" exact component={Settings} />
          <Route
            path="/:slug"
            exact
            component={() => <Article articleLink={articleLink} />}
          />
          <Route
            path="/"
            component={() => <ArticleList setArticleLink={setArticleLink} />}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
