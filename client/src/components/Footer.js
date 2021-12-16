import '../components/Footer.css';
import {Link} from 'react-router-dom';
function Footer(){
    return (
        <div id='footer-container'>
           <div id='footer-logo-wrapper'>
           <Link to ='/'><div id= 'footer-6699-logo'></div></Link>
           </div>

           <div className= 'footer-team-members'>
           <span className= 'footer-github-logos'>
           <div className= 'footer-github-logo'></div>
           <div className= 'footer-github-logo'></div>
           <div className= 'footer-github-logo'></div>
           <div className= 'footer-github-logo'></div>
           </span>
           <div className= 'footer-profiles'>
           <div className = 'footer-profile'>
           <div>최선영</div>
           <div>Front end</div>
           <div>sy.choi1106@gmail.com</div>
           </div>
           <div className = 'footer-profile'>
           <div>정재혁</div>
           <div>Front end</div>
           <div>nezcoreen@gmail.com</div>
           </div>
           <div className = 'footer-profile'>
           <div>김정현</div>
           <div>Back end</div>
           <div>wjd5588@gmail.com</div>
           </div>
           <div className = 'footer-profile'>
           <div>김기쁨</div>
           <div>Back end</div>
           <div>joykim9311@gmail.com</div>
           </div>
           </div>
           </div>

           <div className ='footer-badges'>
           <div id='footer-youtube-logo'></div>
           <div id='footer-github-logo'></div>
           </div>
           <div id='footer-copyright'>Copyrightⓒ 2021 weAct</div>
        </div>
    )
   }
   export default Footer;