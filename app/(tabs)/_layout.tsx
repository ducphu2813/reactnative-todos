import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const activeLabelColor = '#046582';
const activeTabBackgroundColor = '#CDFCF6';
const inactiveColor = '#92C7CF';

export default () => {
    const insets = useSafeAreaInsets();
    return (
        
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: activeLabelColor,
                tabBarActiveBackgroundColor: activeTabBackgroundColor,
                tabBarInactiveTintColor: inactiveColor,
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 2,
                },
                tabBarStyle: {
                    height: 55 + insets.bottom,
                },
            }}
        >
            
            <Tabs.Screen 
                name="index"
                options={{
                    title: 'Công việc',
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => 
                        <MaterialIcons name="assignment-turned-in" size={size} color={focused ? activeLabelColor : inactiveColor} />
                }}
            />
            <Tabs.Screen 
                name="notes"
                options={{
                    title: 'Ghi Chú',
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => 
                        <MaterialCommunityIcons name="note-edit-outline" size={size} color={focused ? activeLabelColor : inactiveColor} />
                }}
            />
            <Tabs.Screen 
                name="notifications"
                options={{
                    title: 'Lời Nhắc',
                    headerShown: false,
                    tabBarIcon: ({focused, size }) => 
                        <Ionicons name="notifications-outline" size={size} color={focused ? activeLabelColor : inactiveColor} />
                }}
            />
        </Tabs>
    );
}