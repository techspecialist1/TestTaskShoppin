import React from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CategoryData, HeadLinesData, InfoData} from './data';

import {GoogleLogo} from '../../assets/images';
import {
  CategoryBox,
  HeadLineCard,
  InfoCard,
  SearchBox,
  Seperator,
} from '../../components';
import {_, COLORS} from '../../theme';
import {styles} from './style';
import {moderateScale} from '../../utils';
import {FilterIcon} from '../../assets/icons';

const renderHeader = () => (
  <View>
    <View style={_['body-padding']}>
      <View style={styles.header}>
        <FilterIcon
          fill={COLORS.light_blue}
          width={moderateScale(33)}
          height={moderateScale(33)}
        />
        <TouchableOpacity style={[_['flex-center'], styles.profileBtn]}>
          <Text style={[_['h2'], {color: COLORS.primary}]}>A</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Image style={styles.logo} source={GoogleLogo} />
      </View>
      <SearchBox type="button" />
      <View style={styles.categoryContainer}>
        {CategoryData?.map(item => (
          <CategoryBox
            key={item.id}
            backgroundColor={item.backgroundColor}
            imageColor={item.imageColor}
            Item={item.image}
          />
        ))}
      </View>
    </View>
    <Seperator />
    <FlatList
      contentContainerStyle={[styles.infoCardList, _['body-padding']]}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={InfoData}
      renderItem={({item}) => (
        <InfoCard
          title={item.title}
          description={item.description}
          image={item.image}
        />
      )}
    />
  </View>
);
const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={'#1f212590'}
      />
      <FlatList
        ListHeaderComponent={renderHeader}
        contentContainerStyle={{paddingTop: moderateScale(40)}}
        data={HeadLinesData}
        renderItem={({item}) => (
          <HeadLineCard
            title={item.title}
            publishedBy={item.publishedBy}
            publishedAt={item.publishedAt}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={Seperator}
      />
    </View>
  );
};

export default Home;
