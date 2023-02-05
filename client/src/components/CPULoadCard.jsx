import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
const CPULoadCard = ({ cpuLoad }) => {
  return (
    <Wrapper>
        <h4>CPU Load</h4>
        <InnerWrapper>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" value={cpuLoad} size="60px" />
        <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
 sx={{fontSize: "18px"}}       >{`${cpuLoad}%`}</Typography>
      </Box>
        </Box>
        </InnerWrapper>
    </Wrapper>
  )
}

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
    background-color: white;
    width: 350px;
    height: 20%;
    padding: 16px;
    margin: 8px;
    border-radius: 15px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: sans-serif;

    h4 {
        color: rgba(0,0,0,0.5);
        font-weight: lighter;
        margin: 12px 0px;
    }

    h2 {
        color: black;
        font-weight: 500;
        font-weight: lighter;
        margin: 12px 0px;
    }
`


export default CPULoadCard