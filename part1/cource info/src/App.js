import React from 'react'
const Header = (props)=>{
  return (<h1>{props.course}</h1>)
}
const Content = (props)=>{
  return (<div>
    <Part  part={props.course[0]} exercise={props.exercises[0]}/>
    <Part  part={props.course[1]} exercise={props.exercises[1]}/>
    <Part  part={props.course[2]} exercise={props.exercises[2]}/>
    </div>  )
}
const Part = (props)=>{
  return (<p>{props.part} {props.exercise}</p>)
}
const Total = (props)=>{
  return (<p>Number of exercises {props.total}</p>)
}
const App = () => {
  const course = {
    name: 'Half-Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of acomponent',
        exercises: 14
      }
    ]
  }
return (
  <div>
  <Header course={course.name} />
  <Content course={[course.parts[0].name,course.parts[1].name,course.parts[2].name]}
  exercises={[course.parts[0].exercises,course.parts[1].exercises,course.parts[2].exercises]}/>
  <Total total={course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises} />
</div>
  )
}
export default App