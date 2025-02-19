// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child => {
    if (allowedTypes.includes(child.type)) {
      return React.cloneElement(child, {on, toggle})
    }
    return child;
  })

  // 📜 https://reactjs.org/docs/react-api.html#reactchildren
  // 📜 https://reactjs.org/docs/react-api.html#cloneelement
}

const ToggleOn = ({on, children}) => on ? children : null;
const ToggleOff = ({on, children}) => on ? null : children;
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

// custom component won't work inside the compound component because of the type check
const MyToggleButton = ({on}) => on ? 'on' : 'off';

const allowedTypes = [ToggleOn, ToggleOff, ToggleButton];

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
        <MyToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
