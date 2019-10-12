import React from 'react';
import { useState } from 'react';

import {
  TextInput
} from 'react-native';
import {View, Text, Button} from 'react-native';


function Bot() {
  const [value, onChangeText] = React.useState('Input test here');

  return ( <
    TextInput style = {
      {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
      }
    }
    onChangeText = {
      text => onChangeText(text)
    }
    value = {
      value
    }
    />
  );
  <Button
          title="Send"
          onPress={() => Alert.alert('You sent:')}
        />
}
export default Bot;
