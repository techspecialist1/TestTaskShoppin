import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils';
import {COLORS} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
  },
  titleContainer: {
    height: moderateScale(80),
    width: moderateScale(150),
    overflow: 'hidden',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: moderateScale(20),
  },
  logo: {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  },
  titleText: {
    textAlign: 'center',
  },
  categoryContainer: {
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoCardList: {
    marginTop: moderateScale(15),
  },

  profileBtn: {
    height: moderateScale(32),
    width: moderateScale(32),
    borderRadius: moderateScale(100),
    backgroundColor: COLORS.box_green,
  },
});
