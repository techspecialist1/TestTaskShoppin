import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CategoryData, HeadLinesData, InfoData, renderAccountData} from './data';
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
import {ArrowLeftIcon, CloseIcon, FilterIcon} from '../../assets/icons';

const renderHeader = onPress => (
  <View>
    <View style={[_['body-padding'], styles.headerContainer]}>
      <View style={styles.header}>
        <FilterIcon
          fill={COLORS.light_blue}
          width={moderateScale(33)}
          height={moderateScale(33)}
        />
        <TouchableOpacity
          style={[styles.profileBtn, _['flex-center']]}
          onPress={onPress}>
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
      horizontal
      data={InfoData}
      renderItem={({item}) => (
        <InfoCard
          title={item.title}
          description={item.description}
          type={item.type}
        />
      )}
    />
  </View>
);

const renderAccountHeader = onPress => (
  <View style={styles.accountHeaderContainer}>
    <View style={styles.accountHeader}>
      <TouchableOpacity style={styles.iconButton} onPress={onPress}>
        <CloseIcon
          height={moderateScale(27)}
          width={moderateScale(27)}
          fill={COLORS.white}
        />
      </TouchableOpacity>
      <Text style={_['h1']}>Google</Text>
      <Text style={_['h1']} />
    </View>
    <View style={styles.accountDetails}>
      <TouchableOpacity style={[styles.profileBtn, _['flex-center']]}>
        <Text style={[_['h2'], {color: COLORS.primary}]}>A</Text>
      </TouchableOpacity>
      <View style={styles.accountInfo}>
        <View style={styles.accountInfoHeader}>
          <View>
            <Text style={_['body-1']}>Demo Name</Text>
            <Text style={_['body-1']}>demo.id@gmail.com</Text>
          </View>
          <TouchableOpacity style={styles.rotateIcon}>
            <ArrowLeftIcon
              fill={COLORS.grey}
              height={moderateScale(12)}
              width={moderateScale(12)}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.manageAccountBtn}>
          <Text style={_['body-1']}>Manage your Google Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const Home = () => {
  const [showAccount, setShowAccount] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="#1f212590"
      />
      <FlatList
        ListHeaderComponent={() => renderHeader(() => setShowAccount(true))}
        contentContainerStyle={styles.listContainer}
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
      <Modal
        animationType="slide"
        statusBarTranslucent={true}
        transparent
        visible={showAccount}
        onRequestClose={() => setShowAccount(!showAccount)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              ListHeaderComponent={() =>
                renderAccountHeader(() => setShowAccount(false))
              }
              contentContainerStyle={styles.modalListContent}
              data={renderAccountData}
              renderItem={({item}) => (
                <>
                  {item.id === 1 && <View style={styles.topSeperator} />}
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.accountItem}>
                    {item.icon && (
                      <item.icon
                        fill={COLORS.grey}
                        height={moderateScale(20)}
                        width={moderateScale(20)}
                      />
                    )}
                    <View style={styles.accountItemDetails}>
                      <Text
                        style={[
                          _['body-1'],
                          {
                            paddingLeft: item.icon
                              ? moderateScale(15)
                              : moderateScale(35),
                          },
                        ]}>
                        {item.item}
                      </Text>
                      <Text style={_['body-3']}>{item.state}</Text>
                    </View>
                  </TouchableOpacity>
                  {item.seperator && (
                    <View
                      style={[
                        styles.itemSeparator,
                        {
                          marginLeft: !item.state
                            ? moderateScale(0)
                            : moderateScale(55),
                        },
                      ]}
                    />
                  )}
                </>
              )}
              ListFooterComponent={() => (
                <View style={styles.footer}>
                  <Text style={[styles.footerText, _['body-1']]}>
                    Privacy Policy
                  </Text>
                  <View style={styles.footerDot} />
                  <Text style={[styles.footerText, _['body-1']]}>
                    Terms of Service
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
