

import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row, Top, Footer } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');


  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('')
  };

  const handleAddNumber = (number) => {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  };

  const handleSumNumbers = () => {
    if(firstNumber === '0') {
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('+')
    } else {
        const sum = Number(firstNumber) + Number(currentNumber)
        setCurrentNumber(String(sum))
        setOperation('')
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0') {
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('-')
    } else {
        const minus = Number(firstNumber) - Number(currentNumber)
        setCurrentNumber(String(minus))
        setOperation('')
    }
  }

  const handleMultiplyNumbers = () => {
    if(firstNumber === '0') {
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('*')
    } else {
        const multi = Number(firstNumber) * Number(currentNumber)
        setCurrentNumber(String(multi))
        setOperation('')
    }
  }

  const handleDivideNumbers = () => {
    if(firstNumber === '0') {
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('/')
    } else {
        const divide = Number(firstNumber) / Number(currentNumber)
        setCurrentNumber(String(divide))
        setOperation('')
    }
  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
        switch(operation) {
          case '+': 
            handleSumNumbers()
            break;
          case '-':
            handleMinusNumbers()
            break
          case '*':
            handleMultiplyNumbers()
            break;
          case '/':
            handleDivideNumbers()
            break;
          default:
            break
        }
    } 
  }


  return (
    <Container>
      <Top>
        <h1>Web Calculator</h1>
        <p>A project created for study purposes using React</p>
      </Top>
      <Content>
        <Row>
          <Input value={currentNumber}/>
          <Button label="c" onClick={handleOnClear}/>
        </Row>
        <Row>
          <Button label="×" onClick={handleMultiplyNumbers}/>
          <Button label="÷" onClick={handleDivideNumbers}/>
          <Button label="+" onClick={handleSumNumbers}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
      <Footer>
        <a href="https://github.com/mwndl/web-calculator" target="_blank">Github</a>
      </Footer>
    </Container>
  );
}

export default App;
