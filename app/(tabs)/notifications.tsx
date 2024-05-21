import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const Notis = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <StatusBar style="dark" />
      <Text>danh sách lời nhắc nè</Text>
    </View>
  )
}

export default Notis

const styles = StyleSheet.create({})