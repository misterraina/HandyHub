import "./topBar.css"
import imgCenter from "../../../images/logo_Center.png"

export default function TopBar() {
  return (
    <div className="top">

<div className="topLeft">

        <ul className="topList">
          <li className="topListItems">Find Job</li>
          <li className="topListItems">Post Job</li>
          <li className="topListItems">Find Freelancer</li>
          <li className="topListItems">Help Support</li>
          <li className="topListItems">Login</li>
        </ul>

      </div>


      <div className="topCenter">
        
        <img className="topLogo" src={imgCenter} alt="home img" />

        </div>


     

      <div className="topRight">
              <button class="topRightJoinButton">JOIN</button>


        </div>

    </div>
  )
}
