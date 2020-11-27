// System
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Container } from 'native-base';

// Stylesheet
import { container, main } from './src/styles';

// Components
import AppContainer from './src/routes';
import Boards from './src/views/Boards';

function App() {
  return (
    <Container>
      <AppContainer />
    </Container>
  );

  // return (
  //   <SafeAreaView style={main}>
  //     <Boards />
  //   </SafeAreaView>
  // );
}

export default App;
