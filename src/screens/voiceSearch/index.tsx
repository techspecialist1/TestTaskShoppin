import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  PermissionsAndroid,
  NativeModules,
  Animated,
  Easing,
} from 'react-native';
import {styles} from './style';
import {_, COLORS} from '../../theme';
import {
  ArrowLeftIcon,
  LanguageIcon,
  MusicLogo,
  VoiceSearchIcon,
} from '../../assets/icons';
import {moderateScale} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {requestMicrophonePermission} from '../../utils';

const Header = ({stopListening}: {stopListening: () => void}) => {
  const navigation = useNavigation<any>();

  const goBackHandler = async () => {
    stopListening();
    navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={goBackHandler}
        style={[
          styles.iconButton,
          _['flex-center'],
          {paddingLeft: moderateScale(8)},
        ]}>
        <ArrowLeftIcon
          fill={COLORS.grey}
          height={moderateScale(25)}
          width={moderateScale(25)}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.iconButton, _['flex-center']]}>
        <LanguageIcon
          fill={COLORS.grey}
          height={moderateScale(25)}
          width={moderateScale(25)}
        />
      </TouchableOpacity>
    </View>
  );
};

const DotIndicator = () => {
  const dot1 = new Animated.Value(0);
  const dot2 = new Animated.Value(0);
  const dot3 = new Animated.Value(0);
  const dot4 = new Animated.Value(0);
  const animateDots = (dot: any, delay: number) => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(dot, {
          toValue: 1,
          duration: 700,
          easing: Easing.sin,
          useNativeDriver: true,
        }),
        Animated.timing(dot, {
          toValue: 0,
          duration: 700,
          easing: Easing.sin,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };
  useEffect(() => {
    animateDots(dot1, 0);
    animateDots(dot2, 200);
    animateDots(dot3, 400);
    animateDots(dot4, 600);
  }, []);
  const getDotStyle = (dot: any, color: string) => ({
    opacity: dot,
    backgroundColor: color,
    width: 12,
    height: 12,
    borderRadius: 6,
    margin: 5,
    transform: [
      {
        translateY: dot.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [10, 0, -10],
        }),
      },
    ],
  });
  return (
    <View style={styles.dotContainer}>
      <Animated.View style={getDotStyle(dot1, '#FF6347')} />
      <Animated.View style={getDotStyle(dot2, '#32CD32')} />
      <Animated.View style={getDotStyle(dot3, '#FFD700')} />
      <Animated.View style={getDotStyle(dot4, '#9370DB')} />
    </View>
  );
};

const SearchButton = () => {
  return (
    <TouchableOpacity style={styles.searchButton}>
      <MusicLogo
        fill={COLORS.grey}
        height={moderateScale(15)}
        width={moderateScale(15)}
      />
      <Text style={styles.searchText}>Search a song</Text>
    </TouchableOpacity>
  );
};

const VoiceSearch = () => {
  const {ReactOneCustomMethod, ObjectDetection} = NativeModules;
  const navigation = useNavigation<any>();

  const [text, setText] = useState('');
  const [listening, setListening] = useState<boolean>(true);

  const handleStartListening = async () => {
    setListening(true);
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    );
    if (!hasPermission) {
      await requestMicrophonePermission();
    }
    try {
      const transcription = await ReactOneCustomMethod.startListening();
      const demo = await ReactOneCustomMethod.getPhoneID();
      console.log('====================================');
      console.log(demo);
      console.log('====================================');

      setListening(false);
      setText(transcription);
      navigation.navigate('Search', {transcript: transcription});
    } catch (err: any) {
      setListening(false);
      console.log('====================================');
      console.log(err.message);
      console.log('====================================');
      setText(err.message || 'An error occurred.');
    }
  };

  const handleStopListening = async () => {
    try {
      await ReactOneCustomMethod.stopListening(); // Add this stop function in your NativeModules
      setListening(false);
    } catch (err) {
      console.error('Error stopping listening:', err);
    }
  };

  useEffect(() => {
    handleStartListening();
    return () => {
      handleStopListening();
    };
  }, []);

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={COLORS.primary}
      />
      <View style={styles.container}>
        <Header stopListening={handleStopListening} />
        <View style={styles.mainContent}>
          <Text style={_['body']}>
            {listening ? 'Speak Now' : 'Press button to voice search'}
          </Text>
          {listening ? (
            <DotIndicator />
          ) : (
            <TouchableOpacity
              onPress={handleStartListening}
              activeOpacity={0.6}
              style={[_['flex-center'], styles.listningButton]}>
              <VoiceSearchIcon
                fill={COLORS.white}
                height={moderateScale(35)}
                width={moderateScale(35)}
              />
            </TouchableOpacity>
          )}

          <Text style={_['h3']}>{!listening && text}</Text>

          <SearchButton />
        </View>
      </View>
    </>
  );
};

export default VoiceSearch;
