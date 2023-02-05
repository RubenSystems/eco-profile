import * as React from 'react'
import axios from 'axios'
import {Link, useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import Toolbar from "@mui/material/Toolbar";
import {Grid, Paper} from "@mui/material";
import moment from "moment";
import {CartesianGrid, Line, LineChart, XAxis, YAxis} from "recharts";

const ClusterDashboard = () => {
    const { clusterId } = useParams()

    const [content, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios(`http://localhost:8000/cluster/${clusterId}`)
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
                          <Link to={`/host/${e.clusterIds[0]['clusterId']}/${e.hostId}`}>
                               <Paper sx={{ height: '100%', pt: 1 }}>
                              <h2 style={{ marginLeft: '45px'}} >{e.hostId} (Host)</h2>
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

export default ClusterDashboard