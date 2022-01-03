import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppLoading from 'expo-app-loading';
import { Poppins_100Thin, Poppins_200ExtraLight, Poppins_500Medium, useFonts } from '@expo-google-fonts/poppins'
import { Italianno_400Regular } from '@expo-google-fonts/italianno'
import Denuncia from './views/Denuncia';
import Home from './views/Home';
import Apoio from './views/Apoio';
import Tipologias from './views/Tipologias';
import Psicologico from './views/Apoio/views/psicologico';
import Juridico from './views/Apoio/views/juridico';

export default function App() {

  const [fonts] = useFonts({
    Poppins_100Thin,
    Italianno_400Regular,
    Poppins_200ExtraLight,
    Poppins_500Medium,
  });
  if (!fonts) {
    return <AppLoading />;
  }

  const Tab = createMaterialBottomTabNavigator();
  function Mytab() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#000000"
        barStyle={{ paddingBottom: 10, backgroundColor: '#7C3242' }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Tipologias"
          component={Tipologias}
          options={{
            tabBarLabel: 'Tipologias',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bullhorn" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Apoio"
          component={Apoio}
          options={{
            tabBarLabel: 'Apoio',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-group" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Denuncia"
          component={Denuncia}
          options={{
            tabBarLabel: 'Denuncia',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="police-badge" color={color} size={26} />
            ),
          }}
        />
        {/* <Tab.Screen name="Psicologico" component={Psicologico} />
        <Tab.Screen name="Juridico" component={Juridico} /> */}

      </Tab.Navigator>

    )
  }


  return (
    <NavigationContainer>
      <Mytab />
    </NavigationContainer>

  );
}




