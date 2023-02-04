import React from 'react'
import styled from "styled-components"

const HostName = () => {
  return (
    <Wrapper>
        <h4>
            Host Name
        </h4>

        <h2>SomeHostname</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    background-color: white;
    width: 350px;
    height: 20%;
    padding: 16px;
    margin: 8px;
    border-radius: 15px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: sans-serif;

    h4 {
        color: rgba(0,0,0,0.5);
        font-weight: lighter;
        margin: 12px 0px;
    }

    h2 {
        color: black;
        font-weight: 500;
        font-weight: lighter;
        margin: 12px 0px;
    }
`

export default HostName