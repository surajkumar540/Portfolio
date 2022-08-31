import './Skill.scss';
// import data2 from './data2.js';

const Skill = () => {
  return (
    <div className='skills' id='skills'>
      <h1>Skills</h1>
      <div className="container">
          <div className='item'>
            <img src="./skills/html.png" />
            <h3>HTML</h3>
          </div>

        <div className='item'>
          <img src="./skills/css.png" />
          <h3>CSS</h3>
        </div>

        <div className='item'>
          <img src="./skills/js.png" />
          <h3>JavaScript</h3>
        </div>

        <div className='item'>
          <img src="./skills/bootstrap.png" />
          <h3>Bootstrap</h3>
        </div>

        <div className='item'>
          <img src="./skills/saas.png" />
          <h3>Saas</h3>
        </div>

        <div className='item'>
          <img src="./skills/expressjs.png" />
          <h3>ExpressJs</h3>
        </div>

        <div className='item'>
          <img src="./skills/react.png" />
          <h3>React</h3>
        </div>

        <div className='item'>
          <img src="./skills/nodejs.png" />
          <h3>NodeJS</h3>
        </div>
      </div>
    </div>
  )
}

export default Skill