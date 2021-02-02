// import React, { useState } from 'react';
// import data from './Data.json';
// import './App.css';
// import './Button.css';

// const ButtonQuote = () => {
//   const [state, setState] = useState('')
//   // const [isQuotes, setIsQuotes] = useState('')
//   // const [isAuthor, setIsAuthor] = useState('')

// const quotes = () => {
//   let dataQuote = data.quotes
//   let randomDB = Math.floor(Math.random() * dataQuote.length) 
//   // let DB = dataQuote[randomDB]
//   // console.log(data.quotes.length.quote)

//   //  setIsQuotes(DB.quote)
//   //  setIsAuthor(DB.author)
//  }


//   const changestage = () => {
//     let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
//     console.log(randomColor)
//     setState(randomColor)
    
//   }
//   return (
//     <div className="d-flex">
//       <button className="buttons" style={{backgroundColor: state}} onClick={() => {
//       changestage() 
//       quotes()
//     }}>Click</button>

//       </div>
//   )
// }

// export default ButtonQuote;