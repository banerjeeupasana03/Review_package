import React from 'react';
import { useState } from 'react';

import {View, Picker} from 'react-native';


function Mid() {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <View itemStyle={{color:'#ffffcc'}}>

      <Picker
        selectedValue={selectedItem}
        style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
        }
      >
        <Picker.Item label="Color1" color="#ffffcc" value="color1" />
        <Picker.Item label="Color2" color="#e6b3ff" value="color2" />
      </Picker>
	  </View>
  );
}
export default Mid;
