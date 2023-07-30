import { ScrollView, View } from "react-native"
import  Ionicons  from '@expo/vector-icons/Ionicons'; 
import NewEpisodes from "../Components/NewEpisodes";
import ContinueWatchingScreen from "../Components/ContinueWatching";
import PopularAnimeScreen from "../Components/PopularAnimes";

const HomeScreen = () => {
    return (
        <View style={{ backgroundColor: '#000000', flex: 1, paddingVertical: 72 }}>
            <ScrollView>
            <Ionicons name="ios-menu" size={32} color="white" style={{paddingHorizontal: 12}} />
            <NewEpisodes/>
            <ContinueWatchingScreen/>
            <PopularAnimeScreen/>
            </ScrollView>
        </View>
    )
}

export default HomeScreen