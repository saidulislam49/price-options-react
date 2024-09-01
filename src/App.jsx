import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function App() {
  const chartOfSubjectWiseNumber = [
    { "id": 1, "name": "Student 1", "math": 85, "physics": 78, "chemistry": 92, "biology": 88 },
    { "id": 2, "name": "Student 2", "math": 72, "physics": 81, "chemistry": 79, "biology": 84 },
    { "id": 3, "name": "Student 3", "math": 90, "physics": 85, "chemistry": 94, "biology": 89 },
    { "id": 4, "name": "Student 4", "math": 68, "physics": 76, "chemistry": 73, "biology": 75 },
    { "id": 5, "name": "Student 5", "math": 77, "physics": 82, "chemistry": 80, "biology": 78 },
    { "id": 6, "name": "Student 6", "math": 88, "physics": 90, "chemistry": 85, "biology": 92 },
    { "id": 7, "name": "Student 7", "math": 95, "physics": 88, "chemistry": 91, "biology": 94 },
    { "id": 8, "name": "Student 8", "math": 64, "physics": 70, "chemistry": 66, "biology": 72 },
    { "id": 9, "name": "Student 9", "math": 82, "physics": 75, "chemistry": 78, "biology": 85 },
    { "id": 10, "name": "Student 10", "math": 91, "physics": 93, "chemistry": 89, "biology": 90 }
  ]

  return (
    <>
      <NavBar></NavBar>
      <DaisyNav></DaisyNav>
      <PriceOptions></PriceOptions>
      <h1>Vite + React</h1>

      <LineChart width={600} height={400} data={chartOfSubjectWiseNumber}>
        <Line type="monotone" dataKey="math " stroke="#ddd"></Line>
        <CartesianGrid stroke="#fff" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>

    </>
  )
}

export default App
