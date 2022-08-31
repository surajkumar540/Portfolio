import React, { useState } from 'react'
import './Works.scss';
const Works = () => {
 
  const [currentSlide, setCurrentSlide ] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Jira Task Management Web Application",
      desc:
        " Created a JIRA Web Application that helps Prioritising your tasks in Local Storage",
      img:"./slider/jiraSlider.png",
      link:"https://surajkumar540.github.io/jira-taskApp/"
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Crypto Currency Tracker Application",
      desc:
        "Built currency tracker in React and Get coin chart like - Ranking coins, Current price, Market capital, Total volume, About coin etc.",
      img:"./slider/cryptoCoinsTracker.png",
      link:"https://cryto-coins-tracker.netlify.app/"
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Excel Worksheet Web Application",
      desc:
        "Built an excel worksheet website and Integrated sheets with tools to change the design, font colour and style of fonts using DOM.",
      img:
        "./slider/excellClone.png",
      link:"https://surajkumar540.github.io/Excel-Clone/"
    },
  ];

  const handleClick = (way)=>{
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
      setCurrentSlide(currentSlide< data.length-1 ?currentSlide+1 : 0) 
  }

  return (
    <div className='works' id='works'>
      <div className='slider' 
      style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
           {data.map((d) =>(
             <div className='container'>
              <div className='item'>
                <div className='left'>
                  <div className='leftContainer'>
                    <div className='imgContainer'>  
                      <img src= {d.icon} alt=""/>
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                     <span>
                      <a href={d.link}>Project Link</a>
                     </span>
                    </div>
                </div>
                <div className='right'>
                   <img src={d.img} alt=""></img>

                </div>
              </div>
             </div>
             ))}
        </div>
      <img src="assets/arrow.png" className='arrow left' alt="" onClick={() => handleClick("left")} />
      <img src="assets/arrow.png" className='arrow right' alt="" onClick={() => handleClick()} />
    </div>
  )
}

export default Works 