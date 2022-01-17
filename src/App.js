import React from 'react';
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
    <div>

      <h1>Morse Code Translator</h1>

      <h2>Enter a text phrase to translate to Morse Code</h2>

            <label htmlFor="phrase">Enter Phrase: </label>
            <input id="phrase" type="text" size="100" onChange={enCode} />

      <p>
        Morse Code: <strong>{phrase}</strong>
      </p>

      <hr></hr>

      <h2>Enter a Morse Code phrase to translate to text</h2>

      <table>
        <tr>
          <td>
      <label htmlFor="phrase">Enter Morse Code: </label>
          </td>
          <td>
      <input id="morse_code" type="text" size="100" onChange={deCode} />
          </td>
          <td>
            <img src="Morse Code.png" alt="American Morse Code" width="250" height="300" />
          </td>
        </tr>
      </table>

      <p>
        Text: <strong>{morse_code}</strong>
      </p>

      <hr></hr>

    </div>
  );
};

export default App;
