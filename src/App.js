import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Doctors from "./Components/Doctors/Doctors";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MedicineShop from './Components/MedicineShop/MedicineShop';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import Services from "./Components/Services/Services";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route exact path="/medicineshop">
            <MedicineShop></MedicineShop>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contactus">
            <ContactUs></ContactUs>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
