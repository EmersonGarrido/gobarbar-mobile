import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler'

import * as S from './styles';

interface  ButtonsProps extends RectButtonProperties {
  children:  string;
}

const Button: React.FC<ButtonsProps> = ({children, ...rest}) => {
  return (
    <S.Container {...rest}>
      <S.Title>
        {children}
      </S.Title>
    </S.Container>
  );
}

export default Button;