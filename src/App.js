// import { Button } from './components/Button';
import Input from './components/input';
import Button from './components/button';
import { Container, Content, ButtonBox } from './styles';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState(null)
  const [operation, setOperation] = useState(null)
  const [operationPending, setOperationPending] = useState(false)


  const handleClearAll = () => {
    setCurrentNumber('0')
    setFirstNumber(null)
    setOperation(null)
  }

  const handleErase = () =>{
    if(currentNumber !== '0'){
      if(currentNumber.length > 1){
        setCurrentNumber(slice => currentNumber.slice(0, -1))
      }
      else{
        setCurrentNumber('0')
      }
      setFirstNumber(null)
    }
  }

  const handleAddNumber = (number) =>{
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  
  const handleSum = () =>{
    if(!operationPending){
      if (firstNumber === null) {
        setFirstNumber(currentNumber);
        setCurrentNumber('0');
        setOperation('sum'); 
        setOperationPending(true)
      }
    }
    else{
      alert("Finalize a Operação Atual")
    }
  }

  const handleSubtraction = () =>{
    if(!operationPending){
      if (firstNumber === null) {
        setFirstNumber(currentNumber);
        setCurrentNumber('0');
        setOperation('sub'); 
        setOperationPending(true)
      }
    }else{
      alert("Finalize a Operação Atual")
    }
  }

  const handleMultiplication = () =>{
    if(!operationPending){
      if (firstNumber === null) {
        setFirstNumber(currentNumber);
        setCurrentNumber('0');
        setOperation('multi'); 
        setOperationPending(true)
      }
    }else{
      alert("Finalize a Operação Atual")
    }
  }

  const handleDivision = () =>{
    if(!operationPending){
      if (firstNumber === null) {
        setFirstNumber(currentNumber);
        setCurrentNumber('0');
        setOperation('divi'); 
        setOperationPending(true)
      }
    }else{
      alert("Finalize a Operação Atual")
    }  
  }

  const handlePercentage = () =>{
    if(!operationPending){
      if (firstNumber === null) {
        setFirstNumber(currentNumber);
        setCurrentNumber('0');
        setOperation('porce'); 
        setOperationPending(true)
      }
    }else{
      alert("Finalize a Operação Atual")
    }
  }


  const handleEqual = () => {
    if(operation && firstNumber !== null){
      let result
      switch(operation){
        case 'sum':
          result = Number(firstNumber) + Number(currentNumber);
          break
        case 'sub':
          result = Number(firstNumber) - Number(currentNumber);
          break
        case 'multi':
          result = Number(firstNumber) * Number(currentNumber);
          break
        case 'divi':
          result = Number(firstNumber) / Number(currentNumber);
          break
        case 'porce':
          result = (Number(firstNumber) * Number(currentNumber)) / 100;
          break
        default:
          return
      }
      setCurrentNumber(String(result));
      setFirstNumber(null);
      setOperation(null);
      setOperationPending(false);
    }
  };


  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <ButtonBox>
          <Button label="AC" className="color" onClick={() => handleClearAll()}/>
          <Button label="%" className="color" onClick={() => handlePercentage()}/>
          <Button icon={faDeleteLeft} className="color" onClick={() => handleErase()}/>
          <Button label="/" className="color" onClick={() => handleDivision()}/>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="*" className="color" onClick={() => handleMultiplication()}/>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" className="color" onClick={() => handleSubtraction()}/>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" className="color zero" onClick={() => handleSum()}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="=" onClick={handleEqual}/>
        </ButtonBox> 
      </Content>
    </Container>
  );
}

export default App;
