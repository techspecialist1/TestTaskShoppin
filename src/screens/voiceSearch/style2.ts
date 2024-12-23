import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils';
import {COLORS} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondry,
    paddingTop: moderateScale(50),
  },

  resultText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});
