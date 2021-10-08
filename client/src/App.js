import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AllGames from './pages/AllGames';
import Contact from './pages/Contact';
import Donations from './pages/Donations';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import SingleGame from './pages/SingleGame';
import Nav from './components/Nav';
import ForgotPW from './pages/ForgotPW';
import Footer from './components/Footer';
import SubmitGame from './pages/SubmitGame';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/games" component={AllGames} />
          <Route exact path="/games/:name" component={SingleGame} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/profile/:username" component={Profile} />
          <Route exact path="/submitgame" component={SubmitGame} />
          <Route exact path="/donate" component={Donations} />
          <Route exact path="/forgotpassword" component={ForgotPW} />
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
