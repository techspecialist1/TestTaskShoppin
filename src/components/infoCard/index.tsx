import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {_, COLORS} from '../../theme';
import {AirIcon, MoonIcon, SettingsIcon} from '../../assets/icons';
import {moderateScale} from '../../utils';

const InfoCard = ({title, description, type}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <View style={styles.content}>
        {type === 'setting' ? (
          <View
            style={[_['flex-row'], _['align-center'], {gap: moderateScale(5)}]}>
            <SettingsIcon
              fill={COLORS.light_blue}
              height={moderateScale(20)}
              width={moderateScale(20)}
            />
            <Text style={(_['h4'], {color: COLORS.light_blue})}>{title}</Text>
          </View>
        ) : (
          <Text style={_['h4']}>{title}</Text>
        )}

        <View style={styles.footer}>
          {type === 'setting' ? (
            <Text
              style={
                (_['body-3'], {fontSize: moderateScale(11), color: COLORS.grey})
              }>
              Customize your space
            </Text>
          ) : (
            <Text style={_['h2']}>{description}</Text>
          )}
          {type === 'wather' && <MoonIcon />}
          {type === 'air-quality' && (
            <View style={[_['flex-center'], styles.iconCont]}>
              <AirIcon height={moderateScale(17)} width={moderateScale(17)} />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default InfoCard;
