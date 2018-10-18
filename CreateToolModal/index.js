import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform } from 'react-native';
import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";
import HeaderButton from '../components/HeaderButton';
import { isStringNotEmpty } from "../utils/validateStringUtils";
import toolsStore from "../stores/ToolsStore";

@observer
class CreateToolModal extends React.Component {
  @observable tool;
  @observable title;
  @observable description;

  @action
  handlePost = async () => {
    if (isStringNotEmpty(this.title) && isStringNotEmpty(this.description)) {
      try {
        this.tool = {
          title: this.title,
          description: this.description
        }
        const createdTool = await toolsStore.createTool(this.tool);

        if (createdTool) {
          this.props.navigation.navigate('ToolList')
        } else {
            throw new Error('Did not create tool successfully')
        }

      } catch (err) {
          console.error('Error while creating tool', err);
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.modalHeader}>
          <HeaderButton
            buttonStyle={{marginRight: 30}}
            textStyle={{fontSize: 16, fontWeight: "600"}}
            text={'Post'}
            action={() => this.handlePost()}
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
            onChangeText={title => (this.title = title)}
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
            onChangeText={description => (this.description = description)}
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

export default CreateToolModal;
