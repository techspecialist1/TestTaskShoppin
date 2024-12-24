import axios from 'axios';
import React, {useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker, {Image as ImageType} from 'react-native-image-crop-picker';

const LensSearch: React.FC = () => {
  const [image, setImage] = useState<string | null>(null); // Cropped image path
  const [originalImage, setOriginalImage] = useState<string | null>(null); // Original image path
  const [imageBase64, setImageBase64] = useState<string | null>(null); // Cropped image Base64
  const [loading, setLoading] = useState<boolean>(false);

  // const detectObject = async (path: any) => {
  //   const detectedLabels = await detectObjects(path);
  //   console.log('====================================');
  //   console.log(detectedLabels);
  //   console.log('====================================');
  // };

  // Open the image gallery
  const openGallery = () => {
    ImagePicker.openPicker({
      cropping: false,
      mediaType: 'photo',
      includeBase64: true,
    })
      .then((image: ImageType) => {
        setOriginalImage(image.path); // Save the original image path
        recropImage(image.path);
      })
      .catch(error => {
        Alert.alert('Image is not picked from gallery');
        console.log('Error picking image from gallery:', error);
      });
  };

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
        setImageBase64(image.data || '');
      })
      .catch(error => {
        Alert.alert('Image is not captured from camera');
        console.log('Error capturing image from camera:', error);
      });
  };

  // Re-crop the image using the original image path
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
        setImage(croppedImage.path); // Update the cropped image
        setImageBase64(croppedImage.data || '');
      })
      .catch(error => {
        console.log('Error recropping image:', error);
      });
  };

  const analizeImage = async () => {
    setLoading(true);
    try {
      if (!image && !imageBase64) {
        Alert.alert('Please Select an Image');
        setLoading(false);
        return;
      }

      // if (image) {
      //   detectObject(image);
      // }

      const API_KEY = 'AIzaSyDtI1htzZtXJQzXsN6Dgxq7cGEH5ux7vnQ';
      const apiUrl = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;

      const requestData = {
        requests: [
          {
            image: {
              content: imageBase64,
            },
            features: [{type: 'IMAGE_PROPERTIES', maxResults: 5}],
          },
        ],
      };

      const response = await axios.post(apiUrl, requestData);
      setLoading(false);
      console.log('====================================');
      console.log(response.data);
      console.log('====================================');
    } catch (error: any) {
      setLoading(false);
      console.log('====================================');
      console.log('Error Status:', error.response);
      console.log('====================================');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => recropImage(originalImage || '')}
        style={styles.imgCont}>
        {image && <Image source={{uri: image}} style={styles.image} />}
      </TouchableOpacity>

      <View>
        <View style={{flexDirection: 'row', gap: 20}}>
          <TouchableOpacity onPress={openGallery} style={styles.button}>
            <Text style={styles.buttonText}>Open Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={openCamera} style={styles.button}>
            <Text style={styles.buttonText}>Open Camera</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          disabled={loading}
          onPress={analizeImage}
          style={[
            styles.button,
            {backgroundColor: loading ? 'gray' : '#007bff'},
          ]}>
          <Text style={styles.buttonText}>Analyze Image</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={()=>recropImage(originalImage || '')} style={styles.button}>
          <Text style={styles.buttonText}>Re-Crop Image</Text>
        </TouchableOpacity> */}
      </View>

      {loading && (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  imgCont: {
    width: '95%',
    backgroundColor: '#cbd5e1',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
    objectFit: 'contain',
  },
});

export default LensSearch;
