import styles from './App.module.scss'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/Home.tsx'
import Login from '../../pages/Login/Login.tsx'
import Schedule from '../../pages/Schedule/Schedule.tsx'
// import UserPage from '../../pages/UserPage/UserPage.tsx'

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/schedule" element={<Schedule />} />
        {/* <Route path="/user" element={<UserPage />} /> */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
