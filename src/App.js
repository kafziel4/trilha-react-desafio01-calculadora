import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${num}`);
  };

  const handleAddDot = () => {
    setCurrentNumber((prev) => (prev.includes('.') ? prev : `${prev}.`));
  };

  const handleSumNumbers = () => {
    if (firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const result = Number(firstNumber) + Number(currentNumber);
      setFirstNumber('');
      setCurrentNumber(String(result));
      setOperation('');
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const result = Number(firstNumber) - Number(currentNumber);
      setFirstNumber('');
      setCurrentNumber(String(result));
      setOperation('');
    }
  };

  const handleMultiplyNumbers = () => {
    if (firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const result = Number(firstNumber) * Number(currentNumber);
      setFirstNumber('');
      setCurrentNumber(String(result));
      setOperation('');
    }
  };

  const handleDivideNumbers = () => {
    if (firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const result = Number(firstNumber) / Number(currentNumber);
      setFirstNumber('');
      setCurrentNumber(String(result));
      setOperation('');
    }
  };

  const handleEquals = () => {
    if (operation !== '') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="C" onClick={handleOnClear} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="/" onClick={handleDivideNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="x" onClick={handleMultiplyNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="." onClick={handleAddDot} />
          <Button label="=" onClick={handleEquals} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
