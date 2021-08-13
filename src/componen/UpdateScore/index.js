import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {LogoAnnah, LogoVamos, LogoVefc, LogoVictorCome} from '../../asset';
import {WARNA_UTAMA} from '../../utils/constant';

const UpdateScore = ({nama1, nama2, score1, score2, date}) => {
  const Logo = klub => {
    if (klub.klub === 'AnNahl FA')
      return <Image source={LogoAnnah} style={styles.logo} />;
    if (klub.klub === 'Vamos FC')
      return <Image source={LogoVamos} style={styles.logo} />;
    if (klub.klub === 'Sragen FC')
      return <Image source={LogoVefc} style={styles.logo} />;
    if (klub.klub === 'Victory FC')
      return <Image source={LogoVictorCome} style={styles.logo} />;

    return <Image source={LogoAnnah} style={styles.logo} />;
  };
  return (
    <TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.container}>
          <Logo klub={nama1} />
          <Text style={styles.nama1}>{nama1}</Text>
        </View>
        <View style={styles.score}>
          <Text style={{fontFamily: 'Poppins-Bold', color: WARNA_UTAMA}}>
            {score1} : {score2}
          </Text>
        </View>
        <View style={styles.container}>
          <Logo klub={nama2} />
          <Text style={styles.nama1}>{nama2}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UpdateScore;

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
    shadowRadius: 0.22,
    elevation: 1,
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  score: {
    alignItems: 'center',
    height: 25,
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
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginHorizontal: -15,
    zIndex: 1,
  },
  nama1: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  nama2: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
});
