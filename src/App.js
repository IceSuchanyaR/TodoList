import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="w3-container w3-theme w3-padding" id="myHeader">

          <div class="w3-row w3-border">
            <div class="w3-half w3-container ">   
            </div>
            <div class="w3-half w3-container">
              <div className="w3-center">
                <h1>SAMUEL ANDERSON</h1>
                <h2>THE EXPERIENCE UI/UX</h2>
                <div className="w3-padding-32">

                </div>
                <div class="w3-row w3-xlarge">
                  <div class="w3-col w3-container m2 w3-teal"><p>HOME</p></div>
                  <div class="w3-col w3-container m2 w3-blue"><p>RESUME</p></div>
                  <div class="w3-col w3-container m2 w3-purple"><p>PORTFOLIO</p></div>
                  <div class="w3-col w3-container m2 w3-orange"><p>CONTATCS</p></div>
                  <div class="w3-col w3-container m2 w3-red"><p>FEEDBACK</p></div>
                  <div class="w3-col w3-container m2 w3-yellow"><p>BLOG</p></div>
                  </div>
                  </div>
                  </div>
            </div>
        </header>
          <div className="app-test">
            <div class="w3-row w3-border">
              <div class="w3-quarter w3-container w3-center">
              <h1>MMMMMM</h1>  
                <h5>w3-quarter</h5>
                <p>The w3-quarter class uses one quarter (25%) of the screen window.</p>
                <p>On small screens (max 600 pixels) it automatically resizes to full screen width.</p>
              </div>
              <div class="w3-quarter w3-container w3-center">
              <h1>SIMPLE CV</h1>       
              <p>On small screens (max 600 pixels) it automatically resizes to full screen width.</p>       
              </div>
              <div class="w3-quarter w3-container w3-center">
              <h1>RESPONSIVE</h1>  
              <span class="float-right badge badge-danger badge-pill" >SAVE</span>
              <p>On small  resizes to full screen width.</p>      
              </div>
              <div class="w3-quarter w3-container w3-grey">
                <h1>PERSONAL INFO</h1>
                <p>NAME  : Ice Suchanya </p>
                <p>BIRTH DATE   : 10/10/39</p>
                <p>ADDRESS      : 166/16 , Chalongkrung Road ,LadKrabang,Bangkok  10520</p>
                <p>PHONE :  096-7104026 </p>
                <p>EMAILL : suchanya.ro@gmail.com</p>
               
              </div>
            </div>
          </div>        
     </div>

        );
  }
}
export default App;
