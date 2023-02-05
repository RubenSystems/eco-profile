import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from "moment";
const PredictionChart = ({chartData, what}) => {


    const processData = (arr) => {
        const data1 = arr.filter((x) => x.predicted)
        const data2 = arr.filter((x) => !x.predicted)
        return [data1, data2]
    }


  return (
    <Wrapper>
        <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" type="timestamp" allowDuplicatedCategory={false} />
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend />
          <Line dataKey="value" data={processedData[0]} name="prediction" stroke='red' />
          <Line dataKey="value" data={processedData[1]} name="data"  stroke='blue'/>
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