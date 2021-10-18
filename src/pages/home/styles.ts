import styled from 'styled-components/native';

export const StyledContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #121015;
  padding: 10% 5%;
`;

export const StyledTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const StyledInput = styled.TextInput.attrs({  
  placeholderTextColor: '#555', 
})`
  background-color: #1F1e25;
  color: #fff;
  font-size: 20px;
  padding: 5%;
  border-radius: 15px;
  border: 2px solid gray;
  margin-top: 5%;
`;

export const StyledSubTitle = styled(StyledTitle)`
  margin-top: 10%;
`;

export const StyledGreeting = styled.Text`
  font-size: 16px;
  margin-top: 1%;
  color: #fff;
`;

export const StyledStatusBar = styled.StatusBar.attrs({barStyle: 'light-content'})``;