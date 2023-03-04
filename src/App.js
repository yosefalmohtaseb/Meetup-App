import "./index.css";
import { Route, Switch } from "react-router-dom";
import AllMeatUp from "./pages/AllMeatUp";
import NewMeatUp from "./pages/NewMeatUp";
import Favorites from "./pages/Favorites";
import Layout from "./component/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact="true" component={AllMeatUp} />
        <Route path="/new">
          <NewMeatUp />
        </Route>
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </Layout>
  );
}

export default App;
