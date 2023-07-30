import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation, useIsFocused } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { PopularTypes } from '../Models/PopularAnimesModel';
import { Entypo } from '@expo/vector-icons';
import FullDetailsHeader from '../Components/FullDetailsHeader';
import { EpisodesController } from '../Controllers/EpisodesController';
import { AnimeEpisode } from '../Models/FullAnimeTypes';
import RecommendedShows from '../Components/RecommendedShows';

type AnimeDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AnimeDetails'>;
type PlayerScreenRouteProp = RouteProp<RootStackParamList, 'PlayerScreen'>;

type Props = {
  route: RouteProp<RootStackParamList, 'AnimeDetails'>;
  navigation: AnimeDetailsScreenNavigationProp;
};

const windowWidth = Dimensions.get('window').width;

const AnimeDetailsScreen: React.FC<Props> = ({ route }) => {
  let controller: EpisodesController = new EpisodesController(route?.params.id);
  const itemWidth = windowWidth * 0.60;
  const itemSpacing = windowWidth * 0.05;
  const navigation = useNavigation();
  const scrollViewRef = useRef<ScrollView>(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
        scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    }
  }, [route.params.id, isFocused]);

  const stripHTMLTags = (str: string): string => {
    let newStr = str.replace(/<[^>]*>/g, '');
    newStr = newStr.replace(/\(Source: .*\)/, '');
    newStr = newStr.replace(/Note: .*/, '');
    newStr = newStr.replace(/Note: .*/, '');
    return newStr;
  };

  const handleEpisodeClick = async (url: string) => {
    const streamingLink = await controller.GetStreamingLink(url);
    if (streamingLink) {
      navigation.navigate('PlayerScreen', { streamingLink });
    } else {
      // Handle case when streaming link is not available
    }
  };

  const renderEpisodeItem = ({ item }: { item: AnimeEpisode }) => {
    return (
      <TouchableOpacity onPress={() => handleEpisodeClick(item.id)}>
        <View style={[styles.itemContainer, { width: itemWidth, marginRight: itemSpacing }]}>
          <View style={styles.imageContainerItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.itemTitle}>
            {item.number} | {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

 
  return (
    <ScrollView ref={scrollViewRef} style={{ flex: 1, backgroundColor: '#000' }}>
      <View style={styles.container}>
        <FullDetailsHeader item={controller.animeFullDetails} />
        <View style={{ paddingHorizontal: 12, paddingTop: 10 }}>
          <Text style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{stripHTMLTags(controller.animeFullDetails?.description)}</Text>
        </View>
        <View style={{ paddingHorizontal: 12, paddingTop: 20 }}>
          <Text style={styles.titleText}>Episodes</Text>
          {controller.animeEpisodes.length > 0 ? (
            <FlatList
              data={controller.animeEpisodes.slice().reverse()}
              renderItem={renderEpisodeItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(episode) => episode.id}
            />
          ) : (
            <Text style={{ color: 'white' }}>No episodes found.</Text>
          )}
        </View>

        <RecommendedShows recommendedShows={controller.recommendedShows} />

        <View style={{ paddingHorizontal: 12, paddingTop: 20 }}>
          <Text style={styles.titleText}>Categories</Text>
          <View style={styles.categoriesContainer}>
            {controller.animeFullDetails.genres.map((genre, index) => (
              <View key={index} style={styles.category}>
                <Text style={styles.categoryText}>{genre}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemTitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },
  image: {
    borderColor: '#1A191B',
    borderWidth: 2,
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  itemContainer: {},
  innerContainer: {
    flex: 1,
    margin: 2,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  imageContainerItem: {
    width: '100%',
    height: 130,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
  },
  imageContainer: {
    height: '60%',
  },
  rowText: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  contentContainer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  category: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    margin: 5,
    borderRadius: 5,
  },
  categoryText: {
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default AnimeDetailsScreen;
