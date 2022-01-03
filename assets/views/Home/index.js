import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Cabecalho from "../Componentes/Cabecalho";



const Home = () => {

  return (
    <>
      <SafeAreaView >
        <Cabecalho></Cabecalho>
        <ScrollView>
        <View style={styles.containerGeral}>
          <Text style={styles.texto1}> O que é o Dahlia?</Text>
          <Text style={styles.texto2}>
            Dahlia foi desenvolvido para informar todas as pessoas interessadas sobre o assunto da violencia contra a mulher. O que parece ser enraizado e naturalizado na sociedade é totalmente errado. Até mesmo o conceito de violência é mal interpretado: encostar e agredir fisicamente em uma mulher é uma das formas, porém pressões psicológicas, manipulação, chantagem e outros são estilos violentos de reprimir a mulher.
          </Text>
        </View>
       
        <View style={styles.containerGeral}>
          <Text style={styles.texto1}> Por que ?</Text>
          <Text style={styles.texto2}>
            A violência contra mulheres constitui-se em uma das principais formas de violação dos seus direitos humanos, atingindo-as em seus direitos à vida, à saúde e à integridade física. Ela é estruturante da desigualdade de gênero.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({

  containerGeral: {

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 35,
  },
  texto1: {
    fontSize: 15,
    color: '#4F4F4F',
    paddingStart: 24,
    paddingTop: 15,
    paddingBottom: 5,
    fontFamily: 'Poppins_500Medium',
    //fontWeight: '',

  },
  texto2: {
    fontSize: 15,
    color: '#4F4F4F',
    paddingHorizontal: 24,
    paddingTop: 15,
    paddingBottom: 5,
    fontFamily: 'Poppins_200ExtraLight',
    textAlign: 'justify',

  },

});

export default Home;