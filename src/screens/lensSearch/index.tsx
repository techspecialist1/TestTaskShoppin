import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  BackHandler,
  Image,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import ImagePicker, {Image as ImageType} from 'react-native-image-crop-picker';
import {ArrowLeftIcon, MoreIcon} from '../../assets/icons';
import {GoogleLogo} from '../../assets/images';
import {_, COLORS} from '../../theme';
import {moderateScale} from '../../utils';
import {styles} from './style';
import {SearchBox} from '../../components';
import {GoogleLensResults} from './data';

const HeaderComponent = ({originalImage, recropImage, image, loading}) => {
  return (
    <View style={{backgroundColor: COLORS.black}}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => recropImage(originalImage || '')}
        style={styles.imgCont}>
        {image && <Image source={{uri: image}} style={styles.image} />}
      </TouchableOpacity>
      <View style={[styles.botomSheetCont, _['body-padding']]}>
        <View style={styles.sheetIndicator} />
        <SearchBox
          logo={true}
          placeholder="Add to your search"
          type="button"
          leansSearch={false}
        />
        {loading && (
          <View style={{marginTop: moderateScale(20)}}>
            <ActivityIndicator size="large" color={COLORS.white} />
          </View>
        )}
      </View>
    </View>
  );
};

const searchCard = item => {
  return (
    <View style={styles.searchCard}>
      <Image
        style={styles.imageCont}
        source={{uri: item.image_url}}
        height={200}
        resizeMode="cover"
      />
      <View>
        <Text style={[_['body'], {color: COLORS.grey}]}>{item.title}</Text>
        <Text style={_['h3']}>{item.description}</Text>
      </View>
    </View>
  );
};

const LensSearch: React.FC = () => {
  const navigation = useNavigation<any>();
  const [image, setImage] = useState<string | null>(null);
  const [originalImage, setOriginalImage] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [shuffled, setShuffled] = useState([]);

  useEffect(() => {
    openCamera();
  }, []);

  useEffect(() => {
    setShuffled([]);
    setLoading(true);
    if (image) {
      let shuffledData = GoogleLensResults.map(value => ({
        value,
        sort: Math.random(),
      }))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value);

      setTimeout(() => {
        setShuffled(shuffledData);
        setLoading(false);
      }, 3000);
    }
  }, [image]);

  // Open the camera
  const openCamera = () => {
    ImagePicker.openCamera({
      cropping: false,
      mediaType: 'photo',
      includeBase64: true,
    })
      .then((image: ImageType) => {
        setOriginalImage(image.path);
        recropImage(image.path);
        setImage(image.path);
      })
      .catch(error => {
        console.log('Error capturing image from camera:', error);
        navigation.goBack();
      });
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      openCamera,
    );

    return () => backHandler.remove();
  }, []);

  const recropImage = (originalImage: string) => {
    if (!originalImage) {
      Alert.alert('No Image', 'Please select or capture an image first!');
      return;
    }

    ImagePicker.openCropper({
      path: originalImage,
      includeBase64: true,
    })
      .then((croppedImage: ImageType) => {
        setImage(croppedImage.path);
      })
      .catch(error => {
        console.log('Error recropping image:', error);
      });
  };

  return (
    <>
      <StatusBar backgroundColor={'transparent'} />
      <View
        style={[
          _['flex-space-between-row'],
          styles.header,
          _['align-center'],
          _['body-padding'],
        ]}>
        <TouchableOpacity onPress={openCamera}>
          <ArrowLeftIcon
            fill={'white'}
            height={moderateScale(23)}
            width={moderateScale(23)}
          />
        </TouchableOpacity>
        <View
          style={[_['flex-row'], _['align-center'], {gap: moderateScale(3)}]}>
          <View style={styles.titleContainer}>
            <Image style={styles.logo} source={GoogleLogo} />
          </View>
          <Text style={[_['body']]}>Lens</Text>
        </View>
        <MoreIcon
          fill={'white'}
          height={moderateScale(25)}
          width={moderateScale(25)}
        />
      </View>
      <FlatList
        numColumns={2}
        data={shuffled}
        style={[styles.container]}
        columnWrapperStyle={[styles.columnWrapper, _['body-padding']]}
        contentContainerStyle={{gap: moderateScale(20)}}
        ListHeaderComponent={() =>
          HeaderComponent({
            image: image,
            originalImage: originalImage,
            recropImage: recropImage,
            loading: loading,
          })
        }
        renderItem={({item}) => searchCard(item)}
      />
    </>
  );
};

export default LensSearch;
