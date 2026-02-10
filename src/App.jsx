import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import FieldNotes from './pages/FieldNotes'
import FieldNoteDetail from './pages/FieldNoteDetail'
import Lab from './pages/Lab'
import About from './pages/About'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/field-notes" element={<FieldNotes />} />
          <Route path="/field-notes/:slug" element={<FieldNoteDetail />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
