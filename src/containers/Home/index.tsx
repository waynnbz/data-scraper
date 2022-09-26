import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components'
import './styles.scss'

function index() {
  return (
    <div className='home'>
      <Sidebar />
      <div className='home-container'>
        <Outlet />
      </div>
    </div>
  )
}

export default index
