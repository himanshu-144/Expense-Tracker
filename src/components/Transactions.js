import { Box, Typography,TextField,Button } from '@mui/material'
import React, { useState } from 'react'

const Transactions = ({setTransactions}) => {
  const[expense,setExpense] = useState();
  const[amount,setAmount] = useState();

  
  const AddTransaction=()=>{
     
    const transaction = {
       id : Math.floor(Math.random()*100000),
       text : expense,
       amount : +amount 

    };
    setTransactions(prev=>[transaction, ...prev]);
     
  };

  return (
    <Box margin="10px 10px">
      <Typography variant='h6' style={{margin:"10px 0px 0px 0px"}}>New Transaction</Typography>
      <TextField  variant="outlined" label="Enter Expense" style={{margin:"5px 0px 10px 0px"}}
        onChange={(e)=>setExpense(e.target.value)} name='expense' value={expense}
      />
      <TextField  variant="outlined" label="Enter Amount" style={{margin:"10px 0px 20px 0px"}}
          onChange={(e)=>setAmount(e.target.value)} name='amount' value={amount}
      />
      <Button variant="contained" size='large' onClick={AddTransaction}
      >Add Transaction</Button>

    </Box>
  )
}

export default Transactions
