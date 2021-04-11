import styled from 'styled-components';

export const CanvasContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CanvasImageWrapper = styled.span`
  position: relative;
`;

export const CanvasImage = styled.img`
  max-width: 100vw;
  max-height: 100vh;
  user-select: none;
`;
