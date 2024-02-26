import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <View style={styles.container}>
        <View></View>
    </View>
  )
}

const styles = StyleSheet.create({container: {
    // flex: 1,
    padding: 2,
    borderColor: 'red',
    borderWidth: 1,
    width: 100,
    height: 100,
    borderRadius: 16,

}})