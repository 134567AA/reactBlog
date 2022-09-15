
import {Link} from 'react-router-dom'
import './settings.css'
export default function Settings(){
    return(
        <>
        {/* 로그인 페이지 */}
               <div className='settings container'>
            <div>
                <form action="setting">
                    <h1> 로그인</h1>
                    <div>
                    <label htmlFor="id" className='loginId'>아이디</label>
                    <input type="id" placeholder="아이디를 입력하세요" />   
                    </div>
                    <div>
                    <label htmlFor="password" className='loginPw'>비밀번호</label>
                    <input type="password" placeholder='비밀번호를 입력하세요' />   
                    </div>
                    <div className='login-btn'>
    
                   <button className='myButton '>아이디 찾기</button>
                   <button className='myButton '>비밀번호 찾기</button>
                  <Link to="/" onClick={()=>{alert('환영합니다!')}}>
                  <button className='mybutton loginBtn'>로그인</button></Link>
                    </div>

                </form>
            </div>
        </div>
        </>
    );
}