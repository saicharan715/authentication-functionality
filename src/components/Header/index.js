// Write your JS code here
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
)

export default withRouter(Header)
