import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import {useParams} from "react-router-dom"
import styled from "styled-components"
const ClusterDashboard = () => {
  // const getData = async () => {
  //   const response = await axios.get("")
  //   return response.data
  // }

  // const { data: topics, isLoading} = useQuery(["topics"], getData(), refetchInterval=1000)

  

  const { clusterId } = useParams()
  return (
    <Wrapper>
      <h1>Cluster Dashboard</h1>
      <button onClick={() => console.log(clusterId)}> CLICK</button>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    border: solid thin black;
`

export default ClusterDashboard