
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Add from './Add';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/add">
              <Add />
            </Route>
            <Footer />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
