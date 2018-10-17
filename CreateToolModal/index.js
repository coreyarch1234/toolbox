import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform } from 'react-native';
import HeaderButton from '../components/HeaderButton';

export default class CreateToolModal extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.modalHeader}>
          <HeaderButton
            buttonStyle={{marginRight: 30}}
            textStyle={{fontSize: 16, fontWeight: "600"}}
            text={'Post'}
            action={() => this.props.navigation.navigate('ToolList')}
          />
        </View>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "flex-end"
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
    paddingLeft: 17,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    borderBottomWidth: 0,
    borderTopWidth: 0
  },
});
