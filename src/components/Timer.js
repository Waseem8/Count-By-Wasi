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
        <div className="countdown">
                <div className="container-day">
                    <h3 className="day">{day}</h3>
                    <h3>Day</h3>
                </div>
                <div className="container-hour">
                    <h3 className="hour">{hour}</h3>
                    <h3>Hour</h3>
                </div>
                <div className="container-minute">
                    <h3 className="minute">{minute}</h3>
                    <h3>Minute</h3>
                </div>
                <div className="container-second">
                    <h3 className="second">{second}</h3>
                    <h3>Secend</h3>
                </div>
            </div>
    )
}

export default Timer
