import './header.css';

export default function Header() {
  return (
    <div className="header">
         <div className="headerTitles">
             <span className="headerTitleSm">Travel & Challenge</span>
             <span className="headerTitleLg">Blog</span>
         </div>
         <img className="headerImg" 
              src="images/톨레도_PC.jpg" alt="banner" />
    </div>
  )
}
