import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import toolsStore from "../../stores/ToolsStore";
import { mockData } from "../../MockData";
import ToolCard from '../ToolCard';
import { observer } from "mobx-react";

@observer
class ToolList extends React.Component {
  render() {
    const { toolsArray } = toolsStore;
    const { navigation } = this.props;
    return (
      <View>
        <FlatList
          data={toolsArray}
          ListEmptyComponent={<ToolCard tool={mockData.defaultTool} navigation={navigation}/>}
          keyExtractor={tool => String(tool.id)}
          renderItem={({ item }) => <ToolCard tool={item} navigation={navigation} />}
        />
      </View>
    )
  }
}

export default ToolList;
