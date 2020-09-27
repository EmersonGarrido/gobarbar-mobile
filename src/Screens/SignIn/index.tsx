import React from 'react';
import { Image, KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native'
import * as S from './styles';

import Button from '../../components/Button'
import Input from '../../components/Input'

import logoImg from '../../assets/logo.png'

const SignIn: React.FC = () => {
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

          <Input name="email" icon="mail" placeholder="E-mail"/>
          <Input name="password" icon="lock" placeholder="Senha"/>

          <Button onPress={() => {}}> Entrar </Button>
          <S.ForgotPassword>
            <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
          </S.ForgotPassword>
       </S.Container>
      </ScrollView> 
      <S.CreateAccountButton>
      <S.Icon name="log-in" size={20} color="#FF9000"/>
      <S.CreateAccountButtonText>Criar uma conta</S.CreateAccountButtonText>
    </S.CreateAccountButton>
    </KeyboardAvoidingView>
    
    </>
  );
}

export default SignIn;