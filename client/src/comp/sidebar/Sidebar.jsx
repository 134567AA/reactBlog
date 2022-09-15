import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
         <div className="sidebarItem">
              <span className="sidebarTitle">
                  ABOUT ME    
              </span>
              <img src="images/02_paris_compressed.jpg" alt="about" />
              <p>
              사랑의 가슴에 눈에 있다. 대고, 별과 이상은 무엇을 아니다. 수 용감하고 얼음이 커다란 방황하였으며, 굳세게 같으며, 것이다. 사랑의 위하여 것은 관현악이며, 때문이다. 
              </p>
          </div>

          <div className="sidebarItem">
              <span className="sidebarTitle">
                  CATEGORIES   
              </span>
              <ul className="sidebarList">
                <li className="sidebarListItem">Asia</li>
                <li className="sidebarListItem">E-Europe</li>
                <li className="sidebarListItem">W-Europe</li>
                <li className="sidebarListItem">N-America</li>
                <li className="sidebarListItem">S-America</li>
                <li className="sidebarListItem">Africa</li>
                <li className="sidebarListItem">Australia</li>
                <li className="sidebarListItem">ETC</li>
              </ul>
          </div>


          <div className="sidebarItem">
              <span className="sidebarTitle">
                  TAG  
              </span>
              <div className="tagList">
                <span className="tagListItem">미국</span>
                <span className="tagListItem">배낭여행</span>
                <span className="tagListItem">바캉스</span>
                <span className="tagListItem">호캉스</span>
                <span className="tagListItem">차박</span>
                <span className="tagListItem">오토캡핑</span>
                <span className="tagListItem">미국</span>
                <span className="tagListItem">배낭여행</span>
                <span className="tagListItem">바캉스</span>
              </div>
          </div>

          <div className="sidebarItem">
              <span className="sidebarTitle">
                  FOLLOW ME 
              </span>
              <div className="socialList">
                  <i className="socialItem fa-brands fa-facebook-square"></i>
                  <i className="socialItem fa-brands fa-twitter-square"></i>
                  <i className="socialItem fa-brands fa-pinterest-square"></i>
                  <i className="socialItem fa-brands fa-instagram-square"></i>
              </div>
          </div>
    </div>
  )
}
