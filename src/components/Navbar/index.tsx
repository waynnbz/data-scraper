import './styles.scss'

function Navbar() {
  return (
    <div className='title'>
      <div className="left">
        <div>Upload New Data</div>
        <div className="download">
          <div className="icon">icon</div>
          <p>Download XLS template</p>
        </div>
        
      </div>
      <div className="steps"></div>
    </div>
  )
}

export default Navbar