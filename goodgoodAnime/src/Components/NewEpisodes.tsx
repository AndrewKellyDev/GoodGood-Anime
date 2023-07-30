import React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import  Ionicons  from '@expo/vector-icons/Ionicons'; 

type AnimePick = {
  id: string;
  title: string;
  image: string;
};

const topPicks: AnimePick[] = [
  {
    id: '1',
    title: 'Haikyuu!!',
    image: 'https://infolagi.com/wp-content/uploads/2023/05/Manga-Haikyuu-Lanjutan-Season-4-Chapter-Berapa.jpg',
  },
  {
    id: '2',
    title: 'Attack on Titan',
    image: 'https://assets-prd.ignimgs.com/2022/09/22/attack-on-colossal-titan-1663870328553.jpg?fit=bounds&width=1280&height=720',
  },
  {
    id: '3',
    title: 'Demon Slayer',
    image: 'https://assets-prd.ignimgs.com/2022/09/22/demonslayer-1663870772245.jpg?fit=bounds&width=1280&height=720',
  },
  {
      id: '4',
      title: 'Trigun',
      image: 'https://assets-prd.ignimgs.com/2022/09/22/trigun-1663869114240.jpg?fit=bounds&width=1280&height=720',
    },
    {
      id: '5',
      title: 'Made in Abyss',
      image: 'https://assets-prd.ignimgs.com/2022/09/22/madeinabyss-1663869946626.jpg?fit=bounds&width=1280&height=720',
    },
    {
      id: '6',
      title: 'Hunter x Hunter',
      image: 'https://oyster.ignimgs.com/wordpress/stg.ign.com/2019/11/hunter-x-hunter.jpeg?fit=bounds&width=1280&height=720',
    },
];

const NewEpisodes = () => {
  const screenWidth = Dimensions.get("window").width;

  const renderCarouselItem = ({ item }: { item: AnimePick }) => (
    <View style={{ marginTop: 10 , borderColor: '#1A191B', borderWidth: 2.5, borderRadius: 20 }}>
      <Image source={{ uri: item.image }} style={{ width: "100%", height: 208 , borderRadius: 20 }} />
      <View style={styles.overlayContainer}>
        <TouchableOpacity onPress={() => handlePlay(item)}>
          <View style={{backgroundColor: '#9074F7', padding: 10 , borderRadius: 32}}>
            <Ionicons name="play" size={32} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  const [activeSlide, setActiveSlide] = React.useState<number>(0);

  const handlePlay = (item: AnimePick) => {
    console.log("Playing:", item.title);
  };

  return (
    <View style={{ marginTop: 36 , paddingHorizontal: 12 }}>
      <Text style={{ color: "#9074F7", fontWeight: "bold", fontSize: 12, letterSpacing: -0.5 }}>
        TOP PICKS
      </Text>

      <Text style={{ color: "rgba(255, 255, 255, 0.8)", fontWeight: "bold", fontSize: 24, marginVertical: 10 }}>
        {topPicks[activeSlide].title}
      </Text>

      <View style={{ alignItems: 'center' }}>
        <Carousel
          data={topPicks}
          renderItem={renderCarouselItem}
          sliderWidth={screenWidth - 20}
          itemWidth={screenWidth - 20}
          onSnapToItem={(index) => setActiveSlide(index)}
        />

        <Pagination
          dotsLength={topPicks.length}
          activeDotIndex={activeSlide}
          containerStyle={{ paddingTop: 8, paddingBottom: 16 }}
          dotStyle={{
            width: 18,
            height: 6,
            borderRadius: 4,
            backgroundColor: "#9074F7",
          }}
          inactiveDotStyle={{
            width: 6,
          }}
          inactiveDotOpacity={0.6}
          inactiveDotScale={0.8}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NewEpisodes;
