import React from 'react'

function About(props){
  console.log('path',props.match.path)
  console.log('url',props.match.url)
  return (
    <h1>THIS IS ABOUT</h1>
  )
}

export default About