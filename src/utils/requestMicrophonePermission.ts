import {PermissionsAndroid, Alert} from 'react-native';

export const requestMicrophonePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: 'Microphone Permission',
        message:
          'This app needs access to your microphone to recognize speech.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Microphone permission granted');
    } else {
      Alert.alert(
        'Permission denied',
        'Microphone access is required for speech recognition.',
      );
    }
  } catch (err) {
    console.warn(err);
  }
};
