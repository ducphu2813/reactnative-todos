import { Stack } from 'expo-router';
import React from 'react';
import 'react-native-reanimated';

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen 
        name="(tabs)" 
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );

}

export default StackLayout;