import React from 'react'
import { useParams } from 'react-router-dom'
import styled from "styled-components"
// import HostCard from "../components/HostCard"
const HostDashboard = () => {

    const {hostId, clusterId} = useParams()
  return (
    <Wrapper>
        <h1>HOST DASHBOARD</h1>
        <button onClick={() => {console.log(clusterId, hostId)}}></button>
        {/* <HostCard></HostCard>
        <HostCard></HostCard>
        <HostCard></HostCard>
        <HostCard></HostCard> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export default HostDashboard