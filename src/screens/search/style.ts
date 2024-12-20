import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';
import {moderateScale} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingTop: moderateScale(50),
  },

  historyIconCont: {
    backgroundColor: COLORS.secondry,
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: moderateScale(100),
  },

  historyQuaryCont: {
    gap: moderateScale(15),
    paddingVertical: moderateScale(10),
  },

  listStyle: {
    paddingVertical: moderateScale(16),
  },
});
