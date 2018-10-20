import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { observer } from "mobx-react";
import { truncateText } from "../utils/truncateText";

const ToolCard = observer(({ title, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{truncateText(description, 75)}</Text>
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
