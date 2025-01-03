import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {
  ArrowLeftIcon,
  CameraIcon,
  CloseIcon,
  SearchIcon,
  GoogleIcon,
  VoiceSearchIcon,
} from '../../assets/icons';
import {moderateScale} from '../../utils';
import {_, COLORS} from '../../theme';
import {styles} from './style';

type SuggestionProps = {
  query?: string;
  setSearchQuery?: (value: string) => void;
  type?: 'button' | 'input';
  placeholder?: string;
  leansSearch?: boolean;
  voiceSearch?: boolean;
  logo?: boolean;
};

const SearchBox: React.FC<SuggestionProps> = ({
  query,
  setSearchQuery = () => {},
  type = 'input',
  placeholder = 'Search or type URL',
  leansSearch = true,
  voiceSearch = true,
  logo = false,
}) => {
  const navigation = useNavigation<any>();

  const goBackhandler = () => {
    navigation.goBack();
  };

  const navigateToSearch = () => {
    if (type !== 'button') return;
    navigation.navigate('Search');
  };

  return (
    <TouchableOpacity
      onPress={navigateToSearch}
      activeOpacity={1}
      style={[
        styles.searchBoxCont,
        _['align-center'],
        _['flex-space-between-row'],
      ]}>
      {logo ? (
        <GoogleIcon
          height={moderateScale(30)}
          width={moderateScale(30)}
          fill={COLORS.grey}
        />
      ) : (
        <>
          {type === 'button' ? (
            <SearchIcon
              fill={COLORS.grey}
              height={moderateScale(30)}
              width={moderateScale(30)}
            />
          ) : (
            <TouchableOpacity activeOpacity={0.7} onPress={goBackhandler}>
              <ArrowLeftIcon
                fill={COLORS.grey}
                height={moderateScale(20)}
                width={moderateScale(20)}
              />
            </TouchableOpacity>
          )}
        </>
      )}

      <TextInput
        placeholder={placeholder}
        autoFocus={true}
        style={[_['body'], styles.textInput]}
        placeholderTextColor={COLORS.grey}
        value={query}
        editable={type === 'button' ? false : true}
        onChangeText={e => setSearchQuery(e)}
      />

      <View style={[_['flex-space-between-row'], {gap: moderateScale(20)}]}>
        {query ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setSearchQuery('')}>
            <CloseIcon
              height={moderateScale(27)}
              width={moderateScale(27)}
              fill={COLORS.white}
            />
          </TouchableOpacity>
        ) : (
          <>
            {voiceSearch && (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('VoiceSearch')}>
                <VoiceSearchIcon
                  height={moderateScale(27)}
                  width={moderateScale(27)}
                  fill={COLORS.white}
                />
              </TouchableOpacity>
            )}

            {leansSearch && (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('LensSearch')}>
                <CameraIcon
                  height={moderateScale(27)}
                  width={moderateScale(27)}
                  fill={COLORS.white}
                />
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SearchBox;
