import {Alert, PermissionsAndroid, Platform} from 'react-native';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';

export const requestMicrophonePermission = async () => {
  try {
    if (Platform.OS === 'android') {
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
    } else if (Platform.OS === 'ios') {
      const result = await request(PERMISSIONS.IOS.MICROPHONE);
      if (result === RESULTS.GRANTED) {
        console.log('Microphone permission granted');
      } else {
        Alert.alert(
          'Permission denied',
          'Microphone access is required for speech recognition.',
        );
      }
    }
  } catch (err) {
    console.warn(err);
  }
};
