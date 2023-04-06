import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Wrapper>
    <footer>
      <div className="box">
        <div className="footer">
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Pricing and Refund Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className="footer">
        <p>Contact Us</p>
        <p>About Us</p>
        </div>
      </div>
      <hr />
      <div className="box">
        <p>Copyright © 2023 Parking Managment. All Rights Reserved.</p>
      </div>
    </footer>
    </Wrapper>
  )
}
const Wrapper=styled.section`
    *{
      margin:0;
      padding:0;
    }
    footer{
      position:absolute;
     width:100%;
      background-color:#0A1435 ;
      
    p {
      color:#0A1435;
      font-family: "Times New Roman", Times, serif;
    }
    }
  .box{
    display:flex;
    
    p{
      margin:auto;
      color:white;
    }
    .footer{
      margin:auto;
      padding:10px
    }
  }

  @media (max-width: 768px) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer