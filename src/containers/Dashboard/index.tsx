import { Link } from 'react-router-dom'
// import { DataScraper, Navbar } from '../../components'
import './styles.scss'

function Dashboard() {
  return (
    <div className='dashboard'>
      <Link to={'/upload'} className="upload-dummy-link">
        To Upload
      </Link>
      {/* <div className="header">
        <Navbar />  
        <DataScraper />
      </div>

      <div className="overview">
        <div className="charts">
          <div className="radar-chart">
            RadarChart
          </div>
          <div className="pie-chart">
            PieChart
          </div>
        </div>

        <div className="files">
          <div className="buttons">
            <div className="upload-file">
              UploadFile
            </div>
            <div className="search-pi">
              SearchPI
            </div>
          </div>
          <div className="file-stats">
            FileStats
          </div>
        </div>
      </div>
      
      <div className="table">
        <div className="header">
          TableHeader
        </div>
        <div >TABLE</div>
      </div> */}
    </div>
  )
}

export default Dashboard
