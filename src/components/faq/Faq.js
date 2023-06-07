import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';



const Section = styled.section`
min-height: 100vh;
height:auto;
${'' /* width: 100vw; */}
${'' /* background-color: #FFD400; */}
margin : 1rem auto;
position: relative;

display: flex;
justify-content:center;
align-items:center;
flex-direction: column;
`


const Title = styled.h1`
font-size: ${(props) => props.theme.text};
text-transform: uppercase;
color: white;
${'' /* display: flex;
justify-content: center;
align-items: center; */}
margin: 1rem auto;
border-bottom: 2px solid black ;
width: fit-content;

@media(max-width:48em){
    font-size: ${(props) => props.theme.fontxl};
}
`
const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content:space-between;
align-items: center;


@media(max-width:64em){
    width:80%
}

@media(max-width:48em){
    width:90%;
    flex-direction:column;

&>*:last-child{
    &>*:first-child{
    margin-top:0;
}
}
}


`

const Box = styled.div`
width:45%;

@media(max-width:64em){
    width:90%;
    align-self:center;
}

@media(max-width:48em){
    width:90%;
    flex-direction:column;
    
}
`


const Faq = () => {

    return (
        <Section id='faq'>
            <Title>
                FaQ
            </Title>
            <Container>
                <Box>
                    <Accordion title="Some random question about the topics?">
                        Yes there is lorem ipsum lorem ipsum loprem ipsum
                    </Accordion>
                    <Accordion title="Some random question about the topics?">
                        Yes there is lorem ipsum lorem ipsum loprem ipsum
                    </Accordion>
                    <Accordion title="Some random question about the topics?">
                        Yes there is lorem ipsum lorem ipsum loprem ipsum
                    </Accordion>
                </Box>
                <Box>
                    <Accordion title="Some random question about the topics?">
                        Yes there is lorem ipsum lorem ipsum loprem ipsum
                    </Accordion>
                    <Accordion title="Some random question about the topics?">
                        Yes there is lorem ipsum lorem ipsum loprem ipsum
                    </Accordion>
                    <Accordion title="Some random question about the topics?">
                        Yes there is lorem ipsum lorem ipsum loprem ipsum
                    </Accordion>
                </Box>
            </Container>
        </Section>
    )
}

export default Faq;