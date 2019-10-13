import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import Bot from './Bot';
import Top from './Top';
import Mid from './Mid';

function Main() {
  return (
      <View>
	      <Top />
        <Mid />
        <Bot/>
      </View>
    );
}

export default Main;
