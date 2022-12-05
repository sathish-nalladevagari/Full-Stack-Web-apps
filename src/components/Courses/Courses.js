import Navbar from "../Navbar/Navbar";
import "./Courses.css";

const Desktop2 = () => {
  return (
    <div className="desktop-2">
        <Navbar/>
      <div className="line-div" />
      <h1 className="explore-the-courses">Explore The Courses</h1>
      <div className="frame-div">
        <div className="rectangle-div" />
        <div className="rectangle-div1" />
        <div className="rectangle-div2" />
        <div className="rectangle-div3" />
        <div className="rectangle-div4" />
        <div className="rectangle-div5" />
        <b className="reactjs-b">ReactJs</b>
        <b className="htmlcss-b">HTML/CSS</b>
        <b className="java-b">Java</b>
        <b className="python-b">Python</b>
        <b className="sql-b">SQL</b>
        <b className="cc-b">c/c++</b>
      </div>
      <div className="rectangle-div6" />
      <b className="lms-courses-b">LMS Courses</b>
    </div>
  );
};

export default Desktop2;
