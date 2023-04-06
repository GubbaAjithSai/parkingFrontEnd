import React, { useState,useEffect } from 'react';
import styled from 'styled-components'
function BookingForm() {
  // Set up state to store the form data
  const [formData, setFormData] = useState({
    spaceID: "",
    vehicleType: '',
    fromPeriod: '',
    toPeriod: '',
    parkingDate: '',
    vehicleNumber: ''
  });
   const [slots, setSlots] = useState([])
   useEffect(() => {
    async function getSlots() {
      const response = await fetch("https://parkingbackend.onrender.com/parking");
      const data = await response.json();
      setSlots(data);
    }
    getSlots();
  }, []);
  // id for setting space Id
  const [id,setId]=useState("Select a slot")
  const [tog,setTog]=useState(false)
  const [flag,setFlag]=useState(false)
  const [hope,setHope]=useState("green")
  const [timePeriod,setTimePeriod]=useState({})
  // Handle changes to the form fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (event,id) => {
    event.preventDefault();
    try {
      // Submit the form data to the server
      const response = await fetch('https://parkingbackend.onrender.com/bookParking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json()
      console.log(data);
      if(!data.error){
        setFlag(false)
        setTog(true)
        window.alert("Your Slot is Registered")
        setHope("red")
      }else{
        if(data.error.errors){
          window.alert("enter all required fields")
        }
        else if(data.error.keyValue.vehicleNumber){
          window.alert("Your vehicle with number:"+data.error.keyValue.vehicleNumber+" already booked for slot")
        }
         
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleButtonClick =  (event) => {    
    setId(event.target.value)
    setFlag(true)
    setFormData((prevFormData) => ({
      ...prevFormData,
      "spaceID": event.target.value
    }));
    
  }; 
   if(id!=="Select a slot"){
    let elem=document.getElementById(id)
    elem.addEventListener('click',async()=>{
      const response = await fetch(`https://parkingbackend.onrender.com/users/${id}`);
      const data = await response.json();
      if(data.spaceID){
        setFlag(false)
      }
      setTimePeriod(data)
    })
   }
  function dateConverter(date) {
    var newDate = new Date(date).toLocaleString(undefined, {timeZone: 'GMT'});
    return newDate;
  }
 
  return (
    <Wrapper>
    <div className="big">
      {tog && 
        <span className='spann'>
          <h2>Your Slot {id} is booked successfully</h2>
        </span> 
      }
      {!tog &&
        <span className='spann'>
          <h2>Select your Slot to proceed</h2>
        </span> 
      }
      
      <div className="container">
        <div style={{ position: 'relative' }} className='tab'>
          <img src="images/parking-zone.jpg" alt="Parking Zone" />
          {slots.map((currElem)=>{
            let left=currElem.left+50;
            let top=currElem.top+30;
            let x=top+30;
            if(currElem.availability===true){
              return <>
                <input type="radio" 
                  id={currElem.spaceID}
                  value={currElem.spaceID}
                  style={{ position: 'absolute', top: top, left: left,accentColor:id!=="Select a slot" && id===currElem.spaceID ? hope:null,height:"20px", width:"20px"}}
                  name='btnn'
                  onClick={(event)=>handleButtonClick(event)}
                />
                <span style={{ position: 'absolute', top:x, left: left }}>{currElem.spaceID}</span>
              </>
            }else{
              return <>
                <div className='box' id={currElem.spaceID} style={{ position: 'absolute', top: top, left: left }}> </div>
                <span style={{ position: 'absolute', top: x, left: left }}>{currElem.spaceID}</span>
              </>;
            }
          })}
      </div>
    {timePeriod.spaceID && 
    <div className="cont">
      <div className='align'>
        <div>Your Slot {timePeriod.spaceID} is booked </div>
        <div>FROM:  {dateConverter(timePeriod.fromPeriod)}</div>
        <div>TO:  {dateConverter(timePeriod.toPeriod)}</div>
      </div>
    </div>
    }
      
      {flag &&
        <div className='formdiv'>
      <form onSubmit={(event,id)=>handleSubmit(event,id)}>
      <label>
        Space ID:
        <input type="text" name="spaceID" value={id} placeholder='select a slot above' />
      </label>
      <br />
      <label>
        Vehicle Type:
        <input type="text" name="vehicleType" value={formData.vehicleType} onChange={handleChange} />
      </label>
      <br />
      <label>
        From Period:
        <input type="datetime-local" name="fromPeriod" value={formData.fromPeriod} onChange={handleChange} />
      </label>
      <label>
        To Period:
        <input type="datetime-local" name="toPeriod" value={formData.toPeriod} onChange={handleChange} />
      </label>
      <br />
      <label>
        Parking Date:
        <input type="date" name="parkingDate" value={formData.parkingDate} onChange={handleChange} />
      </label>
      <br />
      <label>
        Vehicle Number:
        <input type="text" name="vehicleNumber" value={formData.vehicleNumber} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Book Parking</button>
    </form>
    </div>
    }
    
    </div>
    </div>
    </Wrapper>
  );
}
  const Wrapper=styled.section`
  font-family:"Times new roman";
  background:rgba(255,255,255,0.5)url("images/cars.png");
  .big{
    background-color:rgba(41, 97, 140, 0.7);
  }
    .box{
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: orange;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
    }
    h2{
      margin:auto;
      color:white;
      isolation:isolate;
      padding:5px;
      border-radius:10px;
      
    }
    .spann{
      display:flex;
      width:95%;
      margin:0px 20px
    }
    img{
      margin:43px
    }
    .tab{
      display:inlineBlock;
      margin :auto
    }
    .container{
      display:flex;
    }
    .cont{
      display:flex;
      flex-direction:column;
    }
    .formdiv{
      margin:45px auto ;
      width: 400px;
      padding: 20px 40px;
    /* background-color: #ffffff09; */
    background: linear-gradient(to top left, #ffffffff, #ffffff33);
    backdrop-filter: blur(8px);
    border-radius: 8px;
    box-shadow: 2px 2px 5px #2773a5;
    
    z-index: 2;
    }
    label input{
      margin:10px;
      position:relative;
      right:0;
    }
    label{
      font-weight: bold;
      width:100%
    }
    button{
      background-color: #3498db;
      border: none;
      color: white;
      cursor: pointer;
      margin:auto 40px;
      width: 75%;
      padding: 5px;
      border: 2px solid #cccc;
      border-radius: 4px;
      font-size: 1.5rem;

    }
    button:hover{
      background-color: #2773a5;
    }
    .align{
      font-weight: bold;
      margin:auto;
      color:white;
      font-size:20px;
    }
    
  
  `
export default BookingForm;