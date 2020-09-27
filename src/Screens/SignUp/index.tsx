import React,{useRef, useCallback} from 'react';
import { Image, KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native'
import * as S from './styles';
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import logoImg from '../../assets/logo.png'

const SignUp: React.FC = () => {
  const navigation = useNavigation()

  const formRef = useRef<FormHandles>(null)
  const handleSignUp = useCallback((data : object) => {
    console.log(data)
  }, [])

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
        }}>
    <S.Container>
      <Image source={logoImg} />
      <View>
            <S.Title>Criar sua conta</S.Title>
      </View>
      <Form ref={formRef} onSubmit={handleSignUp}>
      <Input name="name" icon="user" placeholder="Nome"/>
      <Input name="email" icon="mail" placeholder="E-mail"/>
      <Input name="password" icon="lock" placeholder="Senha"/>

      <Button onPress={() => {
        formRef.current?.submitForm()
      }}> Cadastrar </Button>
      </Form>
    </S.Container>
    </ScrollView>
    </KeyboardAvoidingView>
    <S.CreateAccountButton onPress={() => navigation.navigate("SignIn")}>
      <S.Icon name="arrow-left" size={20} color="#F4EDE8"/>
      <S.CreateAccountButtonText>Voltar para o login</S.CreateAccountButtonText>
    </S.CreateAccountButton>
    </>
  );
}

export default SignUp;