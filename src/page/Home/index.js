import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import HeaderInformation from '../../componen/HeaderInformation';
import {BannerPng} from '../../asset';
import {Layanan, SmallButton, Club, UpdateScore} from '../../componen';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layanan: 'booking',
    };
  }

  clickLayanan(value) {
    this.setState({
      layanan: value,
    });
  }

  render() {
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperHeader}>
            <HeaderInformation />
            <Image source={BannerPng} style={styles.bannerPng} />
          </View>
          <View style={styles.label}>
            <Text style={{fontSize: 14, fontFamily: 'Poppins-Light'}}>
              Ayooo{' '}
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: 20,
                }}>
                Putsal Bebarengan
              </Text>
            </Text>
          </View>
          <View style={styles.layanan}>
            <Layanan
              title="Paket Langganan"
              onPress={() => this.clickLayanan('paket')}
              active={this.state.layanan === 'paket' ? true : false}
            />
            <Layanan
              title="Booking Lapangan"
              onPress={() => this.clickLayanan('booking')}
              active={this.state.layanan === 'booking' ? true : false}
            />
            <Layanan
              title="Join Team"
              onPress={() => this.clickLayanan('join')}
              active={this.state.layanan === 'join' ? true : false}
            />
          </View>
          <View style={styles.labelsparing}>
            <Text style={{fontSize: 15, fontFamily: 'Poppins-Light'}}>
              Pilih Tim{' '}
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: 20,
                }}>
                Sparing {''}
              </Text>
              <Text style={{fontSize: 15, fontFamily: 'Poppins-Light'}}>
                Kamu{''}
              </Text>
            </Text>
            <View style={styles.smallbutton}>
              <SmallButton text="Lihat Semua" />
            </View>
          </View>
          <View style={styles.scrollhorizontal}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.logosparing}>
                <Club nama="Vamos FC" statistik="WDWDDWW" />
                <Club nama="Sragen FC" statistik="WDWDDWW" />
                <Club nama="AnNahl FA" statistik="WDWDDWW" />
                <Club nama="Vicory FC" statistik="WDWDDWW" />
              </View>
            </ScrollView>
          </View>
          <View style={styles.labelsparing}>
            <Text style={{fontSize: 16, fontFamily: 'Poppins-Light'}}>
              Update Score
            </Text>
            <View style={styles.smallbutton}>
              <SmallButton text="Lihat Semua" />
            </View>
          </View>
          <View style={styles.scrollhorizontal}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.updatescore}>
                <UpdateScore
                  nama1="Annahl FC"
                  nama2="Vamos FC"
                  score1="2"
                  score2="0"
                  date="Minggu, 17 Agustus 2018"
                />
                <UpdateScore
                  nama1="Sragen FC"
                  nama2="Victory FC"
                  score1="2"
                  score2="2"
                  date="Minggu, 18 Agustus 2018"
                />
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  scrollhorizontal: {
    paddingHorizontal: 30,
  },
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
  label: {
    marginVertical: windowHeight * 0.025,
    marginLeft: 30,
  },
  labelsparing: {
    marginVertical: windowHeight * 0.025,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  layanan: {
    marginTop: windowHeight * 0.029,
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  logosparing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  updatescore: {
    flexDirection: 'row',
  },
});
