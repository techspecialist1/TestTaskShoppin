import React, {useEffect, useState} from 'react';
import {FlatList, StatusBar, Text, TouchableOpacity, View} from 'react-native';

import axios from 'axios';
import {HistoryIcon, SearchIcon} from '../../assets/icons';
import {SearchBox} from '../../components';
import {_, COLORS} from '../../theme';
import {moderateScale} from '../../utils';
import {searchHistory} from './data';
import {styles} from './style';

const GOOGLE_AUTOCOMPLETE_URL = 'https://www.google.com/complete/search';

type HistoryProps = {
  query: string;
  setSearchQuery?: (value: string) => void;
  isSearch?: boolean;
};

const History: React.FC<HistoryProps> = ({
  query,
  setSearchQuery = () => {},
  isSearch,
}) => {
  return (
    <TouchableOpacity
      onPress={() => setSearchQuery(query)}
      activeOpacity={0.8}
      style={[_['flex-row'], _['flex-center'], styles.historyQuaryCont]}>
      <View style={[_['flex-center'], styles.historyIconCont]}>
        {isSearch ? (
          <SearchIcon
            fill={COLORS.grey}
            height={moderateScale(20)}
            width={moderateScale(20)}
          />
        ) : (
          <HistoryIcon
            fill={COLORS.grey}
            height={moderateScale(20)}
            width={moderateScale(20)}
          />
        )}
      </View>
      <Text style={[_['body-1'], {width: '85%'}]}>{query}</Text>
    </TouchableOpacity>
  );
};

const Search = ({route}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Array<string>>([]);

  const {transcript} = route?.params || {};

  useEffect(() => {
    if (transcript) {
      setSearchQuery(transcript);
    }
  }, [transcript, setSearchQuery]);

  const fetchSuggestions = async (input: string) => {
    if (!input) {
      setSuggestions([]);
      return;
    }

    const params = {
      q: input,
      client: 'firefox',
    };

    try {
      const response = await axios.get(GOOGLE_AUTOCOMPLETE_URL, {params});
      const suggestionsData = response.data[1];
      setSuggestions(suggestionsData || []);
    } catch (error) {
      console.error('Error fetching Google autocomplete suggestions:', error);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchSuggestions(searchQuery);
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchQuery]);

  const dataToRender = suggestions.length > 0 ? suggestions : searchHistory;

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={'#1f212570'}
      />
      <View style={[styles.container, _['body-padding']]}>
        <View style={{gap: moderateScale(15)}}>
          <SearchBox query={searchQuery} setSearchQuery={setSearchQuery} />
          <View style={[_['flex-space-between-row']]}>
            <Text style={[_['h3'], {color: COLORS.grey}]}>Recent Searches</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={[_['h3'], {color: COLORS.grey}]}>
                MANAGE HISTORY
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={dataToRender}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listStyle}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <History
              query={item}
              setSearchQuery={setSearchQuery}
              isSearch={suggestions.length > 0}
            />
          )}
        />
      </View>
    </>
  );
};

export default Search;
