import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";


const Cabecalho = () => {
  return (
    <>
      <View style={styles.containerTitulo}>
        <View>
          <Image source={require('../../../assets/img/logo.png')} style={styles.imagem} />

        </View>
        <View>
          <Text style={styles.textoTitulo}>DAHLIA</Text>
        </View>
        <View></View>
      </View>
      <View style={styles.linhaHorizontal}></View>
    </>
  )
};


const styles = StyleSheet.create({
  containerTitulo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0,
    backgroundColor: '#7C3242'
    
  },
  linhaHorizontal: {
    borderWidth: 1,
    borderColor: '#A1A5AA',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 10,
    marginBottom: 2,
  },
  textoTitulo: {
    fontSize: 50,
    //fontFamily: 'Poppins_500Medium',
    color: 'white',
    //fontWeight: 'bold',
  },
  textoDescricao: {
    fontSize: 9,
  },
  imagem: {
    height: 80,
    width: 80,
    borderRadius: 100,
    //backgroundColor: 'white',
    tintColor: 'white',
    padding: '0',
  }
});

export default Cabecalho