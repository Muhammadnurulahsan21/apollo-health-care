import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Doctors from "./Components/Doctors/Doctors";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MedicineShop from "./Components/MedicineShop/MedicineShop";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import Services from "./Components/Services/Services";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute exact path="/medicineshop">
              <MedicineShop></MedicineShop>
            </PrivateRoute>
            <PrivateRoute exact path="/services">
              <Services></Services>
            </PrivateRoute>
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
      </AuthProvider>
    </div>
  );
}

export default App;
