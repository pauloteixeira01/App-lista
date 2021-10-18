import styled from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity.attrs({
  activeOpacity: Number(0.3),
})`
  align-items: center;
  background-color: #A370F7;
  padding: 5%;
  border-radius: 15px;
  margin-top: 5%;
`;

export const StyledTextButton = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`;