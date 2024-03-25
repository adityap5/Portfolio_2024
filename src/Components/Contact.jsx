import React, { useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';
import axios from 'axios';
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`



const Contact = () => {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")


  const handleSubmit = async(e) => {
    e.preventDefault();
    var data = {
      service_id: 'service_5gzt43y',
      template_id: 'template_0gn2qae',
      user_id: 'pBaj3OwlUxnoK5pa9',
      
  }
  
    try {
      const res = await axios.post(" https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName("")
      setEmail("")
      setMessage("");
      alert("Email sent successfully")
    } catch (err){
      console.log("Error sending email",err);
      setName("")
      setEmail("")
      setMessage("");
    }
     
  }



  return (
    <>
    <h1 className="text-center text-4xl font-semibold mt-5 md:{mt-2 textxl}">Email Me 🚀</h1>
    <p className="text-center text-2xl font-semibold mt-5 md:{mt-2 textxl}">Feel free to reach out to me for any questions or opertunities.</p>
    <div className='flex justify-center items-center '>
      
      <form 
      className='flex flex-col gap-6 shadow-2xl w-2/5 mt-7 p-5 rounded-md mb-8'
      onSubmit={handleSubmit}>
      <input 
      className='text-2xl p-4 border-2 border-black rounded-lg'
      type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <input 
      className='text-2xl p-4 border-2 border-black rounded-lg'
      type="text" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <textarea 
      className="text-lg min-h-40 p-2 border-2 border-black rounded-lg"
      cols="30" row="10" value={message} onChange={(e)=>{setMessage(e.target.value)}}> </textarea>
      <button 
      className='bg-slate-400 self-center h-12 w-24 font-semibold  text-2xl rounded-lg hover:bg-blue-300 hover:scale-105 md:w-48'
      type="submit" value="Send"> Send </button> 
      </form>
    </div></>
    
  )
}

export default Contact
