import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import circle_infor from "./assets/circle-infor.svg";
import location from "./assets/map-pin.svg"
import Nav from "./Nav";

function App() {
  return (
    <>
      <div className="top">
        <img id="infor" src={circle_infor} alt=""></img>
        <p id="para1">READ ABOUT OUR COVID-19 PRECAUTIONS</p>
      </div>
<Nav/>
<div className="main">
<div className="text">
  <h1>
  The Future of Health<br/>
  Care is Home Care
  </h1>
  <p id="para2">Over a Decade of Trusted Care.</p>
  <button id="btn">REQUEST AN APPOINTMENT</button>
</div>
<div className="image">

</div>
</div>
<div className="locEle">
<img id="location" src={location} alt=""></img>
<p id="para3">UNIVERSACARE AREAS OF COVERAGE</p>
</div>

    </>
  );
}

export default App;
