import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const ListItem = ({item, onDelete}) => {
  const styles = StyleSheet.create({
    listItem: {
      padding: 15,
      backgroundColor: '#f8f8f8',
      borderBottomWidth: 1,
      borderColor: '#eee',
    },
    listItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    listItemText: {
      fontSize: 18,
    },
  });

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon
          name="times"
          size={20}
          color="firebrick"
          onPress={() => onDelete(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
