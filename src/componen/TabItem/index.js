import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {WARNA_SEKUNDER, WARNA_UTAMA} from '../../utils/constant';
import {
  IconHome,
  IconHomeAktif,
  IconLapanganAktif,
  IconLapangan,
  IconUserAktif,
  IconUser,
} from '../../asset';

const TabItem = ({isFocused, label, onPress, onLongPress}) => {
  const Icon = () => {
    if (label === 'Home') return isFocused ? <IconHomeAktif /> : <IconHome />;
    if (label === 'Jadwal')
      return isFocused ? <IconLapanganAktif /> : <IconLapangan />;
    if (label === 'Akun') return isFocused ? <IconUserAktif /> : <IconUser />;

    return <IconHome />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={isFocused ? styles.isFocusContainer : styles.conteiner}>
      <Icon />
      {isFocused && <Text style={styles.label}>{label.toUpperCase()}</Text>}
    </TouchableOpacity>
  );
};
export default TabItem;

const styles = StyleSheet.create({
  conteiner: {alignContent: 'center', paddingVertical: 5},
  label: {
    color: WARNA_UTAMA,
    fontSize: 16,
    marginLeft: 8,
    fontFamily: 'Poppins-Bold',
  },
  isFocusContainer: {
    alignContent: 'center',
    paddingVertical: 5,
    backgroundColor: WARNA_SEKUNDER,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
  },
});
