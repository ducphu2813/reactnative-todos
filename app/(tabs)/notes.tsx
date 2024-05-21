import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const Note = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <StatusBar style="dark" />
      <Text>Danh sách ghi chú nè</Text>
    </View>
  )
}

export default Note

const styles = StyleSheet.create({})