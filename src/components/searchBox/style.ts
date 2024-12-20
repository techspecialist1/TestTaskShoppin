import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils';
import {COLORS} from '../../theme';

export const styles = StyleSheet.create({
  searchBoxCont: {
    paddingHorizontal: moderateScale(20),
    backgroundColor: COLORS.secondry,
    borderRadius: moderateScale(100),
    gap: moderateScale(10),
  },

  textInput: {
    paddingVertical: moderateScale(15),
    flex: 1,
    height: moderateScale(65),
  },
});
