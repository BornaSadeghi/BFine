import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import FindCentre from './pages/FindCentre';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={ Home }/>
          <Route path='/find-donation-centre' component={ FindCentre }/>
          <Route path='/signup' component={ SignUp }/>
          <Route path='/login' component={ Login }/>
          <Route path='/profile' component={ MyProfile }/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
