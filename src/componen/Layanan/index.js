import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Iconbooking, Iconjointeam, IconLangganan} from '../../asset';
import {WARNA_SEKUNDER, WARNA_UTAMA} from '../../utils/constant';

const Layanan = ({title, active, onPress}) => {
  const Icon = () => {
    if (title === 'Paket Langganan') return <IconLangganan />;
    if (title === 'Booking Lapangan') return <Iconbooking />;
    if (title === 'Join Team') return <Iconjointeam />;
    return <IconLangganan />;
  };
  return (
    <TouchableOpacity style={styles.container(active)} onPress={onPress}>
      <View style={styles.icon}>
        <Icon />
        <Text style={styles.texttitle(active)}>{title.replace(' ', '\n')}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Layanan;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: active => ({
    alignItems: 'center',
    width: windowWidth * 0.24,
    backgroundColor: active ? WARNA_UTAMA : 'white',
    borderRadius: 10,
    padding: 10,
    borderColor: WARNA_SEKUNDER,
    borderWidth: active ? 0 : 2,
  }),
  icon: {marginTop: -30},
  texttitle: active => ({
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    color: active ? 'white' : WARNA_SEKUNDER,
    textAlign: 'center',
    fontSize: 12,
    marginTop: windowHeight * 0.013,
  }),
});
