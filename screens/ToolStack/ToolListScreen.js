import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { observer } from "mobx-react";
import { observable, action, computed } from "mobx";
import HeaderButton from '../../components/HeaderButton';
import ToolCard from '../../components/ToolCard';

//Tool Screen. This will be the list of technique posts
@observer
export default class ToolListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Tool Box',
    headerRight: (
      <HeaderButton
        buttonStyle={{marginRight: 30}}
        textStyle={{fontSize: 16, fontWeight: "600"}}
        text={'Add'}
        action={() => navigation.navigate('CreateTool')}
      />
    )
  });

  render() {
    return (
      <View style={styles.container}>
        <ToolCard
          title={"This is my first post"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});
