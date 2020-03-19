import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Asset } from 'expo';

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  })
}

export default class App extends React.Component {

  constructor() {
    super()
    this.state={
      isReady: false
    }
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/circle.jpg'),
    ]);
    const fontAssets = cacheFonts([FontAwesome.font]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }

  render() {
    return(
      <View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
