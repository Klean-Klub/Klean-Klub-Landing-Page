import {React, useRef, useState} from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import {HashLoader} from "react-spinners";
// Assets
import ToolsImage1 from "../../assets/img/tools1.jpg";
import Cleaner2 from "../../assets/img/cleaner2.jpg";
import ToolsImage2 from "../../assets/img/tools2.jpg";




export default function Contact() {

  const form = useRef();
  const [loading ,setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const success = "Message successfully sent!";
  const error = "Failed to send Message!";
  const sendEmail = async (e) => {
    setLoading(true);
    e.preventDefault();
    await emailjs.sendForm('service_u2wdnfd', 'template_ybor07o', form.current, '6nC0WBjqw3CITdW4p')
    .then((result) => {
        // show the user a success message
        setMessage(success);
    }, (error) => {
        // show the user an error
        setMessage(error);

    });
    setTimeout(()=>{
      setLoading(false);  
      setMessage('');  
      document.getElementById('myform').reset(); 
    },5000)
  };

  // const validateForm = ()=>{
  //   form.current.fname.val && form.current.fname.val.length >= 5 &&
  //   form.current.email.val && form.current.fname.val.length>=5 &&   
  //   form.current.fname.val && form.current.fname.val.length>=5 &&   
  //   form.current.fname.val && form.current.fname.val.length>=5 &&   
  //   form.current.fname.val && form.current.fname.val.length>=5 &&   
  // };

  return (
    <>
      <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              Wanna join the klean klub family as a laundry or a cleaner at no charge? Wanna get in touch with us?
              <br />
              Hit us up below!
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form ref={form} onSubmit={sendEmail} id="myform">
                <label className="font13">Full name:</label>
                <input minLength={5} required type="text" id="fname" name="fname" className="font20 extraBold" />
                <label className="font13">Email:</label>
                <input required type="email" id="email" name="email" className="font20 extraBold" />
                <label className="font13">Phone Number:</label>
                <input minLength={10} required type="number" id="phone" name="phone" className="font20 extraBold" />
                <label className="font13">Subject:</label>
                <input minLength={5} required type="text" id="subject" name="subject" className="font20 extraBold" />
                <textarea minLength={10} required rows="4" cols="50" type="text" id="message" name="message" className="font20 extraBold" />
              <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Send Message" className="pointer animate radius8" style={{ maxWidth: "220px", height:"50px"}}/>
              </SumbitWrapper>
              </Form>
              
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ToolsImage1} alt="office" className="radius6" style={{width:"180px", height:"204px"}}/>
                </ContactImgBox>
                <ContactImgBox>
                  {/* <img src={Cleaner2} alt="office" className="radius6" /> */}
                  <img src={ToolsImage2} alt="office" className="radius6" style={{width:"180px", height:"160px"}}/>

                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                <img src={Cleaner2} alt="office" className="radius6" style={{width:"278px", height:"290px"}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Wrapper>
      {loading && <div style={{width:"100vw", height:"100vh", backgroundColor:"white", position:"fixed", zIndex:100, top:0, opacity:0.9, display:"flex", justifyContent:"center", alignItems:"center"}}>
        <HashLoader color="#FD6B22" />
        <p style={{color:message===success?"#36d7b7":"#ff9494", marginLeft:"20px", fontWeight:"w700"}}>{message}</p>
        
      </div>}

    </>
    
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  // border: 1px solid #FD6B22;
  background-color: #FD6B22 !important;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #000000 !important;
    // border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









