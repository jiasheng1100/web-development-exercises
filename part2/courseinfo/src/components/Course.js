import React from 'react'

const Header = ({ course }) => <h1>{course}</h1>


const Total = ({ parts }) => 
  //use map to return an array of numbers, and use reduce to calculate sum of array
  <p>
    <b>total of {parts.map(part => part.exercises).reduce((a, b) => a+b)} exercises</b>
  </p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part => <Part key={part.id} part={part}/>)}
  </>

const Course = ({ course }) =>
  <>
    <Header course={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
  </>

export default Course