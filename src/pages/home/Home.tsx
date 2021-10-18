import React, {useEffect, useState} from 'react';
import { FlatList } from 'react-native';

import Button from '../../components/button';
import SkillCard from '../../components/skill-card';

import {
  StyledContainer, 
  StyledTitle, 
  StyledInput, 
  StyledSubTitle,
  StyledGreeting,
} from './styles';

interface SkillData {
  id: string;
  name: string;
  date?: Date; //Opcional
}

const Home = () => {

  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  const handleAddSkill = () => {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }
    
    if (data.name.length < 2) return;
    
    setSkills(oldState => [...oldState, data]);
    setNewSkill('');
  }

  const handleRemoveSkill = (id: string) => {
    setSkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
        
    if (currentHour > 0 && currentHour <= 12) {
      setGreeting('Good Morning!');
    } else if (currentHour > 12 && currentHour < 18) {
      setGreeting('Good Afternoon!');
    } else {
      setGreeting('Good Evening!');
    }
  }, [skills]);

  return (
    <StyledContainer>
      <StyledTitle>Welcome, Paulo</StyledTitle>
      <StyledGreeting>{greeting}</StyledGreeting>
      
      <StyledInput
        placeholder='Digite aqui...'
        autoFocus={true}
        onChangeText={setNewSkill}
        value={newSkill}
        maxLength={26}
      />

      <Button
        title='Adicionar' 
        onPress={handleAddSkill}
      />
      
      <StyledSubTitle>My List</StyledSubTitle>
      
      <FlatList 
        data={skills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard skill={item.name} onPress={() => handleRemoveSkill(item.id)}/>
        )}
      />
      
    </StyledContainer>
  );
};

export default Home;
