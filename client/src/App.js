import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import MyProfile from './pages/MyProfile';
import DonorSignUp from './pages/DonorSignUp';
import DonorLogin from './pages/DonorLogin';
import DonorLogin2 from './pages/DonorLogin2';
import BankSignUp from './pages/BankSignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={ Home }/>
          <Route path='/donor-signup' component={ DonorSignUp }/>
          <Route path='/donor-login' component={ DonorLogin2 }/>
          <Route path='/bank-signup' component={ BankSignUp }/>
          <Route path='/profile' component={ MyProfile }/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
