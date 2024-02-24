import "./header.css"
import headerImage from '../../images/header.jpg'

export default function Header() {
  return (
    <div className="header">
    <div className="headerBox">


      <img className="headerImg" src={headerImage} alt="header" />

      <div className="headerTitle">
        <h2 className="headerTitleSm">Financial Freedom Awaits</h2>
        <p className="headerDesc">Entrepreneurs embrace opportunity.

        <br />

         Legends like <span className="legends">Steve Jobs</span> and <span className="legends">Oprah Winfrey</span> prove that seizing chances leads to financial success</p>
      </div>


    </div>
    </div>
  )
}

