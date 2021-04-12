import styled from 'styled-components';

interface TagWrapperProps {
  x: number;
  y: number;
}

interface TagBackdropProps {
  shouldEdit: boolean;
}

export const TagWrapper = styled.div<TagWrapperProps>`
  position: absolute;
  left: ${({ x }) => x}%;
  top: ${({ y }) => y}%;
  z-index: 1;
`;

export const TagText = styled.div.attrs({
  contentEditable: true,
  suppressContentEditableWarning: true,
})`
  max-width: 150px;
  font-size: 12px;
  padding: 2px 4px;
  background: #ffffff;
  border: 1px solid #3178c6;
  border-radius: 2px;
`;

export const TagBackdrop = styled.div<TagBackdropProps>`
  display: ${({ shouldEdit }) => (shouldEdit ? 'block' : 'none')};
  z-index: -1;
  position: fixed;
  top: 0%;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
`;
