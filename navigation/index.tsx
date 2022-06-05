/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { MaterialCommunityIcons, Octicons} from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, Pressable, View} from 'react-native';

import Colors from '../constants/Colors';
import NotFoundScreen from '../screens/NotFoundScreen';
import {RootStackParamList, RootTabParamList} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import {MainTabNavigator} from "./MainTabNavigator";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: Colors.light.tint
        },
        headerTintColor: Colors.light.background,
        headerTitleStyle: {
            fontWeight: 'bold'
        },
    }}>
      <Stack.Screen
          name="Root"
          component={MainTabNavigator}
          options={{
              title: 'WhatsApp',
              headerRight: () => (
                  <View style={{
                      flexDirection: 'row',
                      width: 60,
                      marginRight: 10,
                      justifyContent: 'space-between'}}>
                      <Octicons name="search" size={22} color={'white'}/>
                      <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'}/>
                  </View>
              )
          }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      {/*<Stack.Group screenOptions={{ presentation: 'modal' }}>*/}
      {/*  <Stack.Screen name="Modal" component={ModalScreen} />*/}
      {/*</Stack.Group>*/}
    </Stack.Navigator>
  );
}