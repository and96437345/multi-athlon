import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ResultsList from './components/ResultsList';
import ResultsPage from './components/ResultsPage';
import PerfomancesPage from './components/PerfomancesPage';
import RegistrationForm from './components/RegistrationForm';
import LogIn from './components/LogIn';
import Profile from './components/Profile';
import Results from './components/Results';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route exact path='/hero' element={<Hero />} />
            <Route path='/resultsPage' element={<ResultsPage />} />
            <Route path='/perfomancesPage' element={<PerfomancesPage />} />
            <Route path='/registrationForm' element={<RegistrationForm />} />
            <Route path='/logIn' element={<LogIn />}/>
            <Route path='/profile' element={<Profile />} />
          </Routes>
          <Results />
        <Footer />
      </div>  
    </Router>       
  );
}

export default App;
