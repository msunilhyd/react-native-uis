import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import * as Sharing from 'expo-sharing';


export default function App() {

  let [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
  
    if (permissionResult.granted == false) {
      alert("Permission to access camera roll is required");
      return;
    }
  
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if (pickerResult.cancelled === true){
      return;
    }

    setSelectedImage({ localUri : pickerResult.uri });
  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }
    Sharing.shareAsync(selectedImage.localUri);
  };

  if (selectedImage !== null) {
    console.log('Entererd into this')
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}>
            style={styles.thumbnail}
        </Image>
      <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
        <Text style={styles.buttonText}> Share this photo</Text>
      </TouchableOpacity>
      </View>
    );
  }
  else {
    console.log('Sharing did not occur');
  }



  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://i.imgur.com/TkIrScD.png"}}
             style={styles.logo}></Image>
      <Text style={ styles.instructions }>To share a photo from your phone with a friend,
        just press the button below!
        </Text>

        <TouchableOpacity
        onPress={openImagePickerAsync}
        style={ styles.button }>
          <Text style={styles.buttonText}> Pick a photo final </Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
