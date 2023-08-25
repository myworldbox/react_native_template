import * as init from '../init/export'

const ScrollableText = () => {
  const wordArray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

  const renderItem = ({ item }: any) => (
    <init.react_native.Text style={styles.item}>{item}</init.react_native.Text>
  );

  return (
    <init.react_native.View style={{}}><init.react_native.FlatList
      data={wordArray}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    /></init.react_native.View>

  );
};

const styles = init.react_native.StyleSheet.create({
  item: {
    fontSize: 20,
    padding: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ScrollableText