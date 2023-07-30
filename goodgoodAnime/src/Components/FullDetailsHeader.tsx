import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, ScrollView, Modal, Dimensions, TouchableOpacity } from 'react-native';
import { PopularTypes } from '../Models/PopularAnimesModel';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FullAnimeDetails } from '../Models/FullAnimeTypes';

const windowHeight = Dimensions.get('window').height ;
const equivalentTo60Percent = windowHeight * 0.6;

type Props = {
    item: FullAnimeDetails;
};

const FullDetailsHeader: React.FC<Props> = ({ item }) => {
  const navigation = useNavigation(); // Get the navigation object

  console.log(item)

    return(
        <>
        <View style={styles.imageContainer}>
          <ImageBackground source={{ uri: item.image }} style={styles.imageBackground}>
            <View style={styles.overlay} />
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                navigation.goBack()
              }}
            >
              <Entypo name="chevron-left" size={24} color="rgba(255, 255, 255, 0.8)" />
            </TouchableOpacity>
            <View style={styles.contentContainer}>
              <View style={styles.rowText}>
                <Text style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: 18,
                  fontWeight: 'bold',
                  maxWidth: '90%',
                  textAlign: 'center',
                  flexWrap: 'wrap',
                  flexShrink: 1,
                }}>
                  {item.title?.english ? item.title?.english : item.title?.native}
                </Text>
              </View>

              <View style={[styles.rowText, { paddingTop: 6 }]}>
                <Text style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 18 }}>{item.releaseDate}</Text>
                <Entypo name="dot-single" size={24} color="rgba(255, 255, 255, 0.8)" />
                <Text style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 18 }}>{item.currentEpisode} Episodes</Text>
              </View>

              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Entypo name="controller-play" size={24} color="#000" />
                  <Text style={styles.buttonText}>Season 1 Episode 1</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        </>
    )
}

export default FullDetailsHeader

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    imageContainer: {
      height: equivalentTo60Percent,
    },
    rowText: {
      alignItems: 'center',
      flexDirection: 'row'
    },
    backButton: {
      borderRadius: 12,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'absolute',
      top: 50,
      left: 20,
      padding: 8,
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
      borderRadius: 12
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
      backgroundColor: '#9074F7',
      margin: 5,
      borderRadius: 5,
    },
    categoryText: {
      color: '#fff',
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
});
