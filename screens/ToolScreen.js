import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ToolCard from '../components/ToolCard';
//Tool Screen. This will be the list of technique posts
export default class ToolScreen extends React.Component {
  static navigationOptions = {
    header: (
      <View style={{height: 100, backgroundColor: "green"}}></View>
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <ToolCard
          title={"This is my first post"}
          description={"This is the description of the post"}
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
    alignItems: "flex-start"
  },
});
