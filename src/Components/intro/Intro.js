import './Intro.scss';
import { init } from 'ityped'; //using for show one by one Devloper, Designer, Content-Creator
import { useEffect, useRef } from 'react';

const Intro = () => {

  const textRef = useRef();
  useEffect(() => {
    // console.log(textRef);
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,//after one and half second print next text
      backSpeed: 50,
      strings: ["Full Stack Devloper "]
    })
  }, [])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/surajimg2.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Suraj Kumar</h1>
          <h3><span ref={textRef}></span></h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/down.png' alt=''></img>
        </a>
      </div>
    </div>
  )
}

export default Intro