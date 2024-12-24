import {NativeModules} from 'react-native';

const {ObjectRecognition} = NativeModules;

export const detectObjects = async imagePath => {
  try {
    const labels = await ObjectRecognition.detectObjects(imagePath);
    return labels;
  } catch (error) {
    console.error(error);
    return [];
  }
};
