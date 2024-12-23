import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils';
import {COLORS} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingTop: moderateScale(50),
    paddingHorizontal: moderateScale(10),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconButton: {
    height: moderateScale(40),
    width: moderateScale(40),
    backgroundColor: COLORS.secondry,
    borderRadius: moderateScale(20),
  },
  mainContent: {
    justifyContent: 'space-evenly',
    flex: 1,
    alignItems: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: moderateScale(5),
    marginHorizontal: moderateScale(5),
  },
  searchButton: {
    backgroundColor: COLORS.secondry,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    borderRadius: moderateScale(25),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.secondry,
    borderWidth: 1,
  },
  searchText: {
    marginLeft: moderateScale(5),
    fontSize: moderateScale(14),
    color: COLORS.grey,
  },

  listningButton: {
    borderRadius: moderateScale(100),
    padding: moderateScale(15),
    backgroundColor: COLORS.blue,
  },
});
