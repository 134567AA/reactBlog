import './about.css'
import Posts from '../../comp/posts/Posts';
import Sidebar from '../../comp/sidebar/Sidebar';

export default function About(){
    return(
        <>
        <div className='about container'>
            <div className='noticebox'>
            <h2>공지사항</h2>
                <ul className='notice'>        
                    <li><a href="#">2022년 04월 11일 공지사항</a></li>
                    <li><a href="#">2022년 03월 업데이트 공지사항</a></li>
                    <li><a href="#">2022년 신규회원 필독 공지사항!</a></li>
                    <li><a href="#">2022년 신년맞이 이벤트!</a></li>
                    <li><a href="#">GoodBye 2021년 공지사항 </a></li>
                </ul>
            </div>
            <div className='popualrbox'>
                <h2>인기글</h2>
                <div className='popular'>
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                </div>
            </div>
            <Sidebar />

        </div>
        
        </>
    )
}