import Image from './Image/bg.svg'
import girl from './Image/girl.svg'
import boy from './Image/boy.svg'
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
            <img className="waiting" src={Image} alt=""/>
        <motion.img src={girl} drag className="girl"
    dragConstraints={{
      top: 0,
      left: -500,
      right: 500,
      bottom: 10,
    }}/>
    <motion.img src={boy} drag className="boy"
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
