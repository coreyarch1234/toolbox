import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { observer } from "mobx-react";
import { truncateText } from "../../utils/truncateText";

@observer
class ToolCard extends React.Component {

  _handlePress = () => {
    const { tool, navigation } = this.props;
    // console.log('handling press tool', tool)
    // console.log('handling press navigation.navigate',navigation.navigate)
    console.log(navigation.navigate)
    navigation.navigate('ToolDetail', {toolId: tool.id});
  }

  render() {
    const { title, description } = this.props.tool;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this._handlePress}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{truncateText(description, 75)}</Text>
          <View style={styles.bottomLine} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
  bottomLine: {
    borderBottomWidth: 2,
    borderBottomColor: "rgb(211, 211, 211)",
    width: "100%",
    marginTop: 20,
  }
});

export default ToolCard;
