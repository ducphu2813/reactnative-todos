import {View, Text} from 'react-native'
import { useLocalSearchParams } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const DetailPage = () => {
    const { id } = useLocalSearchParams();
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: `Detail for: ${id}`,
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 18,
            },
        });
    }, [navigation, id]);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            
        >
            <Text>
                Detail for: {id}
            </Text>
        </View>
        
    )
}

export default DetailPage