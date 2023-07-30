import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { recommendations } from '../Models/FullAnimeTypes'; // Adjust the import as per your type definition

const windowWidth = Dimensions.get('window').width;
type PopularAnimeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

interface RecommendedShowsProps {
  recommendedShows: recommendations[]; // Pass the recommendedShows data as a prop
}

const RecommendedShows: React.FC<RecommendedShowsProps> = ({ recommendedShows }) => {

  const navigation = useNavigation<PopularAnimeScreenNavigationProp>(); // Hook to access navigation

  const renderItem = ({ item }: { item: recommendations }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('AnimeDetails', { id: item.id })} // Pass the item data as a parameter
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
        {item.title.userPreferred}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Recommended Shows</Text>
      <FlatList
        data={recommendedShows} // Use the recommendedShows prop as the data for FlatList
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
  },
  titleText: {
    paddingLeft: 12,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  flatListContent: {
    paddingHorizontal: 12,
  },
  itemContainer: {
    width: windowWidth * 0.35,
    marginRight: 16,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },
});

export default RecommendedShows;
