import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, ScrollView, Button, Pressable, TouchableHighlight  } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Swipeable } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import todoList from './../../newdata.json';

const deleteBtnColor = '#EB6383';

const Todos = () => {

  const handlePress = (id: any) => {
    console.log(`Item with id ${id} was pressed`);
    // Add your logic here
  };

  const renderRightActions = (id: number) => {
    return (
        <View style={styles.rightAction}>
            <Pressable
              style={styles.button}
              onPress={() => {
                console.log(`Delete button ${id} was pressed`);
              }} 
            >
              <Text style={styles.btnText}>Delete</Text>
            </Pressable>
        </View>
     
    );
  };

  // event touch cho 1 view: 
  // onTouchEnd={() => handlePress(todo.id)}

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {todoList.map( todo => {
            return (
              <TouchableOpacity activeOpacity={0.7} key={todo.id} onPress={() => handlePress(todo.id)}>
                <Swipeable key={todo.id} renderRightActions={() => renderRightActions(todo.id)}>
                  <View style={styles.card} key={todo.id}>
                    <Text>{todo.title}</Text>
                    <Text>{todo.note}</Text>
                  </View>
                </Swipeable>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default () => {
  return (
    <GestureHandlerRootView>
      <Todos />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
  scrollView: {
    backgroundColor: '#B5C18E',
    paddingHorizontal: 12,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  rightAction: {
    // backgroundColor: '#dd2c00',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 'auto',
    width: 100,
  },
  button: {
    backgroundColor: deleteBtnColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: '85%',
    width: '100%',
  },
  btnText: {
    color: '#FFF',
  },
})