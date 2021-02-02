import React, { useState } from 'react';
// import ButtonQuote from './Buttonquote.js';
import data from './Data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import './Button.css';

  


function App() {
  
 

 const [state, setState] = useState('')
 const [isQuotes, setIsQuotes] = useState('')
 const [isAuthor, setIsAuthor] = useState('')

 const quotes = () => {
   let dataQuote = data.quotes
   let randomDB = Math.floor(Math.random() * dataQuote.length) 
   let DB = dataQuote[randomDB]
   console.log(data.quotes.length.quote)

  setIsQuotes(DB.quote)
  setIsAuthor(DB.author)
 }


  const changestage = () => {
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor)
    setState(randomColor)
    
  }

 
  return (
     <div className="app" style={{backgroundColor: state}}>
       <div className="border-card d-inline-block">
       <h1 style={{color: state}}><FontAwesomeIcon icon={faQuoteLeft} size="2x" style={{color: state}}/>{isQuotes}</h1>
      
       <p>{isAuthor}</p>
       
      
       <a href={`https://twitter.com/intent/tweet?text=${isQuotes}&screen_name=yauriscarrillo1&ref_src=twsrc%5Etfw`} className="twitter-mention-button text-decoration" style={{backgroundColor: state}} data-size="large" data-text="hola bienvenidos" data-lang="es" data-dnt="true" data-show-count="false" rel="noreferrer" target="_blank">Tweet to @yauriscarrillo1</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      <div className="d-flex">
      <button className="buttons" style={{backgroundColor: state}} onClick={() => {
      changestage() 
      quotes()
    }}>Click</button>
      </div>
      </div>      
    </div>
  )
}

export default App;
