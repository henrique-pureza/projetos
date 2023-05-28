import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from '../components/home/Header';
import Post from '../components/home/Post';

const HomeScreen = () => {
  return(
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Post />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'white',
        flex: 1,
    }
})

export default HomeScreen;