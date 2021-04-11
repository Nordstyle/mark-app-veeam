import styled from 'styled-components';

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ButtonLabel = styled.label`
  padding: 10px 18px;
  color: #ffffff;
  background-color: #3178c6;
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  & input[type='file'] {
    display: none;
  }
`;
