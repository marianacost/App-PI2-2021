import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Cabecalho from "../../Componentes/Cabecalho";


const Psicologico = ({navigation}) => {
    return(
        <>
        <SafeAreaView >
          <Cabecalho></Cabecalho>
          <ScrollView>
          <View style={styles.containerGeral}>
            <Text style={styles.texto1}> Clínica de Psicologia Unipam</Text>
            <Text style={styles.texto2}>
              Endereço: R. Olímpio Pereira de Melo, 388-458 - Caiçaras, Patos de Minas - MG, 38702-164
              Telefone: 38230300
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
export default Psicologico;