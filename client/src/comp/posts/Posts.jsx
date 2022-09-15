import './posts.css'
import {Link} from 'react-router-dom'

export default function Posts() {
  return (
  <div className='posts'>
   <Link to="/detail"> <img src="images\singlepost\유럽.jpeg" alt="post01" className='postImg' /></Link>
    <div className="postInfo">
      <div className="postCats">
        <span className="postcat">E-Europe</span>
      </div>
      <p className="postTitle">유럽여행일지</p>
      <p>사랑의 가슴에 눈에 있다. 대고, 별과 이상은 무엇을 아니다. 수 용감하고 얼음이 커다란 방황하였으며, 굳세게 같으며, 것이다. 사랑의 위하여 것은 관현악이며, 때문이다.</p>
      <span className='postDate'>1 hours ago</span>
     
    </div>
     <hr />
  </div>  
  
  )
}
