import logo from './logo.svg';
import './App.css';
import HomeMain from './components/HomeMain/HomeMain';
import About from './components/About/About';
import Services from './components/Services/Services';
import Achievement from './components/Achievements/Achievement';
import ChooseTeam from './components/ChooseTeam/ChooseTeam';
import GetDesign from './components/GetDesign/GetDesign';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <HomeMain />
      <About />
      <Services />
      <Achievement/>
      <ChooseTeam/>
      <GetDesign/>
      <Footer/>
    </div>
  );
}

export default App;
