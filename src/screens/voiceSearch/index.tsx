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

const Header = () => {
  const navigation = useNavigation<any>();
  const {ReactOneCustomMethod} = NativeModules;

  const goBackHandler = async () => {
    navigation.goBack();
    try {
      await ReactOneCustomMethod.startListening();
    } catch (err: any) {
      console.log('====================================');
      console.log((err.message, 'An error occurred'));
      console.log('====================================');
    }
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
  const {ReactOneCustomMethod} = NativeModules;
  const navigation = useNavigation<any>();

  const [text, setText] = useState('');
  const [listning, setListning] = useState<boolean>(true);

  const handleStartListening = async () => {
    setListning(true);
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    );
    if (!hasPermission) {
      await requestMicrophonePermission();
    }
    try {
      const transcription = await ReactOneCustomMethod.startListening();
      setListning(false);
      setText(transcription);
      navigation.navigate('Search', {transcript: transcription});
    } catch (err: any) {
      setListning(false);
      setText(err.message || 'An error occurred.');
    }
  };

  useEffect(() => {
    handleStartListening();
  }, []);

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={COLORS.primary}
      />
      <View style={styles.container}>
        <Header />
        <View style={styles.mainContent}>
          <Text style={_['body']}>
            {listning ? 'Speak Now' : 'Press button to voice search'}
          </Text>
          {listning ? (
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

          <Text style={_['h3']}>{!listning && text}</Text>

          <SearchButton />
        </View>
      </View>
    </>
  );
};

export default VoiceSearch;
