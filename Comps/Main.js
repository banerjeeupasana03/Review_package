import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import Bot from './Bot';
import Top from './Top';

function Main() {
  return (
      <View>
	    <Top />
        <Bot/>
      </View>
    );
}

export default Main;
