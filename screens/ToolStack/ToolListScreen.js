import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { observer } from "mobx-react";
import HeaderButton from '../../components/HeaderButton';
import toolsStore from "../../stores/ToolsStore";
import ToolList from "../../components/ToolList";

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
    const { navigation } = this.props;
    // console.log('in tool list screen navigation',navigation)
    return (
      <View style={styles.container}>
        <ToolList navigation={navigation} />
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
