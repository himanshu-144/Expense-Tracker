import React from 'react'
import { Box , Typography} from '@mui/material'


const Balance = ({transactions}) => {
  
  const amount  = transactions.map((transaction)=>transaction.amount);
  const total = amount.reduce((acc, curr) => {
    return acc = acc+curr;
  },0).toFixed(2);

  return (
    <Box>
       <Typography variant='h5'>Balance:₹{total}</Typography>

    </Box>
  )
}

export default Balance
