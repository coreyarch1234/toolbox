import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { observer } from "mobx-react";
import { computed } from "mobx";
import toolsStore from "../../stores/ToolsStore";
import ToolDetail from "../../components/ToolDetail";

@observer
class ToolDetailScreen extends React.Component {

  tool() {
      const { navigation } = this.props;

      const toolId = navigation.getParam("toolId");

      return toolsStore.getToolById(toolId);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ToolDetail tool={this.tool()} navigation={navigation}/>
      </View>
    )
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

export default ToolDetailScreen;
