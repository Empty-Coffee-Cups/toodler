// System
import React from 'react';
import { SafeAreaView } from 'react-native';

// Stylesheet
import { container, main } from './src/styles';

// Components
import AppContainer from './src/routes';
import Boards from './src/views/Boards';

function App() {
  return (
    <SafeAreaView style={main}>
      <AppContainer />
    </SafeAreaView>
  );

  // return (
  //   <SafeAreaView style={main}>
  //     <Boards />
  //   </SafeAreaView>
  // );
}

export default App;
