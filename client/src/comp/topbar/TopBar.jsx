import './topbar.css'
import {Link} from 'react-router-dom'
export default function TopBar() {
  const user = false;
  return (
   
    <div className="top">
        <div className="container topInn">
        <div className="topLeft">
             <i className="topIcon fa-brands fa-facebook-square"></i>
             <i className="topIcon fa-brands fa-twitter-square"></i>
             <i className="topIcon fa-brands fa-pinterest-square"></i>
             <i className="topIcon fa-brands fa-instagram-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link to ="/">home</Link></li> 
                <li className="topListItem"><Link to="/about">about</Link></li>
                <li className="topListItem"><Link to="/route/list">List</Link></li>
                <li className="topListItem"><Link to="/write">write</Link></li>
                <li className="topListItem"><Link to='login'>login</Link></li>
                <li className='topListItem'><Link to="settings">회원가입</Link></li>
  
            </ul>
        </div>
        <div className="topRight">
            <div className='profile'>
            <img src="images/02_paris_compressed.jpg" alt="홍길동" className="topImg" />
            </div>
            <input type="search" placeholder='Search' id="search" /> 
            <i className="topSearchIcon fas fa-search"></i>
        </div>
        </div>
    </div>
  )
}

