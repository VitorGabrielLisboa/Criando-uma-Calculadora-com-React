import { InputContainer } from './styles';
const Input = ({value, label}) => {
    return (
      <InputContainer>
        <input disabled value={value}/>
      </InputContainer>
    );
  }
  
  export default Input;
  