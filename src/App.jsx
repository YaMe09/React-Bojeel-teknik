import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Forside from './components/Forside'
import OmBoje from './components/OmBoje'
import Ydelser from './components/Ydelser'
import Cases from './components/Cases'
import DataInstallation from './components/DataInstallation'
import Byggestrøm from './components/Byggestrøm'
import Kontakt from './components/Kontakt'
import Job from './components/Job'
import Fåettilbud from './components/Fåettilbud'
import Tak from './components/Tak'
import Rådgivning from './components/Rådgivning'
import Udskiftning from './components/Udskiftning'
import Ombygning from './components/Ombygning'
import Tilbygning from './components/Tilbygning'
import Kontor from './components/Kontor'
import Renovering from './components/Renovering'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Forside />} />
          <Route path='/omboje' element={<OmBoje />} />
          <Route path='/ydelser' element={<Ydelser />} />
          <Route path='/cases' element={<Cases />} />
          <Route path='/datainstallation' element={<DataInstallation />} />
          <Route path='/byggestrøm' element={<Byggestrøm/>} />
          <Route path='/kontakt' element={<Kontakt/>} />
          <Route path='/job' element={<Job/>} />
          <Route path='/fåettilbud' element={<Fåettilbud/>}/>
          <Route path='/tak' element={<Tak/>}/>
          <Route path='/rådgivning' element={<Rådgivning/>}/>
          <Route path='/udskiftning' element={<Udskiftning/>}/>
          <Route path='/ombygning' element={<Ombygning/>}/>
          <Route path='/tilbygning' element={<Tilbygning/>}/>
          <Route path='/kontor' element={<Kontor/>}/>
          <Route path='/renovering' element={<Renovering/>}/>
        </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
