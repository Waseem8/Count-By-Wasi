import Image from './Image/countdown.svg'
import Time from './components/Timer'
import './App.css'
function App() {
  return (
    <div class="coming-soon">
        <div>
            <h2>We are opening soon!</h2>
            <Time/>
            </div>
        <img className="waiting" src={Image} alt=""/>
    </div>
  );
}

export default App;
