import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, Dimensions, Image, TouchableOpacity , StyleSheet} from 'react-native';
import { SearchController } from '../Controllers/SearchController';
import { AnimeSearch } from '../Models/SearchTypes';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const tileWidth = windowWidth / 3 - 15; // assuming 10px padding on both sides

const SearchResults = () => {
  const [search, setSearch] = useState('');

  let controller: SearchController = new SearchController
  const navigation = useNavigation<PopularAnimeScreenNavigationProp>(); // Hook to access navigation


  useEffect(() => {
    controller.GetSearchAnime(search);
  }, [search]);

  const renderItem = ({ item }: { item: AnimeSearch }) => (
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
    <View style={{ backgroundColor: '#000000', flex: 1, paddingTop: 72 }}>
    <TextInput 
      style={{ backgroundColor: '#1A191B', paddingVertical: 25, paddingLeft: 25, borderRadius: 12, marginBottom: 16 , color: 'white' }}
      placeholderTextColor="rgba(255, 255, 255, 0.6)"
      placeholder="Search Anime"
      onChangeText={text => setSearch(text)}
      value={search}
    />
    <View style={{ alignItems: 'center' }}>
      <FlatList
        contentContainerStyle={styles.flatListContent}
        data={controller.searchAnime}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={renderItem}
      />
    </View>
  </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
    flatListContent: {
        justifyContent: 'center',  // center items horizontally
        paddingHorizontal: 8,
    },
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
   
    itemContainer: {
        width: windowWidth * 0.27,      
        marginRight: 16,
    },
    image: {
      width: tileWidth,
      height: 200,
      borderRadius: 8,
      marginBottom: 8,
    },
    title: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: 14,
    },
  });
