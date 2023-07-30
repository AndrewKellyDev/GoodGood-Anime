// FullScreenVideoPlayer.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video, VideoFullscreenUpdateEvent } from 'expo-av';
import { RootStackParamList } from '../../App';
import { RouteProp } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';


type PlayerScreenRouteProp = RouteProp<RootStackParamList, 'PlayerScreen'>;

type PlayerScreenProps = {
  route: PlayerScreenRouteProp;
};

export const onFullscreenUpdate = async ({
    fullscreenUpdate,
  }: VideoFullscreenUpdateEvent) => {
    if (fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_DID_PRESENT) {
      await ScreenOrientation.unlockAsync();
    } else if (fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS) {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT,
      );
    }
  };

const FullScreenVideoPlayer: React.FC<PlayerScreenProps> = ({ route  }) => {
    const { streamingLink } = route.params;



    return (
      <Video
        onFullscreenUpdate={onFullscreenUpdate}
        source={{ uri: streamingLink }}
        style={styles.video}
        shouldPlay
        useNativeControls
        
      />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  video: {
    flex: 1,
  },
});

export default FullScreenVideoPlayer;
