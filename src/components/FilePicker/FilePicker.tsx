import React from 'react';
import { DropZone, Text, Wrapper } from './FilePicker.styled';

interface FilePickerProps {
  onFileSelect: React.Dispatch<React.SetStateAction<Nullable<string>>>;
}

export const FilePicker: React.FC<FilePickerProps> = (props) => {
  const { onFileSelect } = props;

  const dragOverHandler = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const setDataURL = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => onFileSelect(reader.result as string);
    reader.readAsDataURL(file);
  };

  const dropHandler = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file.type.startsWith('image/')) return;
    setDataURL(file);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setDataURL(file);
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
