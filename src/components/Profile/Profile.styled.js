import { styled } from 'styled-components';

export const SocialContainer = styled.div`
  background-color: #cccc33;
  &:hover {
    background-color: #ccff99;
  }
  width: 450px;
  margin: auto;
`;
export const Photo = styled.img`
  display: flex;
  margin: auto;
  width: 150px;
  &:hover {
    width: 170px;
  }
`;

export const HeadText = styled.p`
  font-size: 35px;
  text-align: center;
  font-weight: bold;
`;

export const TagText = styled.p`
  font-size: 30px;
  text-align: center;
  color: teal;
  font-style: italic;
`;

export const LocationText = styled.p`
  font-size: 23px;
  text-align: center;
  font-weight: bold;
`;

export const UlText = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 10px;
  padding-left: 0;
  justify-content: center;
`;

export const LiText = styled.li`
  list-style-type: none;
  display: flex;
  border: 1px solid black;
  border-radius: 10px;
`;
export const TextSpan = styled.span`
  font-size: 15px;
  padding: 15px;
`;
