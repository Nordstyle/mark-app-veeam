import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 48px;
`;

export const DropZone = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px dashed gray;
  border-radius: 40px;
  height: 100%;

  & input {
    display: none;
  }
`;

export const Text = styled.p`
  color: gray;
  font-size: 26px;
`;
