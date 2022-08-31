import './Portfolio.scss';
import { data } from "../../data";

const Portfolio = () => {

  return (
    
    <div className='portfolio' id='portfolio'> 
      <h1>Projects</h1>
      <ul>
        
      </ul>

      <div className="container">
        {data.map((d) => {
          return <>
              <a href={d.github} target="_blank">
              <div className="item">
                <img src={d.img} alt="" />
                <h3>{d.title}</h3>
              </div>
            </a>
          </>

        })}
      </div>


    </div>
  )
} 

export default Portfolio