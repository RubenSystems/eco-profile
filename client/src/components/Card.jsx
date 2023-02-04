import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import testData from '../data/cluster'
import CPUChart from './CPUChart';
import Live from "../data/live.json"
export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345,  borderRadius: '16px', mt: 10  }}>
      <CardActionArea>
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cluster 
          </Typography>
          <CPUChart chartData={Live}></CPUChart>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}