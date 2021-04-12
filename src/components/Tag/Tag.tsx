import React, { useState } from 'react';
import { TagWrapper, TagText, TagBackdrop } from './Tag.styled';
import { ITag } from '../Canvas/Canvas';

interface TagProps extends ITag {
  changeTag: (id: string, label: string) => void;
}

export const Tag: React.FC<TagProps> = (props) => {
  const { x, y, title, id, changeTag } = props;
  const [shouldEdit, setEdit] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) setEdit(false);
  };

  const handleEdit = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setEdit(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    changeTag(id, e.currentTarget.textContent!);
  };

  return (
    <TagWrapper x={x} y={y}>
      <TagText onBlur={handleBlur} onClick={handleEdit}>
        {title}
      </TagText>
      <TagBackdrop onClick={handleClick} shouldEdit={shouldEdit} />
    </TagWrapper>
  );
};
