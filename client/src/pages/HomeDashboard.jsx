import * as React from 'react'
import {Container, Grid, Paper} from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom'
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {useQuery} from "react-query";
import axios from "axios";
import {useEffect, useState} from "react";
import moment from "moment";

const HomeDashboard = () => {
    const [content, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios('http://localhost:8000')
            setData(response.data)

        }
        fetchData()
        setInterval(fetchData, 5000)
    },[])

    return (
      <React.Fragment>
          <Toolbar />
            <Grid sx={{ mt: 8, width: '100%', p: 2 }} container spacing={2}>
                {
                    content && content.map(e => {
                        const formatted = e.data.map(entry => {
                            const timestamp = moment(entry.timestamp).format('HH:mm')
                            return {
                                ...entry,
                                timestamp
                            }
                        })

                        return (
                        <Grid key={e.clusterId} item xs={6}>
                          <Link to={`/cluster/${e.clusterId}`}>
                               <Paper sx={{ height: '100%', pt: 1 }}>
                              <h2 style={{ marginLeft: '45px'}} >{e.clusterId} (Cluster)</h2>
                              <LineChart width={500} height={300} data={formatted}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="timestamp" />
                                <YAxis />
                                <Line type="monotone" dataKey="powerUsage" stroke='#8884d8' />
                            </LineChart>
                          </Paper>
                          </Link>
                      </Grid>
                        )
                    })
                }
        </Grid>
      </React.Fragment>
  )
}

export default HomeDashboard