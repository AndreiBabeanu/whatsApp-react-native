import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import TabOneScreen from "../screens/TabOneScreen";
import {RootTabParamList, RootTabScreenProps} from "../types";
import {Pressable, Text} from "react-native";
import {FontAwesome, Fontisto} from "@expo/vector-icons";
import TabTwoScreen from "../screens/TabTwoScreen";
import * as React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"

const MainTab = createMaterialTopTabNavigator<RootTabParamList>();

export const MainTabNavigator = () => {
    const colorScheme = useColorScheme();

    return (
        <MainTab.Navigator
            initialRouteName="Camera"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].background,
                tabBarStyle: {
                    backgroundColor: Colors[colorScheme].tint
                },
                tabBarIndicatorStyle: {
                    backgroundColor: Colors[colorScheme].background,
                    height: 4,
                },
                tabBarLabelStyle: {
                    fontWeight: 'bold'
                },
                tabBarShowIcon: true

            }}>
            {/*<MainTab.Screen*/}
            {/*    name="Camera"*/}
            {/*    component={TabOneScreen}*/}
            {/*    options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({*/}
            {/*        title: 'Tab One',*/}
            {/*        tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,*/}
            {/*        headerRight: () => (*/}
            {/*            <Pressable*/}
            {/*                onPress={() => navigation.navigate('Modal')}*/}
            {/*                style={({ pressed }) => ({*/}
            {/*                    opacity: pressed ? 0.5 : 1,*/}
            {/*                })}>*/}
            {/*                <FontAwesome*/}
            {/*                    name="info-circle"*/}
            {/*                    size={25}*/}
            {/*                    color={Colors[colorScheme].text}*/}
            {/*                    style={{ marginRight: 15 }}*/}
            {/*                />*/}
            {/*            </Pressable>*/}
            {/*        ),*/}
            {/*    })}*/}
            {/*/>*/}
            <MainTab.Screen
                name="Camera"
                component={TabTwoScreen}
                options={{
                    title: 'Camera',
                    tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={20}/>,
                    tabBarLabel: () => null,
                }}
            />
            <MainTab.Screen
                name="Chats"
                component={TabTwoScreen}
                options={{
                    title: 'Chats',
                }}
            />
            <MainTab.Screen
                name="Status"
                component={TabTwoScreen}
                options={{
                    title: 'Status',
                }}
            />
            <MainTab.Screen
                name="Calls"
                component={TabTwoScreen}
                options={{
                    title: 'Calls',
                }}
            />
        </MainTab.Navigator>
    );
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return (
        <Text></Text>
        );
}
