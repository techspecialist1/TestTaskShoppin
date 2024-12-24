import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils';
import {COLORS} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  headerContainer: {
    paddingHorizontal: moderateScale(10),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    resizeMode: 'contain',
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
    height: moderateScale(35),
    width: moderateScale(35),
    borderRadius: moderateScale(100),
    backgroundColor: COLORS.box_green,
  },
  listContainer: {
    paddingTop: moderateScale(40),
  },
  modalOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    height: '90%',
    width: '95%',
    alignSelf: 'center',
    backgroundColor: COLORS.secondry,
  },
  modalListContent: {
    paddingTop: moderateScale(20),
    backgroundColor: COLORS.secondry,
  },
  accountHeaderContainer: {
    marginHorizontal: moderateScale(5),
    borderRadius: moderateScale(5),
  },
  accountHeader: {
    // paddingHorizontal: moderateScale(10),
    backgroundColor: COLORS.secondry,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButton: {
    padding: moderateScale(5),
  },
  accountDetails: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: moderateScale(10),
    paddingHorizontal: moderateScale(10),
  },
  accountInfo: {
    flex: 1,
    paddingLeft: moderateScale(20),
  },
  accountInfoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rotateIcon: {
    transform: [{rotate: '270deg'}],
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(20),
    width: moderateScale(20),
    paddingLeft: moderateScale(5),
  },
  manageAccountBtn: {
    marginTop: moderateScale(10),
    borderColor: COLORS.grey,
    borderWidth: 1,
    padding: 5,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(15),
  },
  accountItemDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  topSeperator: {
    backgroundColor: '#494a4d',
    height: 1,
    marginLeft: 0,
    marginTop: moderateScale(20),
  },
  itemSeparator: {
    backgroundColor: '#494a4d',
    height: 1,
    marginLeft: moderateScale(55),
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(10),
  },
  footerText: {
    paddingLeft: moderateScale(7),
  },
  footerDot: {
    height: 5,
    width: 5,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    marginLeft: moderateScale(7),
  },
});
