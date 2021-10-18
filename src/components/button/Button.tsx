import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {StyledButton, StyledTextButton} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button = ({title, ...rest}: ButtonProps) => {
  return (
    <StyledButton {...rest}>
        <StyledTextButton>{title}</StyledTextButton>
    </StyledButton>
  );
}

export default Button;
