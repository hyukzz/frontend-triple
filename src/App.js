import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RecordPage from 'pages/RecordPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RecordPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
