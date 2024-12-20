import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(15),
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: moderateScale(10),
  },
  title: {
    paddingTop: moderateScale(10),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingTop: moderateScale(10),
  },
  footerLeft: {
    flexDirection: 'row',
  },
  footerRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.6,
  },
});
