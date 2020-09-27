import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/Feather'
import { Platform } from 'react-native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px ${Platform.OS === 'android' ? 160 : 40}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'Roboto-Slab-Medium';
  margin: 10px 0 10px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const ForgotPasswordText = styled.Text`
  color: #F4EDE8;
  font-size: 16px;
  font-family: 'Roboto-Slab-Medium';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 14px 0; 
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-color: #232129;
  background: #312e38;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #F4EDE8;
  font-size: 18px;
  font-family: 'Roboto-Slab-Regular';
`;

export const Icon = styled(Icons)`
  margin-right: 16px;
`;