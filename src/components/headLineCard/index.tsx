import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './style';
import {_} from '../../theme';
import {MoreIcon, SaveIcon, ShareIcon} from '../../assets/icons';
import {moderateScale} from '../../utils';

const HeadLineCard = ({title, publishedBy, publishedAt, image}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, _['body-padding']]}>
      <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
      <Text style={[styles.title, _['body']]}>{title}</Text>

      <View style={styles.footer}>
        <View style={[styles.footerLeft, _['flex-center']]}>
          <View style={[_['flex-center'], styles.publisher]}>
            <Text style={_['body-3']}>Pu</Text>
          </View>
          <View style={_['flex-row']}>
            <Text style={_['body-2']}>{publishedBy}</Text>
            <Text style={_['body-2']}>{`  ${publishedAt}`}</Text>
          </View>
        </View>
        <View style={styles.footerRight}>
          <TouchableOpacity>
            <SaveIcon height={moderateScale(20)} width={moderateScale(20)} />
          </TouchableOpacity>

          <TouchableOpacity>
            <ShareIcon height={moderateScale(20)} width={moderateScale(20)} />
          </TouchableOpacity>

          <TouchableOpacity>
            <MoreIcon height={moderateScale(20)} width={moderateScale(20)} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HeadLineCard;
