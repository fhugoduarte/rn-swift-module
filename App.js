import React from 'react';
import {View, Text, NativeModules} from 'react-native';

console.log({NativeModules});

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 28, fontWeight: 'bold'}}>Swift Module Test</Text>
    </View>
  );
}
