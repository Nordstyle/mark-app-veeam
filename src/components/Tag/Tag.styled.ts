import styled from 'styled-components';

interface TagContainerProps {
  x: number;
  y: number;
}

export const TagContainer = styled.div.attrs({
  contentEditable: true,
  suppressContentEditableWarning: true,
})<TagContainerProps>`
  position: absolute;
  max-width: 150px;
  padding: 2px 4px;
  left: ${({ x }) => x}%;
  top: ${({ y }) => y}%;
  font-size: 12px;
  background: #ffffff;
  border: 1px solid #3178c6;
  border-radius: 2px;
`;
