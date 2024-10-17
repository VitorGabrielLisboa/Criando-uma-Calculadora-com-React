import { ButtonContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Button = ({label, onClick, className, icon}) => {
    return (
      <ButtonContainer onClick={onClick} className={className}>
        {icon && <FontAwesomeIcon icon={icon}/>}
        {label}
      </ButtonContainer>
    );
  }

  
  export default Button;
  