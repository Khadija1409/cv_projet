import './App.css'
import InfoPerso from './components/InfoPerso/InfoPerso'
import Competences from './components/Competences/Competences'
import Experiences from './components/Experiences/Experiences'

function App() {
  return (
    <main className="cv">
      <InfoPerso />
      <div className="cv-corps">
        <Competences />
        <Experiences />
      </div>
    </main>
  )
}

export default App