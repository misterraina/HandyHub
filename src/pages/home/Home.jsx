import "./home.css"
import Header from "../../components/header/Header"
import ServiceListingSidebar from "../../components/serviceListingSidebar/ServiceListingSidebar"
import Categories from "../../components/categories/Categories"

export default function Home() {
  return (
    <>
      <Header/>
    <div className="HomeContainer">
      <Categories/>
      <ServiceListingSidebar/>
      
    </div>
    </>
  )
}
