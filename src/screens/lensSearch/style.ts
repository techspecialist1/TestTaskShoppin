import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';
import {moderateScale} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    position: 'absolute',
    alignSelf: 'center',
    top: 40,
    zIndex: 1,
    width: '100%',
  },

  imgCont: {
    width: '100%',
    backgroundColor: COLORS.black,
    height: moderateScale(400),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    objectFit: 'contain',
  },

  titleContainer: {
    height: moderateScale(30),
    width: moderateScale(60),
    overflow: 'hidden',
    justifyContent: 'center',
  },
  logo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },

  sheetContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    marginBottom: moderateScale(20),
  },

  botomSheetCont: {
    paddingTop: moderateScale(10),
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
  },

  sheetIndicator: {
    backgroundColor: COLORS.grey,
    width: moderateScale(45),
    height: moderateScale(4),
    borderRadius: moderateScale(10),
    alignSelf: 'center',
    marginBottom: moderateScale(35),
  },

  columnWrapper: {
    gap: moderateScale(20),
  },

  searchCard: {
    width: '48%',
  },

  imageCont: {
    borderRadius: moderateScale(20),
  },
});
