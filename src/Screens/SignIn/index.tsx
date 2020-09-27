import React,{ useCallback, useRef } from 'react';
import { Image, KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native'
import * as S from './styles';
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'
import Input from '../../components/Input'

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

import logoImg from '../../assets/logo.png'

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const handleSignIn = useCallback((data : object) => {
    console.log(data)
  }, [])

  const navigation = useNavigation()
  return (
    <>
    <KeyboardAvoidingView 
    style={{
      flex: 1
    }}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1
        }}
      >
        <S.Container>
          <Image source={logoImg} />
          <View>
            <S.Title>Faça seu logon</S.Title>
          </View>

          <Form ref={formRef} onSubmit={handleSignIn}>
          <Input name="email" icon="mail" placeholder="E-mail"/>
          <Input name="password" icon="lock" placeholder="Senha"/>

          <Button onPress={() => {
            formRef.current?.submitForm()
          }}> Entrar </Button>
          </Form>
          <S.ForgotPassword>
            <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
          </S.ForgotPassword>
       </S.Container>
      </ScrollView> 
      <S.CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
      <S.Icon name="log-in" size={20} color="#FF9000"/>
      <S.CreateAccountButtonText>Criar uma conta</S.CreateAccountButtonText>
    </S.CreateAccountButton>
    </KeyboardAvoidingView>
    
    </>
  );
}

export default SignIn;