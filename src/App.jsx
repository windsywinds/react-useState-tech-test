import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Solution from './solution'
import YourSolution from './yourSolution'

function App() {
  const [isShowing, setIsShowing] = useState(false);
  


const onButtonClick = () => {
  setIsShowing(!isShowing)
}


  return (
      <div className="app">
      <h1>A React.JS technical test</h1>
      <h2>Manage the handling of some input checkboxes</h2>

      <p>Task:</p>
      <p className="instructions">
        Create some check box inputs, with the first one labeled as "Select All". There should be a minimum of 4 including "Select All". 
        The next three can be the names of countries/car brands/food etc. 
        The goal is that if "Select All" is checked, all other boxes will also be checked, if you uncheck it, it will uncheck all others.
        However the other boxes can be checked individually, but if all are checked, then "Select All" will also be checked.
      </p>
      <p className="instructions">
        Try to perform the task first based on only the above instructions. Then if you need help understanding, you can also view an example by clicking 'show example'.
      </p>
      <div>

        <YourSolution />

      </div>
          <div className="button-area">
            <button onClick={onButtonClick}>Show example</button>

              {isShowing && <Solution />}

          </div>
          <p>Based on the youtube video by <a href="https://www.youtube.com/@lucas-barake" target="_blank">@lucas-barake</a></p><a href="Based on the youtube video: https://www.youtube.com/watch?v=Sg3DuG3dz-0" target="_blank">https://www.youtube.com/watch?v=Sg3DuG3dz-0</a>


      </div>
  )
}

export default App
