import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import QuoteMachine from "./components/QuoteMachine.jsx";
import { random } from "lodash";

const styles = {
  container: {
    display: "flex",
    height: "100vh",
  },
};

function App() {

const [quotes, setQuotes] = useState([]);
const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(null);
  
useEffect(() => {
  console.log("mounted");
  fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
  .then(response => response.json())
  .then((fetchedQuote) => {
    setQuotes(fetchedQuote);
    setSelectedQuoteIndex(random(0, quotes.length - 1));
  });
}, []);

const generateRandomQuote = () => {
  if (!quotes.length) {
    return;
  }
  const randomIndex = random(0, quotes.length - 1);
  setSelectedQuoteIndex(randomIndex); // Updates state with new index
};

const selectedQuote = quotes.length > 0 && Number.isInteger(selectedQuoteIndex)
  ? quotes[selectedQuoteIndex]: null;
  return (
    <>
      <Grid container
        justifyContent= "center"
        alignItems= "center"
        style={{ height: "100vh" }}>
        <Grid item xs={9} md={5} >
          <QuoteMachine 
          selectedQuote={selectedQuote} 
          generateRandomQuote={generateRandomQuote}/>
          
        </Grid>
      </Grid>
    </>
  )
}

export default App
