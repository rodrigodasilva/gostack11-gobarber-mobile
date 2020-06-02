import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #232129;
  border-radius: 10px;
  padding: 0 16px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: #fff;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
