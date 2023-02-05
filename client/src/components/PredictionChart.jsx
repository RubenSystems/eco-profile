import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from "moment";
const PredictionChart = ({b, a}) => {
    // const [a, setA] = useState([])
    // const [b, setB] = useState([])

    // const processData = (arr) => 


    // useEffect(() => {
    //     const [c, d] = processData(chartData)
    //     setA(c)
    //     setB(d)
    //     console.log(c, d)
    // }, [])

    // const processedData = processData(chartData)
    // console.log("HOIASHDIohSAIODH", processedData)
    console.log(b, a)
  return (
    <Wrapper>
        <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" allowDuplicatedCategory={false} />
          <YAxis dataKey="powerUsage" />
          <Tooltip />

          <Legend />
            <Line type={'monotone'} dataKey="powerUsage" data={b} name="data"  stroke='blue'/>
            <Line type={'monotone'} dataKey="powerUsage" data={a} name="prediction" stroke='red' />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    background-color: white;
    width: 48%;
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

export default PredictionChart