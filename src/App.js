import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Nav from './componets/Nav'
import OurMission from './componets/OurMission'
import MeetYourTrainer from './componets/MeetYourTrainer'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<OurMission />} />
        <Route path='ourMission' element={<OurMission />} />
        <Route path='meetYourTrainer' element={<MeetYourTrainer />} />
      </Routes>
    </BrowserRouter>
  )
}
