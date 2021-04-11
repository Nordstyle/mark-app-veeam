import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from './components/Button/Button';
import { Canvas } from './components/Canvas/Canvas';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const App = () => {
  const [image, setImage] = useState<Nullable<string>>(null);

  return <Container>{image ? <Canvas image={image} /> : <Button setImage={setImage} />}</Container>;
};
