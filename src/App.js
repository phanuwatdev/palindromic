import React from 'react'
// import { Button, GridColumn, Grid } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
// import Timeline from './components/Profile/subpage/Timeline'
import Palindromic from './components/Challenges/Palindromic'

export default function App() {
  
  console.log(
    "%c⛔️ FBI WARNING!!!",
    "color: white;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 0px #F0F8FF;font-weight:bold;background: red; padding: 20px"
  );

  return (
    <div>
      <Switch>
        <Route exact path="/" ><Palindromic/></Route>
        <Route path="/palindromic"><Palindromic/></Route>
        {/* <Route><Timeline/></Route> */}
      </Switch>
    </div>
  )
}