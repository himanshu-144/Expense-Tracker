
import { Box, Typography } from '@mui/material';
import './App.css';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import Transactions from './components/Transactions';
import TransactionsPanel from './components/TransactionsPanel';
import { useState } from 'react';

function App() {

  const[transactions, setTransactions] = useState([
    {id :1, text :"Momos", amount: -20},
    {id :2, text :"Books", amount: -100},
    {id :3, text :"Salary", amount: 5000},
    {id :4, text :"Bonus", amount: 3000},
  ]);

  return (
    <div className="App">
      <Typography style={{fontSize:30, fontWeight:600, textTransform:"uppercase"}}
      variant='h5'>Expense Tracker</Typography>
       <Box sx={{height:600, width:800,border :"1px solid blue", borderRadius:5,display:"flex",flexDirection:"row"}}>
          <Box width="50%" padding="15px">
            <Balance transactions={transactions}/>
            <ExpenseCard transactions={transactions}/>
            <Transactions setTransactions={setTransactions}/>
          </Box>
          <Box width="50%" borderLeft="1px solid blue" padding="15px">
          <TransactionsPanel transactions ={transactions} setTransactions={setTransactions}/>
           </Box>
       </Box>
    </div>
  );
}

export default App;
