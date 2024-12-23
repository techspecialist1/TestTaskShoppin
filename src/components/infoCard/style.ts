import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils';
import {COLORS} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    height: moderateScale(90),
    width: moderateScale(150),
    borderRadius: moderateScale(20),
    marginRight: moderateScale(10),
    borderColor: COLORS.secondry,
    borderWidth: 1,
    overflow: 'hidden',
    padding: moderateScale(10),
  },
  content: {
    justifyContent: 'space-between',
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconCont: {
    backgroundColor: COLORS.box_yellow,
    borderRadius: moderateScale(50),
    padding: moderateScale(5),
  },
});
