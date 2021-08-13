import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  View,
} from 'react-native';
import {LogoAnnah, LogoVamos, LogoVefc, LogoVictorCome} from '../../asset';
import SmallButton from '../SmallButton';

const Club = ({nama, statistik}) => {
  const Logo = () => {
    if (nama === 'AnNahl FA')
      return <Image source={LogoAnnah} style={styles.logo} />;
    if (nama === 'Vamos FC')
      return <Image source={LogoVamos} style={styles.logo} />;
    if (nama === 'Sragen FC')
      return <Image source={LogoVefc} style={styles.logo} />;
    if (nama === 'Vicory FC')
      return <Image source={LogoVictorCome} style={styles.logo} />;

    return <Image source={LogoAnnah} style={styles.logo} />;
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Logo />
      <Text style={styles.nama}>{nama}</Text>
      <View style={styles.statistikstyle}>
        <SmallButton text={statistik} />
      </View>
    </TouchableOpacity>
  );
};

export default Club;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  logo: {
    width: 52,
    height: 52,
  },
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginRight: 10,
    padding: 10,
    marginBottom: 10,
  },
  nama: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  statistik: {
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  statistikstyle: {
    position: 'absolute',
    bottom: -10,
    height: windowHeight * 0.03,
  },
});
