import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogPost from "./app/blogpost";

function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <Switch>
                <Route path="/" exact component={BlogPost} />
              </Switch>
            </div>
          </div>
        </div>
      </React.Fragment>
    </Router>
  );
}
export default App;
