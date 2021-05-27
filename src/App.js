import Image from './Image/countdown.svg'
import Time from './components/Timer'
import './App.css'
import { motion } from "framer-motion"


function App() {
  return (
    <div class="coming-soon">
        <div>
            <h2>We are opening soon!</h2>
            <Time/>
            </div>
        <motion.img className="waiting" src={Image} alt="" drag
    dragConstraints={{
      top: 0,
      left: -500,
      right: 500,
      bottom: 10,
    }}/>
    </div>
  );
}

export default App;
