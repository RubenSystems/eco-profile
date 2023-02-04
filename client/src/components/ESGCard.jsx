import React from 'react'
import styled from 'styled-components'

const ESGCard = () => {
  return (
    <Wrapper>
        <h3>ESG Rating</h3>
        <h1>99</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    background-color: white;
    width: 400px;
    height: 100%;
    padding: 32px;
    border-radius: 15px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: sans-serif;

    h3 {
        color: rgba(0,0,0,0.5);
        font-weight: lighter;
        margin: 12px 0px;
    }

    h1 {
        color: green;
        font-weight: 500;
        font-weight: lighter;
        font-size: 45px;
        margin: 12px 0px;
    }
`

export default ESGCard