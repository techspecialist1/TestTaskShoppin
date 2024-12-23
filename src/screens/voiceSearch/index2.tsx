import {
  View,
  Text,
  StatusBar,
  NativeModules,
  Button,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';

import {styles} from './style';
import {_, COLORS} from '../../theme';
import {requestMicrophonePermission} from '../../utils';
import {useNavigation} from '@react-navigation/native';

const VoiceSearch = () => {
  const {ReactOneCustomMethod} = NativeModules;
  const navigation = useNavigation<any>();

  const [text, setText] = useState('');

  const handleStartListening = async () => {
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    );
    if (!hasPermission) {
      await requestMicrophonePermission();
    }
    try {
      const transcription = await ReactOneCustomMethod.startListening();
      setText(transcription);
      navigation.navigate('Search', {transcript: transcription});
    } catch (err: any) {
      setText(err.message || 'An error occurred.');
    }
  };

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={COLORS.secondry}
      />
      <View style={styles.container}>
        <Text style={_['h2']}>
          {text || 'Press the button to start speaking'}
        </Text>
        <Button title="Start Listening" onPress={handleStartListening} />
      </View>
    </>
  );
};

export default VoiceSearch;
