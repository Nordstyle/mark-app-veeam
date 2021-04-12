import React, { useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Tag } from '../Tag/Tag';
import { CanvasContainer, CanvasImage, CanvasImageWrapper, CanvasClose } from './Canvas.styled';

interface CanvasProps {
  image: string;
  setImage: React.Dispatch<React.SetStateAction<Nullable<string>>>;
}

export interface ITag {
  id: string;
  title: string;
  x: number;
  y: number;
}

export const Canvas: React.FC<CanvasProps> = (props) => {
  const { image, setImage } = props;
  const [tags, setTags] = useState<ITag[]>([]);

  const createTag = (e: React.MouseEvent<HTMLElement>) => {
    const { top, left, width, height } = e.currentTarget.getBoundingClientRect();
    const { pageX, pageY } = e;
    const x = ((pageX - left) / width) * 100;
    const y = ((pageY - top) / height) * 100;
    const newTip: ITag = {
      id: uuid(),
      title: 'Enter Tip',
      x,
      y,
    };
    setTags((state) => [...state, newTip]);
  };

  const changeTag = useCallback((id: string, label: string) => {
    setTags((state) => state.map((pin) => (pin.id === id ? { ...pin, label } : pin)));
  }, []);

  return (
    <CanvasContainer>
      <CanvasClose onClick={() => setImage(null)}>&times;</CanvasClose>
      <CanvasImageWrapper onClick={createTag}>
        <CanvasImage src={image} alt="CanvasImage" />
        {tags.map((item) => (
          <Tag key={item.id} id={item.id} title={item.title} x={item.x} y={item.y} changeTag={changeTag} />
        ))}
      </CanvasImageWrapper>
    </CanvasContainer>
  );
};
