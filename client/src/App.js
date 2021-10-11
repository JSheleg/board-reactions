import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


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
import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
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
            <Route exact path="/forgotpassword" component={ForgotPW}   />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
