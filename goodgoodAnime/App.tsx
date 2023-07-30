import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimeDetailsScreen from './src/Screens/AnimeDetails';
import { PopularTypes } from './src/Models/PopularAnimesModel';
import FullScreenVideoPlayer from './src/Screens/VideoPlayer';

export type RootStackParamList = {
  HomeScreen: undefined;
  PlayerScreen: { streamingLink: string };
  AnimeDetails: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AnimeDetails" component={AnimeDetailsScreen} />
        <Stack.Screen name="PlayerScreen" component={FullScreenVideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
