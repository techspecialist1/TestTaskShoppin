import 'react-native-gesture-handler';

import React from 'react';
import RootNavigation from './src/navigation/RootNavigator';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={'#1f212570'}
      />
      <RootNavigation />
    </>
  );
};

export default App;
