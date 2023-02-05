import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const ESGCard = ({esgRating, hostId, clusterId}) => {
  return (
    <Wrapper>
        <h3>Host: {clusterId}:{hostId}</h3>
        <div className="divider"></div>
        <h3>ESG Rating</h3>
        <InnerWrapper>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" value={esgRating} color="success" size="100px" />
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
 sx={{fontSize: "18px"}}       >{`${esgRating}%`}</Typography>
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
    width: 400px;
    height: 100%;
    padding: 32px;
    border-radius: 15px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: sans-serif;

    .divider {
        height: 1px;
        width: 100%;
        background-color: rgba(0,0,0,0.3);
    }

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

export default ESGCard