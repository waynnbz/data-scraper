import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard, Home, Upload } from './containers/'
import './App.scss'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path='upload' element={<Upload />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
