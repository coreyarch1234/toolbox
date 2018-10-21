import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class ToolDetail extends React.Component {

  render() {
    const { title, description } = this.props.tool;

    return (
      <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
  },
  title: {
    fontSize: 23,
    fontWeight: "600",
    paddingTop: 20,
    paddingLeft: 20,
  },
  description: {
    fontSize: 18,
    fontWeight: "100",
    paddingTop: 10,
    paddingLeft: 20,
  },
});

export default ToolDetail;
