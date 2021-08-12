import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IconAkun, IconStadiumHeader} from '../../asset/icon';

const HeaderInformation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.akun}>
        <View style={{flexDirection: 'row'}}>
          <IconAkun />
          <View style={styles.textwrapper}>
            <Text style={styles.username}>Hello, </Text>
            <Text style={styles.hello}>udin</Text>
          </View>
        </View>
        <View style={styles.jadwalinfo}>
          <View style={styles.textwrapperjadwal}>
            <Text style={styles.jam}>20.00 WIB</Text>
            <Text style={styles.waktu}>Minggu, 08-08-2021</Text>
          </View>
          <View style={styles.iconjadwalinfo}>
            <IconStadiumHeader />
            <Text style={styles.labelnextjadwal}>Next Jadwal</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaderInformation;

const styles = StyleSheet.create({
  continer: {
    flexDirection: 'row',
  },
  textwrapper: {
    marginLeft: 10,
  },
  textwrapperjadwal: {
    marginRight: 10,
  },
  akun: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hello: {
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
  },
  username: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
  },
  jadwalinfo: {
    flexDirection: 'row',
  },
  jam: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'right',
    fontSize: 11,
  },
  waktu: {
    fontFamily: 'Poppins-Light',
    fontSize: 11,
  },
  iconjadwalinfo: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  labelnextjadwal: {
    color: '#0E8742',
    fontSize: 11,
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
  },
});
