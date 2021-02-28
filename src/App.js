import "./App.css";
import Catalog from "./catalog/Catalog";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Detail from "./catalog/Detail";
import NoMatch from "./catalog/NoMatch";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Catalog} />
            <Route path="/details" exact>
              <Redirect to="/"></Redirect>
            </Route>
            <Route path="/details/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
