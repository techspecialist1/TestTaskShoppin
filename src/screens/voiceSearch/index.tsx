import {View, Text, StatusBar} from 'react-native';
import React from 'react';

import {styles} from './style';
import {COLORS} from '../../theme';

const VoiceSearch = () => {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={COLORS.secondry}
      />
      <View style={styles.container}>
        <Text>voiceSearch</Text>
      </View>
    </>
  );
};

export default VoiceSearch;
