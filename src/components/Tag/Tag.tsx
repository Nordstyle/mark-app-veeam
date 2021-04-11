import React from 'react';
import { ITag } from '../Canvas/Canvas';
import { TagContainer } from './Tag.styled';

interface TagProps extends ITag {
  setTags: React.Dispatch<React.SetStateAction<ITag[]>>;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Tag: React.FC<TagProps> = (props) => {
  const { id, title, x, y, setTags, onClick } = props;

  const onBlurHandler = (event: React.FocusEvent<HTMLDivElement>) => {
    const newTitle = event.currentTarget.textContent!;

    setTags((items) => items.map((item) => (item.id !== id ? item : { ...item, title: newTitle })));
  };

  return (
    <TagContainer x={x} y={y} onBlur={onBlurHandler} onClick={onClick}>
      {title}
    </TagContainer>
  );
};
