import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import MyProfile from './pages/MyProfile';
import DonorSignUp from './pages/DonorSignUp';
import DonorLogin from './pages/DonorLogin';
import BankSignUp from './pages/BankSignUp';
import Search from './pages/Search';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={ Home }/>
          <Route path='/donor-signup' component={ DonorSignUp }/>
          <Route path='/donor-login' component={ DonorLogin }/>
          <Route path='/bank-signup' component={ BankSignUp }/>
          <Route path='/profile' component={ MyProfile }/>
          <Route path='/search' component={Search} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
