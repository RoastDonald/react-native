import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, incrementCount] = useState('shit');

  const handleClick = (): void => {
    incrementCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button title='Change smth' onPress={handleClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
