import { useRef } from "react";
import axios from 'axios'
import React, { useState } from 'react';
import convertToBase64 from '../helper/convertImage'
import './AdminPanel.css'

function Admin(){
    const form = useRef();
    const cardType = useRef();
    const cardHead = useRef();
    const cardText = useRef();
    const cardLink = useRef();
    const cardImage = useRef();

    const [base64String, setBase64String] = useState('');
    const handleImageInputChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
          const base64 = await convertToBase64(file);
          setBase64String(base64);
        }
    };
    async function handleClickCard(e){
        e.preventDefault();
        const cardData = {
            type: cardType.current.value,
            image: base64String,
            heading: cardHead.current.value,
            subText: cardText.current.value,
            link: cardLink.current.value,
        }
        try {
            await axios.post('/post/newcard', cardData);
            document.getElementById('messageSend').textContent = 'Data Sent Successfully'
        }catch (error){
            document.getElementById('messageSend').textContent = `You Have An Error At Sending Data: ${error}`;
        }
    }
    return(
        <div className='admin'>
            <h2>Hi Admin</h2>
            <p id="messageSend"></p>
            <form ref={form}>
                <input type="text" id="cardType" placeholder="Enter Card Type" ref={cardType} required/>
                <input type="text" id="cardHead" placeholder="Enter Head Text" ref={cardHead} required/>
                <input type="text" id="cardText" placeholder="Enter Sub Text" ref={cardText} required/>
                <input type="text" id="cardLink" placeholder="Enter Card Link" ref={cardLink} required/>
                <input type="file" id="cardImage" placeholder="Enter User Name" accept="image/*" onChange={handleImageInputChange} ref={cardImage} required/>
                <input type="submit" value="submit" onClick={handleClickCard} />
            </form>
        </div>
    )
}
export default Admin;