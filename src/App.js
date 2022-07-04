import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RecordSection from 'pages/RecordSection'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RecordSection />}></Route>
      </Routes>
    </Router>
  )
}

export default App
