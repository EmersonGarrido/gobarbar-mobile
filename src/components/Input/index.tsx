import React,{ useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native'
import { useField } from '@unform/core'

import * as S from './styles';

interface InputProps extends TextInputProps {
  name:  string;
  icon?: string;
}

interface InputValueReference{
  value: string;
}

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => {
  const { defaultValue, fieldName, error, registerField } = useField(name)
  const inputValueRef = useRef<InputValueReference>({value : defaultValue})

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: "value"
    })
  },[registerField, fieldName])

  return (
    <S.Container>
      <S.Icon name={icon} size={20} color="#666360"/>
      <S.TextInput 
      keyboardAppearance="dark"
      onChangeText={(value) => {
        inputValueRef.current.value = value
      } }
      placeholderTextColor="#666360"  {...rest} />
    </S.Container>
  );
}

export default Input;