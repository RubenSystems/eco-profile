import React from 'react'
import {useParams} from "react-router-dom"
import styled from "styled-components"
const ClusterDashboard = () => {

    const { hostId } = useParams()
  return (
    <Wrapper>
      
    </Wrapper>
  )
}


const Wrapper = styled.div`
    width: 100%;
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    border: solid thin black;


`

export default ClusterDashboard