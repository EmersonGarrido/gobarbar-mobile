import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/Feather'

export const Container = styled.View`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    background: #232129;
    border-radius: 10px;
    margin-bottom: 8px;
    justify-content: center;
    flex-direction: row;
    align-items: center;
`;

export const TextInput = styled.TextInput`
  color: #FFF;
  flex: 1;
  font-size: 16px;
  font-family: 'Roboto-Slab-Medium';
  `;
export const Icon = styled(Icons)`
  margin-right: 10px;
`;