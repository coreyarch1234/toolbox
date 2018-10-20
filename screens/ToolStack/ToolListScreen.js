import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { observer } from "mobx-react";
import { observable, action, computed } from "mobx";
import HeaderButton from '../../components/HeaderButton';
import ToolCard from '../../components/ToolCard';
import toolsStore from "../../stores/ToolsStore";

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
    const { toolsArray } = toolsStore;

    return (
      <View style={styles.container}>
        <FlatList
          data={toolsArray}
          ListEmptyComponent={<ToolCard title={'Chessboard Analogy'} description={'Think of your thoughts and feelings as chess pieces on a chessboard. Think of the white pieces as the thoughts and feelings you want (e.g., "confidence", “happiness”, “self-esteem”), and the black pieces as the thoughts and feelings'}/>}
          keyExtractor={tool => String(tool.id)}
          renderItem={({ item }) => <ToolCard title={item.title} />}
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
