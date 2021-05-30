import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import circle_infor from "./assets/circle-infor.svg";
import location from "./assets/map-pin.svg";
import Nav from "./Nav";
import SecOne from "./SecOne";
import SecTwo from "./SecTwo";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section6 from "./Section6";
import Section5 from "./Section5";

function App() {
  return (
    <>
      <div className="top">
        <img id="infor" src={circle_infor} alt=""></img>
        <p id="para1">READ ABOUT OUR COVID-19 PRECAUTIONS</p>
      </div>
      <Nav />
      <SecOne />
      <div className="locEle">
        <img id="location" src={location} alt=""></img>
        <p id="para3">UNIVERSACARE AREAS OF COVERAGE</p>
      </div>
      <SecTwo/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
    </>
  );
}

export default App;
