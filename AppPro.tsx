import React, { JSX } from 'react'
 
import {
    View,
    Text,
    useColorScheme,
    StyleSheet,
    _View
 } from 'react-native'

 function AppPro(): JSX.Element{  // only a jsx element is accepted

    // const isDarkMode = useColorScheme() === 'dark'
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    return(
        <View style={styles.container}>
            <Text style={isDarkMode? styles.whiteText : styles.darkText}>Hello World</Text>
        </View>
    )
 }

 export default AppPro;

 const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',       // cross axis 
        justifyContent: 'center',   // mian axis
    },
    whiteText:{
        color:'#FFFFFF',
    },
    darkText:{
        color:'#000000',
    }
 })