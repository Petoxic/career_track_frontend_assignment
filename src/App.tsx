import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Article from "./Article";
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

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          {/* <Route path="/editor" exact component={Editor} /> */}
          <Route path="/editor" exact component={NewArticle} />
          <Route path="/editor/:slug" exact component={Editor} />
          <Route path="/login" exact component={Login} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/profile/:username" exact component={Profile} />
          <Route
            path="/profile/:username/favorites"
            exact
            component={Profile}
          />
          <Route path="/register" exact component={LoginRegister} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/:slug" exact component={Article} />
          <Route path="/" component={ArticleList} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
