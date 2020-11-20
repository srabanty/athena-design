import logo from './logo.svg';
import './App.css';
import Achievement from './components/Achievements/Achievement';
import ChooseTeam from './components/ChooseTeam/ChooseTeam';
import GetDesign from './components/GetDesign/GetDesign';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Achievement/>
      <ChooseTeam/>
      <GetDesign/>
      <Footer/>
    </div>
  );
}

export default App;
