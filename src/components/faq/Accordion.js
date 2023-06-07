import React, { useState } from 'react';
import styled from 'styled-components';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';




const Container = styled.div`
cursor: pointer;
padding: 1rem 0.5rem;
display:flex;
flex-direction: column;
border-bottom: 1px solid white;
margin: 3rem 0;
`

const Title = styled.div`
${'' /* font-size:${props => props.theme.fontsm}; */}
display: flex;
justify-content: space-between;
align-items: center;
color: white;
`
const Reveal = styled.div`
display: ${props => props.clicked ? 'block' : 'none'};
margin-top: 1rem;
color: white;
${'' /* font-size: ${props => props.theme.fontsm}; */}
font-weight: 300;
line-height:1.1rem;
`
const Name = styled.div`
display:flex;
align-items: center;
`

const Indicator = styled.span`
font-size:25px;

display: flex;
justify-content: center;
align-items: center;

svg{
    width:1rem;
    height:auto;
    fill: white;
}

`


const Accordion = ({ title, children }) => {
    const [collapse, setCollapse] = useState(false)
    return (
        <Container>
            <Title onClick={() => setCollapse(!collapse)}>
                <Name>
                    <span>{title}</span>
                </Name>
                {
                    collapse ?
                        <Indicator><RiCloseLine /></Indicator> : <Indicator><RiMenu3Line /></Indicator>
                }
            </Title>
            <Reveal clicked={collapse}>
                {children}
            </Reveal>
        </Container>
    )
}

export default Accordion;