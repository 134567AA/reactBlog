
import {Link} from 'react-router-dom'
import './login.css';

export default function Login(){
    return(
        <>
        {/* 회원가입 페이지 */}
        <div className='login container'>
           <div className='loginbox'> 
            <form action="login" className='loginform'>
            <h1 className='title'>Create Your account</h1>  
            <div>
            <label htmlFor="name" className='username'>이름</label>
            <input type="id" className='userid'placeholder='이름을 입력하세요.  ' />
            </div>
            <div>
            <label htmlFor="sex" className='usersex'>성별</label>
            <input type="checkbox" className='userpw' value={"남성"} />남성 
           <input type="checkbox" className='userpw' value={"여성"} />여성
            </div>
            <div>
            <label htmlFor="id" className='idname'>아이디</label>
            <input type="id" className='userid'placeholder='아이디를 입력하세요.' />
            </div>
            <div><label htmlFor="password" className='userpw'>비밀번호</label>
            <input type="password" className='pw'placeholder='비밀번호를 입력하세요.' />
            </div>
            <div>
            <label htmlFor="nick" className='nickname'>닉네임</label>
            <input type="text" className='usernick'placeholder='닉네임을 입력하세요.' />
            </div>
           
            <div className='btn'>
            <Link to='/' onClick={()=>{
                alert('회원가입을 완료하시겠습니까?')
            }} ><button className='myButton'>가입하기</button></Link>
            </div>
           
            </form>
            </div>
 
        </div> 
 
    </>
    )
   
}
