import React from 'react'
import styled from "styled-components"
import { Link as RouterLink } from 'react-router-dom';
import Card from '../components/Card';
import ClusterComponent from '../components/ClusterComponent';
import testData from '../data/cluster'
// const getData = async () => {
//   const response = await axios.get("")
//   return response.data
// }
// const {data} = useQuery(["clusters"], clusterData, refetchInterval=1000)
const createClusterCards = () => {
  const rows = [];
  for (let i = 0; i < testData.length; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      rows.push(
        <RouterLink key={i} to={`/cluster/${i+1}`} style={{ mt: 2, textDecoration: 'none', color: 'inherit' }}>
          <Card></Card>
        </RouterLink>
      );
  }
  return rows
}


const HomeDashboard = () => {
  return (
    
    <div>
      {/* <button style={{background: 'red', 'marginTop': "300px"}} onClick={() => console.log(testData)}>Test</button> */}
      {/* {testData.map((data, key) => {
          return (
            <div key={key}>
              {data.clusterId +
                " , " +
                data.data[0].cpuLoad +
                " ," +
                data.data[0].powerUsage}
            </div>
          );
        })} */}
      
      <Container>
         {createClusterCards()}
      </Container>
      
    </div>
  )
}

  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
  `



export default HomeDashboard