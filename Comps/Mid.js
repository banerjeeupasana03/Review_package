import React from 'react';
import { useState } from 'react';

import {View, Text, Picker} from 'react-native';


function Mid() {

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={this.state.language}
        style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
        }>
        <Picker.Item label="Color1" color="#ffffcc" value="color1" />
        <Picker.Item label="Color2" color="#e6b3ff" value="color2" />
      </Picker>
	  </View>
  );
}
export default Mid;
