import styled from '@emotion/styled';

export const StatsList = styled.ul`
  list-style: none;
`;

export const StatsItem = styled.li`
  font-family: Tahoma;
  font-size: 20px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
