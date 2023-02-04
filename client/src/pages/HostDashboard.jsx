import React from 'react'
import { useParams } from 'react-router-dom'
import styled from "styled-components"
import RandomCard from '../components/RandomCard'
import ESGCard from '../components/ESGCard'
import HostName from '../components/HostName'
import HostUptime from '../components/HostUptime'
import CPULoadCard from '../components/CPULoadCard'
import TotalEnergy from '../components/TotalEnergy'
import CPUChart from '../components/CPUChart'
import Live from "../data/live.json"
const HostDashboard = () => {

    const {hostId, clusterId} = useParams()
  return (
    <Wrapper>
        {/* <h1>HOST DASHBOARD</h1> */}
        <UpperContainer>
        <ESGCard />
          <InnerGrid>
            <Row>
            <HostName />
            <HostUptime />
            </Row>
            <Row>
            <TotalEnergy />
            <CPULoadCard />
            </Row>
          </InnerGrid>
        </UpperContainer>
        <LowerContainer>
          <CPUChart chartData={Live}/>
          <CPUChart chartData={Live}/>
        </LowerContainer>
        {/* <button onClick={() => {console.log(clusterId, hostId)}}> Click here</button> */}
        {/* <RandomCard />
        <RandomCard />
        <RandomCard />
        <RandomCard /> */}
    </Wrapper>
  )
}

const Row = styled.div`
  display: flex;
`

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 3rem;
    background-color: #f7f8fa;
    margin-top: 30px;
`

const UpperContainer = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: space-between;
`

const LowerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  padding: 16px 0px;
  justify-content: space-between;
`

const InnerGrid = styled.div`
  display: flex;
  flex-direction: column;
`

export default HostDashboard