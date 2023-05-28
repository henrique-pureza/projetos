import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  return(
    <>
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../../assets/logoC.png')}/>
            </TouchableOpacity>
        </View>

        <View style={styles.iconsContainer}>
            <TouchableOpacity>
                <Image style={styles.icons} source={require('../../assets/add.png')} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image style={styles.icons} source={require('../../assets/like3x.png')} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image style={styles.icons} source={require('../../assets/more3x.png')} />
            </TouchableOpacity>
        </View>        
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },

    logo: {
        marginTop: 50,
        width: 200,
        height: 50,
        resizeMode: 'contain',
    },

    icons: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },

    iconsContainer: {
        flexDirection: 'row'
    }
})

export default Header;