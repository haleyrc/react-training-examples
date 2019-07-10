import React from "react"

function Greeter() {
  const [greeting, setGreeting] = React.useState("Hello")

  React.useEffect(() => {
    console.log(greeting + ", World!")
  }, [])

  return <button onClick={() => setGreeting("Goodbye")}>Say Goodbye</button>
}

function GreeterUpdater() {
  const [greeting, setGreeting] = React.useState("Hello")

  React.useEffect(() => {
    console.log(greeting + ", World!")
  }, [greeting])

  return <button onClick={() => setGreeting("Goodbye")}>Say Goodbye</button>
}

export { Greeter, GreeterUpdater }
