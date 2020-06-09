import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  background: #232129;
  border-radius: 10px;
  padding: 0 16px;
  margin-bottom: 8px;
  border: 2px;
  border-color: #232129;

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
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
