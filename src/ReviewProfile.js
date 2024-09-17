import React from 'react';
import './ReviewProfile.css'; // Import the CSS file

const ReviewProfile = () => {
  return (
   <div className="container">
    <header className="header">
        <h2 className="heading">Review Profile</h2>
    </header>
    <main className="main">
        <div className="box">
            <div className="box1"></div>
            <p className="title">Title</p>
            <p className="body">Body</p>
        </div>
        <div className="box2">
            <p className="name">John Wick</p>
            <p className="state">Thane,MH</p>
        </div>
    </main>
    <aside className="language">
        <p className="lan">Languages</p>
        <p className="eng">English(Native)</p>
    </aside>
    <main className="main2">
        <p className="skill">Skills</p>
        <div className="skills">
            <div className="skill1">
                <span className="html">HTML</span>
            </div>
            <div className="skill2">
                <span className="css">CSS</span>
            </div>
            <div className="skill3">
                <span className="js">JavaScript</span>
            </div>
        </div>
        <div className="plus">+</div>
    </main>
   </div>
  );
};

export default ReviewProfile;