import PropTypes from 'prop-types';
import {
  Label,
  Li,
  Percentage,
  Section,
  SectionName,
  StatList,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <SectionName>{title}</SectionName>}

      <StatList>
        {stats.map(stat => {
          return (
            <Li key={stat.id}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage} %</Percentage>
            </Li>
          );
        })}
      </StatList>
    </Section>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
