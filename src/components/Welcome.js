import React from 'react'

function Welcome(props) {
    const name = props.name;
    // console.log(name);
  return (
    <div>
      <h1>Hey ! {name}</h1>
      <h2>Welcome to Newton School.</h2>
    </div>
  )
}

export default Welcome
