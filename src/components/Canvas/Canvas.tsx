import React, { useCallback, useRef, useState } from 'react';
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
  const isEditing = useRef<boolean>(false);

  const onClickHandler = useCallback((event: React.MouseEvent<HTMLImageElement>) => {
    if (isEditing.current) return;

    const { top, left, width, height } = event.currentTarget.getBoundingClientRect();
    const { pageX, pageY } = event;
    const x = ((pageX - left) / width) * 100;
    const y = ((pageY - top) / height) * 100;

    setTags((item) => [
      ...item,
      {
        id: uuid(),
        title: 'New tooltip',
        x,
        y,
      },
    ]);
  }, []);

  const onClickTagHandler = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (!isEditing.current) {
      isEditing.current = true;
      window.addEventListener('click', () => (isEditing.current = false), { once: true });
    }
  }, []);

  return (
    <CanvasContainer>
      <CanvasClose onClick={() => setImage(null)}>&times;</CanvasClose>
      <CanvasImageWrapper>
        <CanvasImage src={image} alt="CanvasImage" onClick={onClickHandler} />
        {tags.map((item) => (
          <Tag
            key={item.id}
            id={item.id}
            title={item.title}
            x={item.x}
            y={item.y}
            setTags={setTags}
            onClick={onClickTagHandler}
          />
        ))}
      </CanvasImageWrapper>
    </CanvasContainer>
  );
};
