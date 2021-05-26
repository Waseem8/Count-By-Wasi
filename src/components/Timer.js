import React,{useState} from 'react'

const Timer = () => {
    const [day,setDay] = useState('Time')
    const [hour,setHour] = useState('Time')
    const [minute,setMinute] = useState('Time')
    const [second,setSecond] = useState('Time')
    React.useEffect(()=>{
        const countDate = new Date("May 27, 2022 00:00:00").getTime()
        const now = new Date().getTime();
        const gap = countDate-now;
    
        //How time works
        const second = 1000;
        const minut = second * 60;
        const hour = minut * 60;
        const day = hour * 12;
        
        //Calculate the gap
        setTimeout(()=>{
            setDay((gap /day).toFixed(0))
            setHour(((gap % day)/hour).toFixed(0))
            setMinute(((gap % hour)/minut).toFixed(0))
            setSecond(((gap % minut)/second).toFixed(0))
        },1000)
        
    })
    
    return (
        <div class="countdown">
                <div class="container-day">
                    <h3 class="day">{day}</h3>
                    <h3>Day</h3>
                </div>
                <div class="container-hour">
                    <h3 class="hour">{hour}</h3>
                    <h3>Hour</h3>
                </div>
                <div class="container-minute">
                    <h3 class="minute">{minute}</h3>
                    <h3>Minute</h3>
                </div>
                <div class="container-second">
                    <h3 class="second">{second}</h3>
                    <h3>Secend</h3>
                </div>
            </div>
    )
}

export default Timer
