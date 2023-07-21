import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ScrollableText = () => {
  const wordArray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

  const renderItem = ({ item }) => (
    <Text style={styles.item}>{item}</Text>
  );

  return (
    <View style={{ }}><FlatList
    data={wordArray}
    renderItem={renderItem}
    keyExtractor={(item, index) => index.toString()}
    horizontal
    showsHorizontalScrollIndicator={false}
  /></View>
    
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    padding: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ScrollableText