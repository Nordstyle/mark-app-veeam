import styled from 'styled-components';

export const CanvasContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const CanvasImageWrapper = styled.span`
  max-width: 100%;
  max-height: 100%;
  position: relative;
`;

export const CanvasImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const CanvasClose = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  font-size: 50px;
  font-weight: 700;
  color: #3178c6;
  padding: 10px 20px 10px;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  z-index: 1;
  border-radius: 0 0 0 50%;
  transition: 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;
