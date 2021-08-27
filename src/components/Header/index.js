import React from 'react';
import { View, Image, Text } from 'react-native';
import Avatar from '../Avatar';
import { logo } from '../../assets';

import { styles } from './styles';
import { fonts } from '../../styles/fonts';

const Header = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={logo} style={styles.logo} resizeMode='center'/>
        <Avatar sizeType="small" />
      </View>
      <View style={styles.middle} >
        <Text style={[fonts.captionBold]} >
          Um lugar lindo para viver.
        </Text>
        <Text style={[fonts.captionRegular]} >
          Procure o lugar que você deseja passar seu tempo
        </Text>
      </View>
      <View style={styles.bottom} >

      </View>
    </View>
  );
}

export default Header;