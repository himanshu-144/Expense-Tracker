import { Box,Card,CardContent,Typography } from '@mui/material'
import React from 'react'

const ExpenseCard = ({transactions}) => {

  const amount  = transactions.map((transaction)=>transaction.amount);
  const income = amount.filter(item=>item > 0).reduce((acc, curr) => {
    return acc = acc+curr;
  },0).toFixed(2);
  const expense = (amount.filter(item => item < 0).reduce((acc, curr) => {
    return acc = acc+curr;
  },0).toFixed(2))*-1;

  return (
    <Box display="flex" justifyContent="space-around" marginTop="10px">
      <Card>
        <CardContent>
            <Typography>Income</Typography>
            <Typography style={{color:"green",textAlign:"center"}}>₹{income}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
            <Typography>Expense</Typography>
            <Typography style={{color:"red",textAlign:"center"}}>₹{expense}</Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default ExpenseCard
