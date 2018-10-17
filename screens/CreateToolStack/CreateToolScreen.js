import React from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import HeaderButton from '../../components/HeaderButton';
import { ExpoLinksView } from '@expo/samples';

export default class CreateToolScreen extends React.Component {
  static navigationOptions = {
    headerRight: (
      <HeaderButton
        buttonStyle={{marginRight: 30}}
        textStyle={{fontSize: 16, fontWeight: "600"}}
        text={'Post'}
        action={() => console.log('post button was pressed')}
      />
    )
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView key="footer" behavior={Platform.OS === "ios" ? "padding" : null}>
          <TextInput
            name={'Title Input'}
            underlineColorAndroid={"rgba(0,0,0,0)"}
            style={styles.titleInput}
            placeholder={'What is this technique called?'}
            placeholderTextColor={"rgb(150, 150, 150)"}
            returnKeyType="done"
            onSubmitEditing={() => console.log('handling submit')}
            onChangeText={() => console.log('handling on change')}
            multiline={true}
            blurOnSubmit={true}
            autoFocus
          />
          <TextInput
            name={'Description Input'}
            underlineColorAndroid={"rgba(0,0,0,0)"}
            style={styles.descriptionInput}
            placeholder={'How does it work?'}
            placeholderTextColor={"rgb(150, 150, 150)"}
            returnKeyType="done"
            onSubmitEditing={() => console.log('handling submit')}
            onChangeText={() => console.log('handling on change')}
            multiline={true}
            blurOnSubmit={true}
            autoFocus
          />
          </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleInput: {
    width: "100%",
    color: "black",
    backgroundColor: "white",
    fontSize: 30,
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 50,
    paddingRight: 15,
    borderBottomWidth: 0
  },
  descriptionInput: {
    width: "100%",
    color: "black",
    maxHeight: 120,
    minHeight: 90,
    fontSize: 18,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "rgb(230, 230, 230)",
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    borderBottomWidth: 0,
    borderTopWidth: 0
  },
});
