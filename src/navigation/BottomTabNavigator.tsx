import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  HistoryIcon,
  HomeIcon,
  MenuIcon,
  NotificationIcon,
} from '../assets/icons';
import {Home} from '../screens';
import {COLORS} from '../theme';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from '../utils';

const Tab = createBottomTabNavigator();

const renderTabBarIcon = (routeName: string, focused: boolean) => {
  const iconColor = focused ? COLORS.light_blue : COLORS.grey;
  const iconBgColor = focused ? COLORS.transparent_light_blue : '';
  switch (routeName) {
    case 'Home':
      return (
        <View style={[styles.tabIcon, {backgroundColor: iconBgColor}]}>
          <HomeIcon
            fill={iconColor}
            height={moderateScale(30)}
            width={moderateScale(30)}
          />
        </View>
      );
    case 'Notification':
      return (
        <View style={[styles.tabIcon, {backgroundColor: iconBgColor}]}>
          <NotificationIcon
            fill={iconColor}
            height={moderateScale(30)}
            width={moderateScale(30)}
          />
        </View>
      );
    case 'Menu':
      return (
        <View style={[styles.tabIcon, {backgroundColor: iconBgColor}]}>
          <MenuIcon
            fill={iconColor}
            height={moderateScale(30)}
            width={moderateScale(30)}
          />
        </View>
      );
    default:
      return null;
  }
};

const renderTabBarButton = (props: any, navigation: any) => (
  <TouchableOpacity {...props} onPress={() => navigation.navigate('Search')}>
    <HistoryIcon
      fill={COLORS.grey}
      height={moderateScale(30)}
      width={moderateScale(30)}
    />
  </TouchableOpacity>
);

const BottomTabNavigator = () => {
  const navigation = useNavigation<any>();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          paddingTop: moderateScale(10),
          backgroundColor: COLORS.primary,
          height: 70,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => renderTabBarIcon(route.name, focused),
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: '#FFFFFF',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="SearchTab"
        component={Home}
        options={{
          tabBarButton: props => renderTabBarButton(props, navigation),
        }}
      />
      <Tab.Screen name="Notification" component={Home} />
      <Tab.Screen name="Menu" component={Home} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(2),
    borderRadius: moderateScale(100),
  },
});

export default BottomTabNavigator;
