import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { observer } from "mobx-react";

const ToolCard = observer(({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.bottomLine}></View>
    </View>
  )
});

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
    fontWeight: "300",
    paddingTop: 20,
    paddingLeft: 20,
  },
  bottomLine: {
    borderBottomWidth: 0.5,
    width: "60%",
    marginTop: 20,
    marginLeft: 23
  }
});

export default ToolCard;
