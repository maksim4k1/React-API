import { Switch, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import "./styles/App.scss";
import Books from "./pages/Books";
import About from "./pages/About";
import Book from "./pages/Book";
import Main from "./pages/Main";

const App = () => {
  return(
    <div>
      <Header/>
      <div className="container" style={{margin: "75px auto"}}>
        <Switch>
          <Route path="/" component={Main} exact/>
          <Route path="/books" component={Books} exact/>
          <Route path="/about" component={About} exact/>
          <Route path="/books/:id" component={Book} exact/>
        </Switch>
      </div>
    </div>
  );
};

export default App;