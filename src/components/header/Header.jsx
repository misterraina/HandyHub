import "./header.css"
import headerImage from '../../images/header.jpg'

export default function Header() {
  return (
    <div className="header">
    <div className="headerBox">


      <img className="headerImg" src={headerImage} alt="header" />

      <div className="headerTitle">
        <h2 className="headerTitleSm">Read this</h2>
        <p className="headerDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia aliquam delectus soluta, cumque asperiores eveniet fuga aperiam totam repudiandae dignissimos earum exercitationem, alias corrupti nisi quia harum saepe fugit, modi quis recusandae? Accusantium, suscipit dolor!</p>
      </div>


    </div>
    </div>
  )
}

