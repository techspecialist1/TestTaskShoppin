import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {_} from '../../theme';

const InfoCard = ({title, description, image}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <View style={styles.content}>
        <Text style={_['h3']}>{title}</Text>
        <View style={styles.footer}>
          <Text style={_['h2']}>{description}</Text>
          <Text>{image}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default InfoCard;
