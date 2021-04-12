import React, { useState } from 'react';
import styled from 'styled-components';
import { Canvas } from './components/Canvas/Canvas';
import { FilePicker } from './components/FilePicker/FilePicker';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const App = () => {
  const [image, setImage] = useState<Nullable<string>>(null);

  return (
    <Container>
      {image ? <Canvas image={image} setImage={setImage} /> : <FilePicker onFileSelect={setImage} />}
    </Container>
  );
};
