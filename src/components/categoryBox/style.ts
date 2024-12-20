import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils';

export const styles = StyleSheet.create({
  categoryBox: {
    height: moderateScale(60),
    alignItems: 'center',
    width: '23%',
    borderRadius: 30,
    justifyContent: 'center',
    marginRight: moderateScale(10),
  },
  categoryText: {},
});
