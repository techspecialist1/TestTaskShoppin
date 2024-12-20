import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './style';
import {_} from '../../theme';

const Input = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.leftIconText}>leftIcon</Text>
        <Text style={[styles.searchText, _['body']]}>Search</Text>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity
          style={styles.rightButton}
          hitSlop={{top: 10, bottom: 10, left: 10}}>
          <Text>Mic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.lensButton}
          hitSlop={{top: 10, bottom: 10, right: 10}}>
          <Text style={styles.lensButton}>Lens</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Input;
