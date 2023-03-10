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
import { useQuery } from 'react-query'
import axios from 'axios'
import moment from 'moment'
import PredictionChart from "../components/PredictionChart.jsx";
import Cock from '../data/prediction.json'


const HostDashboard = () => {
  // const data = {
  //   uptime: 25,
  //   hostname: "Prestance",
  //   cpuLoad: 60.5,
  //   esgRating: 99,
  //   totalEnergy: 3000
  // }
  const [data, setData] = React.useState({})
  const [liveData, setLiveData] = React.useState([])

  React.useEffect(() => {
    (async () => {
       const response = await axios.get(`http://localhost:8000/cluster/${clusterId}/host/${hostId}/`)
      setData(response.data)

        setInterval(async () => {
            const response = await axios.get(`http://localhost:8000/cluster/${clusterId}/host/${hostId}/live/`)
            setLiveData(response.data)
        }, 2000)
    })()
  },[])

  // const getStaticData = async () => {
  //   console.log(clusterId, hostId)
  //   const response = await axios.get(`http://localhost:8000/cluster/${clusterId}/host/${hostId}`)
  //   return response.data
  // }

  // const { data } = useQuery(["static"], getStaticData)

  const getLiveData = async () => {
    const response = await axios.get(`http://localhost:8000/cluster/${clusterId}/host/${hostId}/live`)
    const arr = response.data;

    arr.map(x => {
      const formatted = x.map(entry => {
            const timestamp = moment(entry.timestamp).format('HH:mm')
            return {
                ...entry,
                timestamp
            }
        })

      return formatted
  })
  }

  // const { data: liveData } = useQuery(["live"], getLiveData, {refetchInterval: 1000})
    const {hostId, clusterId} = useParams()
  return (
    <Wrapper>
        {/* <h1>HOST DASHBOARD</h1> */}
        <UpperContainer>
        <ESGCard esgRating={data.esgScore} hostId={hostId} clusterId={clusterId} />
          <InnerGrid>
            <Row>
            <HostName hostname={hostId}/>
            <HostUptime uptime={
              `${Math.round(moment.duration(moment().diff(moment(data.activeSince))).asMinutes())} minutes`
            }/>
            </Row>
            <Row>
            <TotalEnergy totalEnergy={Math.round(data.totalPowerUsage)}/>
            <CPULoadCard cpuLoad={data.currentCpuLoad}/>
            </Row>
          </InnerGrid>
        </UpperContainer>
        <LowerContainer>
{/*          <PredictionChart a ={ {
        const data1 = arr.filter((x) => x.predicted)
        const data2 = arr.filter((x) => !x.predicted)
        return [data1, data2]
    } } what={`powerUsage`}/>*/}

                  <PredictionChart a ={ liveData.filter((x) => x.predicted) } 
                    b ={  liveData.filter((x) => !x.predicted) } what={`powerUsage`}/>

          <CPUChart chartData={liveData} what={`cpuLoad`}/>
          {/* <button onClick={() => setLiveData(liveData.concat({
   
    timestamp: "2023-02-04T21:19:00",
    powerUsage: 90.12,
  }))}></button>
  <button onClick={() => console.log(liveData)}> debug </button> */}
          {/* <CPUChart chartData={Live}/> */}
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