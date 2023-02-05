import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from "moment";
const CPUChart = ({chartData, what}) => {
    console.log("CPU CHART", chartData)
  return (
    <Wrapper>
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={500} height={300} data={chartData.map(e => { return {
                ...e,
                timestamp: moment(e.timestamp).format('HH:mm')
            }})}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Line type="monotone" dataKey={what} stroke='#8884d8' />
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

export default CPUChart