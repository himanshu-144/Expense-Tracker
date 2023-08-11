import { Box, Divider, List, Typography,ListItem,ListItemIcon,ListItemText } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const TransactionsPanel = ({transactions,setTransactions}) => {

  const handleDelete=(id)=>{
     const deleteItem = transactions.filter(f=>f.id !== id);
     setTransactions([...deleteItem]);
  }

  return (
    <Box>
       <Typography variant='h5' style={{textAlign:"center"}}>Transaction History</Typography>
       <Divider />
       <List>
         {transactions.map((transaction)=>{
            return(
        <ListItem key={transaction.id}>
            
             <ListItemIcon onClick={()=>handleDelete(transaction.id)}><DeleteIcon style={{cursor:"pointer"}}/></ListItemIcon>
             <ListItemText primary={transaction.text}  />
             <ListItemText primary={transaction.amount} 
              style={{color:`${transaction.amount > 10 ? "green" : "red"}`}}
             />
             
         </ListItem>
            )
         })}
      
       </List>
    </Box>
  )
}

export default TransactionsPanel
