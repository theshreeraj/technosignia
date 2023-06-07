import React from 'react';
import styled from 'styled-components';

const WhatsapIcon = styled.div`
position: fixed;
right: 15px; 
bottom: 15px;
`

const Whatsapp = () => {
    return (
        <WhatsapIcon>
            <a href="https://faq.whatsapp.com/5913398998672934" target="_blank" rel='noreferrer'>
                <img src="https://i.ibb.co/VgSspjY/whatsapp-button.png" alt="whatsapp icon"></img>
            </a>
        </WhatsapIcon>
    )
}

export default Whatsapp;