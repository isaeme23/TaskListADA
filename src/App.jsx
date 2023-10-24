import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'

function App() {

  const tasks = [
    {
        taskName: "Fearless",
        taskState: true
    },
    {
        taskName: "Speak Now",
        taskState: true
    },
    {
        taskName: "Red",
        taskState: true
    },
    {
        taskName: "1989",
        taskState: false
    }
  ]

  return (
  <>
    <Header />
    <TaskList list={tasks} />
    </>
  );
}

export default App
