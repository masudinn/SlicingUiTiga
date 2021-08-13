import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WARNA_UTAMA} from '../../utils/constant';

const SmallButton = ({text}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SmallButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: WARNA_UTAMA,
    padding: 3,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 10,
  },
});
