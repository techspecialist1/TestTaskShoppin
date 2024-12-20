import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils';
import {COLORS} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: moderateScale(70),
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
    width: '100%',
    backgroundColor: COLORS.secondry,
    borderRadius: moderateScale(40),
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIconText: {
    paddingRight: moderateScale(10),
  },
  searchText: {
    paddingLeft: moderateScale(10),
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightButton: {
    paddingRight: moderateScale(10),
  },
  lensButton: {
    paddingLeft: moderateScale(10),
  },
});
