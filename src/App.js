import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import './App.css';


const morseCodes = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-", 
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  " ": " / "
}

const text = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V", 
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "/": " ",
  " ": ""
}

const App = () => {

  function enCode (val) {
    // this is where we need to translate the text phrase to Morse Code
    console.warn(val.target.value); //output the phrase to the console
    
    // create an array from the phrase string
    const temp = val.target.value.trim().split('');

    // Loop through the array and replace each value with the Morse Code.
    // If a non-alphanumeric is found, set ? as the value
    for (const i in temp) {
      temp[i] = morseCodes[temp[i].toUpperCase()] || '?';
      temp[i] = temp[i] + "|";
    }

    // Write the Morse Code to the webpage
    setPhrase(temp);

    // Log the Morse Code to the console
    console.log(temp);

  };

  function deCode (val) {
    // this is where we need to translate from Morse Code to text
    console.warn(val.target.value); //output the phrase to the console
    
    // create an array from the phrase string
    const temp = val.target.value.split(" ");
    var strDecodedMessage = "";

    // Loop through the array and find the code up to a space which indicates a new entry.
    for (const i in temp) {
      console.warn(temp[i]);
      strDecodedMessage = strDecodedMessage + text[temp[i]] || '?';
      strDecodedMessage = strDecodedMessage + " ";
      }

    // Write the Morse Code to the webpage
    setMorseCode(strDecodedMessage);

    // Log the Morse Code to the console
    console.log(strDecodedMessage);

  };


  // Create a React state for the Morse Code string so that it is
  // updated when the user types into the text field
  const [phrase, setPhrase] = React.useState('');
  const [morse_code, setMorseCode] = React.useState('');


  // Return the HTML for the webpage
  return (
    <div className="App">
      <header className="App-header">

        <h1>Morse Code Translator</h1>

        <Card bg="bg_Primary" style={{ width: '18rem', backgroundColor:'blue'}}>
          <Card.Body>
            <Card.Title>Enter text phrase to translate</Card.Title>
            <input id="morse_code" type="text" onChange={enCode} />
            <Card.Text>
              Morse Code: <strong>{phrase}</strong>    
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', backgroundColor:'red' }}>
          <Card.Body>
            <Card.Title>Enter Morse Code to translate</Card.Title>
            <input id="morse_code" type="text" onChange={deCode} />
            <Card.Text>
              Text: <strong>{morse_code}</strong>    
            </Card.Text>
          </Card.Body>
        </Card>

      </header>

    </div>
  );
};

export default App;
