import React from 'react';
import { DropZone, Text, Wrapper } from './FilePicker.styled';

interface Props {
  onFileSelect: (source: string) => void;
}

export const FilePicker: React.FC<Props> = (props) => {
  const { onFileSelect } = props;

  const dragOverHandler = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const setDataUTI = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => onFileSelect(reader.result as string);
    reader.readAsDataURL(file);
  };

  const dropHandler = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file.type.startsWith('image/')) return;
    setDataUTI(file);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setDataUTI(file);
  };

  return (
    <Wrapper>
      <DropZone onDragOver={dragOverHandler} onDrop={dropHandler}>
        <Text>Click to select image, or drop image here</Text>
        <input onChange={changeHandler} type="file" accept="image/*" />
      </DropZone>
    </Wrapper>
  );
};
