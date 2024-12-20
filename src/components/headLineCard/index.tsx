import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './style';
import {_} from '../../theme';

const HeadLineCard = ({title, publishedBy, publishedAt, image}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, _['body-padding']]}>
      <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
      <Text style={[styles.title, _['body']]}>{title}</Text>

      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <Text style={_['body-2']}>{publishedBy}</Text>
          <Text style={_['body-2']}>{`  ${publishedAt}`}</Text>
        </View>
        <View style={styles.footerRight}>
          <TouchableOpacity>
            <Text>Like</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>Share</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HeadLineCard;
