import React from 'react';
import { View } from 'react-native';
import { Header } from '../../components';

import { styles } from './styles';

const Home = () => {
  return (
    <View style={styles.container} >
      <Header/>
    </View>
  );
}

export default Home;