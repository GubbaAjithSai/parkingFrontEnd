import React, { useState,useEffect } from "react";
import styled from "styled-components";

const CheckSlots = () => {
    const [date,setDate]=React.useState()
    if(date){
        console.log(date);
    }
    const [slots, setSlots] = useState([])
    const [flag,setFlag]=useState(false)
   useEffect(() => {
    async function getSlots() {
      const response = await fetch("https://parkingbackend.onrender.com/users");
      const data = await response.json();
      setSlots(data);
    }
    getSlots();
  }, []);
    let arr=Object.values(slots);
    const handlechange= (event)=>{
        const {value}=event.target;
        setDate(value)
    }
    const clicked=async (event)=>{
        event.preventDefault();
        if(date){
        setFlag(true)        
        }else{
            window.alert("enter the date")
        }
    }
    function dateConverter(date) {
        var newDate = new Date(date).toLocaleString(undefined, {timeZone: 'GMT'});
        return newDate;
      }
    function call(arr) {
        return arr.map((currElem)=>{
            if((currElem.toPeriod)>(date) && (currElem.fromPeriod)<=(date)){
                return <div className="col-3 box"><div className="temp">
                    <div>{currElem.spaceID} Occupied</div>
                    <div>will be free from {dateConverter(currElem.toPeriod)}
                    </div></div>
                    </div>
            }
            else {
                return <div className="col-3 box"> <div className="temp">{currElem.spaceID} is  Unoccupied</div></div>
            
            }
        })
    }
    
    
  return (
    <Wrapper>
    
    {!flag &&
        <div className="outer-box">
      <div className="inner-box">
          <header className="signup-header">
              <h2>Select the date</h2>
              <p>To check the availability</p>
          </header>
          <main className="signup-body">
              <form action="/signin" method="post">
                  <p>
                      <label name="fromdate">Date</label>
                      <input type="datetime-local" id="fromdate" name="fromdate" onChange={handlechange} required value={date}/>
                  </p>
                 
                  <p>
                      <input type="submit" id="submit" value="check" onClick={clicked}/>
                  </p>
              </form>
          </main>
      </div>
      </div>
    }
    
    <div className="outerr-box">
        {flag && <div className="container">
        <div className="container text-center">
        <div className="row row-cols-3">
        {call(arr)} 
    </div>
  </div>
        
    </div> }
    </div>
    
  </Wrapper>
  );
};
const Wrapper=styled.section`
background:url("images/cars.png");
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Silkscreen&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color:#000000;
}

body {
    font-family: 'Lato', sans-serif;
}

.outer-box {
   height:90vh;
  
    background-color:rgba(41, 97, 140, 0.7);
}


.container{
    margin:auto;
}

.inner-box {
    width: 400px;
    margin: 0 auto;
    position: relative;
    top: 40%;
    transform: translateY(-50%);
    padding: 20px 40px;
    /* background-color: #ffffff09; */
    background: linear-gradient(to top left, #ffffffff, #ffffff33);
    backdrop-filter: blur(8px);
    border-radius: 8px;
    box-shadow: 2px 2px 5px #2773a5;
    /* border: 2px solid black; */
    z-index: 2;
}
.box{
    width: 179px;
    margin:17px ;
    background: linear-gradient(to top left, #ffffffff, #ffffff33);
    backdrop-filter: blur(8px);
    border-radius: 8px;
    box-shadow: 2px 2px 5px #2773a5;
    padding: 20px 40px;

}
.signup-header h3 {
    font-size: 3rem;
}
.temp{
    margin:auto;
    height:72px;
    vertical-align: middle;
}
.signup-header p {
    font-size: 1.5rem;
    color: #555;
    margin-top: 5px;
}

.signup-body {
    margin: 20px 0;
}

.signup-body p {
    margin: 10px 0;
    display:flex;
    flex-direction:column;
}

.signup-body p label {
    display: block;
    font-weight: bold;

}

.signup-body p input {
    width: 100%;
    padding: 10px;
    border: 2px solid #cccc;
    border-radius: 4px;
    font-size: 1.5rem;
    margin-top: 4px;
}

.signup-body p input[type="submit"] {
    background-color: #3498db;
    border: none;
    color: white;
    cursor: pointer;
    margin:auto;
}

.signup-body p input[type="submit"]:hover {
    background-color: #2773a5;
}

.col-3{
    margin:20px 42px;
    display:flex;
}
    `;

export default CheckSlots;
