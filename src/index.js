import React from "react"
import ReactDOM from "react-dom"

import { Button, StyledButton } from "./components/Button"
import {
  RainbowCounter,
  UselessCounter,
  StatefulCounter,
  Counter,
  PropsCounter,
  CounterWithButtons,
  CounterWithPrettyButtons
} from "./components/Counter"
import { Greeter, GreeterUpdater } from "./components/Greeter"
import { Gallery, Exhibit } from "./components/Gallery"
import ContextApp from "./components/Context"

import "./styles.css"

function App() {
  return (
    <div className="App">
      <Gallery>
        <Exhibit title="A Basic Component">
          <Button
            title="Click Me"
            handleOnClick={() => console.log("Regular button clicked")}
          />
        </Exhibit>

        <Exhibit title="A Styled Component">
          <StyledButton
            title="Click Me"
            handleOnClick={() => console.log("Regular button clicked")}
          />
        </Exhibit>

        <Exhibit title="A Useless Counter">
          <UselessCounter />
        </Exhibit>

        <Exhibit title="A Stateful Counter">
          <StatefulCounter />
        </Exhibit>

        <Exhibit title="A Working Counter">
          <Counter />
        </Exhibit>

        <Exhibit title="A Counter With Props">
          <PropsCounter step={1} />
          <PropsCounter step={2} />
          <PropsCounter step={4} />
          <PropsCounter step={8} />
        </Exhibit>

        <Exhibit title="Virtual DOM In Action">
          <RainbowCounter step={1} />
          <RainbowCounter step={1} />
          <RainbowCounter step={1} />
          <RainbowCounter step={1} />
        </Exhibit>

        <Exhibit title="A Counter With Functional Component Buttons">
          <CounterWithButtons step={1} />
        </Exhibit>

        <Exhibit title="A Counter With Styled Buttons">
          <CounterWithPrettyButtons step={1} />
        </Exhibit>

        <Exhibit title="Context">
          <ContextApp />
        </Exhibit>

        <Exhibit title="Greeters with useEffect">
          <Greeter />
          <GreeterUpdater />
        </Exhibit>
      </Gallery>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
