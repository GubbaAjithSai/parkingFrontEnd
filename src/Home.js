import React from "react";
import styled from "styled-components";
const Home = () => {
  return <Wrapper >
  <div className="heading">
    <div className="imgOverlay">
    <div className="cont">
      <h1>
        Parking Management System
      </h1>
      <span>In the current scenario of parking management system, optimal usage of parking space and the abruptness to park vehicles are critical factors. Technology based Parking Management System is an automated and advanced solution that provides management of vehicles right from an entry in the parking area to the exit. Optimizing the parking space for vehicles is still a problematic area for businesses, Government offices, various public places as well as municipalities authorities in multiple cities across India. Our Parking Management System offers a productive implementation of the parking resources.
      </span>
      </div>
    </div>
  </div>
    <div className="first">Our Parking Management System will ease people's task of finding safe parking spots in real time. The system helps an individual to pre-book the parking spot from the distant area, reducing traffic congestion and allowing a user to know the availability of parking space in advance.

Our parking management solution can significantly offer benefit to both the user and the parking lot owner as it helps in reducing traffic by enhancing user experience. This system supports various parking applications that can easily handle and organize the data of vehicles. To rectify the complications of parking security, our parking management system allows to recognize and validate the automobiles at both entry and exit points.

Since we believe that every parking management system is unique, one may require customized parking management systems in order to achieve optimal operation and we provide a custom parking management solution as per your requirements in designing entries and exits, traffic flow, payment systems, and access management.</div>

<div className="second">
<h2>Objective</h2>
<span>The aim of implementing Parking Management System is to reduce time and increase efficiency of the current Parking Management System. In overpopulated cosmopolitan zones, parking strategies must be wellimplemented for management of vehicles. The system provides details of the vacant parking slots in the vicinity and reduces the traffic issues due to illegal parking in the vicinity. It is designed with an objective to meet the requirements of controlled parking that offers effortless parking tactics to the authorities.</span></div>

<div className="first">
        <h2>Our Solutions</h2>  
        <span>Parking Management System offers a solution to both - the parking lot owner and the vehicle owner as it facilitates hassle free vehicles parking and reduces parking management costs. The system provides multiple solutions that include:
        <div className="flexx">
        <img src="https://www.mantratec.com/Images/Solutions/Parking-Management-System/Internal-Guidance-System.jpg" alt="imagee" height="330px" />
        <div className="left">
        <span>
  <h3>On-Street Parking Control System</h3>
  <p>
  Our parking management system offers innovative parking solutions that utilize cutting-edge technology for on-    street parking system.Parking Management System offers innovative parking solution that utilize cutting-edge technology for onstreet parking system. The system will allow efficient use of on-street parking spaces or areas.
  </p>
  </span>
  <span>
  <h3>Integration of access control</h3>
  <p>
  Our integrated parking management system comprises of access control and security features such as CCTV for surveillance, RFID, Automatic Number Plate Recognition (ANPR). It is devised to address the requirements in vehicle access control for secured and paid parking provisions.Integrated Parking Management System comprises of access control and security features such as CCTV for surveillance, RFID, Automatic Number Plate Recognition (ANPR). It is devised to address the requirements in vehicle access control for secured and paid parking provisions. Using this technology, alphabets and numbers on the number plate will be derived. Most of the functioning is based upon ANPR feature as it will capture a vehicle's number plate. Also, CCTV cameras can act as surveillance for monitoring of the vehicles.
  </p>
  </span>
  </div>
  </div>
  <div className="flexx">
      <div className="right">
  <span>
  <h3>Parking Guidance System</h3>
  <p>
  Our parking guidance system helps in informing users about the availability of parking slots and location of vacant slots. It is further classified into two types - internal and external.Internal Guidance System will help the users to find the unoccupied slots from a distance with changeable signals installed on the top of each parking slot. The devices installed will emit red light in case of occupied slots and emit green light if the slot is vacant.
  </p>
  </span>
  <span>
  <h3>Valet Parking System</h3>
  <p>
  Our valet parking system is an automated, effective and dependable solution. The users can be relieved from the time and effort spent behind looking for the parking space.Allocates a specified parking slot to each individual opting for valet parking.

Label a parking space as available soon after the valet parking vehicle leaves the parking slot.

Label a parking space as unavailable once the valet parking vehicle enters the parking slot.

Maintain a record of the number of available and unavailable parking slots.

To approve the identification of a driver, a bar-coded ticket is linked with the valet attendance ID.

A bar-coded ticket, given to the user comprises of the following information:

Date and time of the parking

Bar-coded ticket number

Parking area allotment for valet parking vehicle

The system can provide creation of computergenerated reports, adopting a computerized procedure right form issuance of a parking ticket, slot allocation, reoccupying the vehicle to billing.
  </p>
  </span>
  
  </div>
  <img src="https://www.mantratec.com/Images/Solutions/Parking-Management-System/Valet-Parking-System.jpg" alt="imagee" height="300px" />
  </div>
</span>
</div>
  </Wrapper>;
};
const Wrapper=styled.section`
.heading{
  background:url("images/design.jpg");
  h2{
   margin-bottom:40px;
}
}
.imgOverlay{
   background-color:rgba(41, 97, 140, 0.7);
}
.cont{
  color:white;
  margin-top:px;
  margin-bottom:20px;
  padding: 80px 96px 113px 10px;
  text-align:center;
  line-height:26px;
}

.first{
  background-color:#dcf5eb;
  margin:20px;
  padding:5px;
}
.flexx{
  display:flex;
}
.second{
  background-color:beige;
  margin:20px;
  padding:5px;
}.left{
  margin:20px;
  width:80%;
}
.right{
  margin:20px;
  width:80%;
}img{
  margin:20px;
}






`
export default Home;
