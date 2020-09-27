import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  background: #FF9000;
  width: 100%;
  height: 55px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #312e38;
  font-family: 'Roboto-Slab-Medium';
`;