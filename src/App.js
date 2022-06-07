import React, {useState} from "react"

function App() {
  const [firstNumber, setFirstNumber] = useState(null)
  const [secondNumber, setSecondNumber] = useState(null)
  const [operator, setOperator] = useState(null)

  function addDigit(digit) {
    if (firstNumber === null) {setFirstNumber(digit)}
    else if (secondNumber === null && operator === null) {
      setFirstNumber(prevState => parseInt(prevState + (digit).toString()))
    }
    else if (secondNumber === null && operator !== null) {
      setSecondNumber(digit)
    }
    else {
      setSecondNumber(prevState => parseInt(prevState + (digit).toString()))
    }
    console.log(firstNumber,secondNumber)
  }
  

  function resetAll() {
    setFirstNumber(null)
    setSecondNumber(null)
    setOperator(null)
  }

  function resetExceptFirstNumber() {
    setSecondNumber(null)
    setOperator(null)
  }


  function numberSquared() {
    if (firstNumber !== null && secondNumber === null && operator === null)
      {setFirstNumber(prevState => prevState * prevState)}
  }

  function numberSquareRoot() {
    if (firstNumber > 0 && secondNumber === null && operator === null) 
      {setFirstNumber(prevState => Math.sqrt(prevState))}
  }

  function backspace() {
    if (secondNumber !== null) {
      if (secondNumber.toString().length === 1) 
        {setSecondNumber(0)}
      else {
        setSecondNumber(prevState => parseInt((prevState).toString().slice(0 , -1)))
    }}
    else if (firstNumber !== null) {
      if (firstNumber.toString().length === 1) 
        {setFirstNumber(0)}
      else {
        setFirstNumber(prevState => parseInt((prevState).toString().slice(0 , -1)))
    }}
  }


  function resolveEquation() {
          switch (operator) {
            case "X": 
              setFirstNumber(firstNumber * secondNumber)
              break
            case "-":
              setFirstNumber(firstNumber - secondNumber)
              break
            case "+": 
              setFirstNumber(firstNumber + secondNumber)
              break
            case "/":
              setFirstNumber(firstNumber / secondNumber)
              break
          }
          resetExceptFirstNumber()
  }

  function addOperator(operatorSelected) {
    if (firstNumber !== null) {
      if (operator === null) {setOperator(operatorSelected)}
      else {
        if (secondNumber !== null) {
          resolveEquation()
          }
      }
    }
  }


  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <p>{
          secondNumber !== null ? secondNumber : 
          operator !== null ? operator :
          firstNumber !== null ? firstNumber : "--"
          }</p>
        </div>
        <div className="calculator-button" onClick={() => numberSquared()}><i>x<sup>2</sup></i></div>
        <div className="calculator-button" onClick={() => numberSquareRoot()}>sqrt(<i>x</i>)</div>
        <div className="calculator-button" onClick={() => resetAll()}>C</div>
        <div className="calculator-button" onClick={() => backspace()}>←</div>

        <div className="calculator-button" onClick={() => addDigit(7)}>7</div>
        <div className="calculator-button" onClick={() => addDigit(8)}>8</div>
        <div className="calculator-button" onClick={() => addDigit(9)}>9</div>
        <div className="calculator-button" onClick={() => addOperator("X")}>X</div>

        <div className="calculator-button" onClick={() => addDigit(4)}>4</div>
        <div className="calculator-button" onClick={() => addDigit(5)}>5</div>
        <div className="calculator-button" onClick={() => addDigit(6)}>6</div>
        <div className="calculator-button" onClick={() => addOperator("-")}>-</div>

        <div className="calculator-button" onClick={() => addDigit(1)}>1</div>
        <div className="calculator-button" onClick={() => addDigit(2)}>2</div>
        <div className="calculator-button" onClick={() => addDigit(3)}>3</div>
        <div className="calculator-button" onClick={() => addOperator("+")}>+</div>
        <div className="calculator-button" onClick={() => addDigit(0)}>0</div>
        <div className="calculator-button">.</div>
        <div className="calculator-button" onClick={() => addOperator("/")}>/</div>
        <div className="calculator-button" onClick={() => resolveEquation()}>=</div>
      </div>
    </div>
  );
}

export default App;
