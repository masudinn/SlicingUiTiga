import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import HeaderInformation from '../../componen/HeaderInformation';
import {Banner, BannerPng} from '../../asset';

const Home = () => {
  return (
    <View style={styles.page}>
      <View style={styles.wrapperHeader}>
        <HeaderInformation />
        <Image source={BannerPng} style={styles.bannerPng} />
      </View>
    </View>
  );
};

export default Home;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapperHeader: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  bannerPng: {
    width: '100%',
    marginTop: windowHeight * 0.016,
    height: windowHeight * 0.14,
  },
});
