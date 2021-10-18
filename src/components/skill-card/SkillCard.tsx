import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import { StyledButtonSkill, StyledTextSkill } from './styles';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

const SkillCard = ({skill, ...rest} : SkillCardProps) => {
  return (
    <StyledButtonSkill key={skill} {...rest}>
      <StyledTextSkill>{skill}</StyledTextSkill>
    </StyledButtonSkill>
  );
}

export default SkillCard;