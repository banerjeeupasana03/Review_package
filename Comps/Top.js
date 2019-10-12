import React from 'react';
import { useState } from 'react';

import {View, Text, Switch} from 'react-native';


function Top() {
	const [value, onChangeValue] = React.useState('White');
	
	
  return (
  
	  <View style={{flex:1, backgroundColor:{value}, alignItems:'center', justifyContent:'center' }}>
	  
		<Text>{value} Mode</Text>
		
		 <Switch
		 onValueChange = {
			 value => onChangeValue('Black')
		 }
		  />
	  </View>
	  
  );
}
export default Top;
