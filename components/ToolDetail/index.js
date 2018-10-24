import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import toolsStore from "../../stores/ToolsStore";

class ToolDetail extends React.Component {

  render() {
    const { navigation } = this.props;

    const { toolId } = navigation.state.params;

    const { title, description } = toolsStore.getToolById(toolId);

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
