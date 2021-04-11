import React from 'react';
import { ButtonLabel, ButtonContainer } from './Button.styled';

interface ButtonProps {
  setImage: React.Dispatch<React.SetStateAction<Nullable<string>>>;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { setImage } = props;

  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files![0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setImage(fileReader.result as string);
    };
  };

  return (
    <ButtonContainer>
      <ButtonLabel>
        <input type="file" accept="image/*" onChange={uploadImage} />
        Upload image
      </ButtonLabel>
    </ButtonContainer>
  );
};
