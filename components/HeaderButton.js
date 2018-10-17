import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Colors from '../constants/Colors';

export default class HeaderButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={this.props.buttonStyle}
        hitSlop={this.props.hitSlop || { top: 10, bottom: 5, left: 15, right: 30 }} 
        onPress={this.props.action}>
        <Text style={this.props.textStyle}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
