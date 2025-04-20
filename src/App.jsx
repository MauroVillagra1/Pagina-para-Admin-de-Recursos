import Footer from "./cummon/footer/Footer"
import NavbarComponent from "./cummon/nav/NavbarComponent"
import Main from "./main/Main"

function App() {

  return (
    <div className="generalContainer">
        <NavbarComponent/>
        <Main/> 
        <Footer/>
    </div>
  )
}

export default App
