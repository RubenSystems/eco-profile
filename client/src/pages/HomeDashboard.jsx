import React from 'react'
import { Link } from 'react-router-dom'
import Live from "../data/live.json"
import CPUChart from '../components/CPUChart'
import styled from 'styled-components'
import ESGCard from '../components/ESGCard'
import HostName from '../components/HostName'
import HostUptime from '../components/HostUptime'
import TotalEnergy from '../components/TotalEnergy'
import CPULoadCard from '../components/CPULoadCard'
// const getData = async () => {
//   const response = await axios.get("")
//   return response.data
// }

// const {data} = useQuery(["clusters"], clusterData, refetchInterval=1000)

const HomeDashboard = () => {
  return (
    // 1. Create a Grid Layout of cards
    <Wrapper>
        {/* <h1>HOST DASHBOARD</h1> */}
        <UpperContainer>
          <CPUChart chartData={Live}/>
          <CPUChart chartData={Live}/>
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




export default HomeDashboard