import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import SearchResults from '../Screens/Search';
import { Ionicons } from '@expo/vector-icons'; // import the icons
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home-outline'
              : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account-outline' : 'account-outline';
          }
          else if (route.name === 'Bookmarked') {
            iconName = focused ? 'bookmark-outline' : 'bookmark-outline';
          }
          else if (route.name === 'Search') {
            iconName = focused ? 'magnify' : 'magnify';
          }

          return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
        },
        headerShown: false,
        tabBarStyle: { backgroundColor: 'black', borderTopColor: '#1A191B' },
        tabBarActiveTintColor: '#9074F7',
        tabBarInactiveTintColor: 'white',
        tabBarShowLabel: false
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bookmarked" component={SearchResults} />
      <Tab.Screen name="Search" component={SearchResults} />
      <Tab.Screen name="Profile" component={SearchResults} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
