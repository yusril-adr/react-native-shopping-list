import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = ({text}) => {
  const styles = StyleSheet.create({
    header: {
      height: 60,
      padding: 15,
      backgroundColor: 'darkslateblue',
    },
    text: {
      color: 'white',
      fontSize: 23,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.header}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Header;
