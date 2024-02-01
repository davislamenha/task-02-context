import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 1rem 0;
  background-color: ${(props) => props.theme.primary_dark};
  color: ${(props) => props.theme.ligth};
  text-align: center;
`;
