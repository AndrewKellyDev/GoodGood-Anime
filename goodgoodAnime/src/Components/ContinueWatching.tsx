import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ContinueWatchingItem {
  id: number;
  title: string;
  image: string;
  percentageWatched: number; // Percentage watched (0 to 100)
}

const windowWidth = Dimensions.get('window').width;

const ContinueWatchingScreen: React.FC = () => {
  const continueWatchingData: ContinueWatchingItem[] = [
    {
      id: 1,
      title: "S2 E1 - The Secret Behind the Ring",
      image: "https://assets-prd.ignimgs.com/2022/09/22/demonslayer-1663870772245.jpg?fit=bounds&width=1280&height=720",
      percentageWatched: 100,
    },
    {
      id: 2,
      title: "S13 E899 - Defeat is Inevitable! ...",
      image: "https://assets-prd.ignimgs.com/2022/09/22/madeinabyss-1663869946626.jpg?fit=bounds&width=1280&height=720",
      percentageWatched: 70,
    },
    {
      id: 3,
      title: "Anime 2",
      image: "https://assets-prd.ignimgs.com/2022/09/22/madeinabyss-1663869946626.jpg?fit=bounds&width=1280&height=720",
      percentageWatched: 70,
    },
    // Add more dummy data items as needed
  ];

  const itemWidth = windowWidth * 0.60; // Approximately 60% of the screen width
  const itemSpacing = windowWidth * 0.05; // Approximately 5% of the screen width

  const renderItem = ({ item }: { item: ContinueWatchingItem }) => {
    const progress = item.percentageWatched;

    return (
      <View style={[styles.itemContainer, { width: itemWidth, marginRight: itemSpacing }]}>
        <View style={styles.imageContainer}>
          <LinearGradient
            colors={['#9074F7', '#1A191B']}
            start={{ x: 0, y: 0 }}
            end={{ x: progress / 100, y: 0 }}
            style={styles.linearGradient}
          >
            <View style={styles.innerContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>
          </LinearGradient>
        </View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Continue Watching</Text>
      <FlatList
        data={continueWatchingData}
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
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    flatListContent: {
        paddingHorizontal: 12,
    },
    itemContainer: {
      // Width and margin will be dynamically calculated based on the windowWidth, itemWidth, and itemSpacing variables above.
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 8,
    },
    imageContainer: {
      width: '100%',
      height: 130,
      borderRadius: 8,
      overflow: 'hidden',
      marginBottom: 8,
    },
    title: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: 14,
    },
    percentage: {
      fontSize: 14,
      color: '#888',
    },
    linearGradient: {
      flex: 1,
    },
    innerContainer: {
      flex: 1,
      margin: 2, // adjust the margin size according to your needs
    },
  });
  
  

export default ContinueWatchingScreen;
