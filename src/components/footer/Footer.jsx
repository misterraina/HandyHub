import "./footer.css"
import imgCenter from "../../images/logo_Center.png"

export default function Footer() {
  return (    
    <footer className="footer">
      
      <div className="footerUpper">

      <div className="footerItems">
      <img className="footerImgLogo" src={imgCenter} alt="footer handyHub logo" />
      <ul className="footerList">
        <li className="footerListItems"><i class="fa-solid fa-globe"></i> India/English</li>
        <li className="footerListItems"><i class="fa-solid fa-question"></i> Help or Ask</li>
        <li className="footerListItems"><i class="fa-solid fa-person"></i> Accessibility</li>
      </ul>
      </div>

      <div className="footerItems">
      <span className="footerSubItems">Categories</span> 
      <ul className="footerList">
  <li className="footerListItems">Categories</li>
  <li className="footerListItems">Projects</li>
  <li className="footerListItems">Contests</li>
  <li className="footerListItems">Freelancers</li>
  <li className="footerListItems">Enterprise</li>
  <li className="footerListItems">Membership</li>
  <li className="footerListItems">Preferred Freelancer Program</li>
  <li className="footerListItems">Project Management</li>
  <li className="footerListItems">Local Jobs</li>
  <li className="footerListItems">Photo Anywhere</li>
  <li className="footerListItems">Showcase</li>
  <li className="footerListItems">API for Developers</li>
  <li className="footerListItems">Get Verified</li>
  <li className="footerListItems">Desktop App</li>
</ul>

        </div>
      <div className="footerItems"> <span className="footerSubItems">About</span>
      <ul className="footerList">
  <li className="footerListItems">About us</li>
  <li className="footerListItems">How it Works</li>
  <li className="footerListItems">Security</li>
  <li className="footerListItems">Investor</li>
  <li className="footerListItems">Sitemap</li>
  <li className="footerListItems">Stories</li>
  <li className="footerListItems">News</li>
  <li className="footerListItems">Press Releases</li>
  <li className="footerListItems">Careers</li>
  <li className="footerListItems">Privacy Policy</li>
    <li className="footerListItems">Terms and Conditions</li>
    <li className="footerListItems">Copyright Policy</li>
    <li className="footerListItems">Code of Conduct</li>
    <li className="footerListItems">Fees and Charges</li>
</ul>

      </div>

<div className="footerItems">
  <span className="footerSubItems">Community</span>
  <ul className="footerList">
    <li className="footerListItems">Customer Success Stories</li>
    <li className="footerListItems">Community Hub</li>
    <li className="footerListItems">Forum</li>
    <li className="footerListItems">Events</li>
    <li className="footerListItems">Blog</li>
    <li className="footerListItems">Influencers</li>
    <li className="footerListItems">Affiliates</li>
    <li className="footerListItems">Podcast</li>
    <li className="footerListItems">Invite a Friend</li>
    <li className="footerListItems">Become a Seller</li>
    <li className="footerListItems">Community Standards</li>
  </ul>
</div>

<div className="footerItems">
  <span className="footerSubItems">Business</span>
  <ul className="footerList">
    <li className="footerListItems">About Business Solutions</li>
    <li className="footerListItems">Pro Member</li>
    <li className="footerListItems">Certified</li>
    <li className="footerListItems">Become an Agency</li>
    <li className="footerListItems">ClearVoice</li>
    <li className="footerListItems">Content Marketing</li>
  </ul>
</div>
</div>


    <hr className="har" />
<div className="footerLower">
  <div className="lowerLeft">
  <img className="footerLowerImg" src={imgCenter}  />
  <span className="lowerLeftCopyR"><i class="fa-regular fa-copyright"></i>copyright international 2024</span>
  </div>

    <div className="lowerRight">
      <ul className="lowerRightListIcon">
        <li className="lowerRightListIconItems"><i class="fa-brands fa-x-twitter"></i></li>
        <li className="lowerRightListIconItems"><i class="fa-brands fa-square-instagram"></i></li>
        <li className="lowerRightListIconItems"><i class="fa-brands fa-facebook"></i></li>
        <li className="lowerRightListIconItems"><i class="fa-brands fa-whatsapp"></i></li>
        <li className="lowerRightListIconItems"><i class="fa-brands fa-linkedin"></i></li>
        <li className="lowerRightListIconItems"><i class="fa-brands fa-pinterest"></i></li>
      </ul>
      <span className="lowerRightItems"><i class="fa-solid fa-globe"></i> India</span>
      <span className="lowerRightItems"><i class="fa-solid fa-indian-rupee-sign"></i>INR</span>
    </div>

</div>



    </footer>
  
  )
}
