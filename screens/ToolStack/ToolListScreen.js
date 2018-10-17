import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ToolCard from '../../components/ToolCard';

//Tool Screen. This will be the list of technique posts
export default class ToolListScreen extends React.Component {
  static navigationOptions = {
    title: 'Tool Box',
  };

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
