import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Rodape = () => {
  return (
    <>
      <View style={styles.containerRodape}>
        <View style={styles.containerIcone}>
          <Image source={require('../../../assets/img/logo.png')} style={styles.imagem} />  
          <Text style={styles.textoRodape}>Início</Text>
        </View>
        <View style={styles.containerIcone}>
          <Image source={require('../../../assets/img/logo.png')} style={styles.imagem} />  
          <Text style={styles.textoRodape}>Início</Text>
        </View>
        <View style={styles.containerIcone}>
          <Image source={require('../../../assets/img/logo.png')} style={styles.imagem} />  
          <Text style={styles.textoRodape}>Início</Text>
        </View>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  containerRodape: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#9E4349',
    marginTop: 5,
    position: 'absolute',
    bottom: 0,
    
  },
  containerIcone: {
   
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  textoRodape: {
    fontSize: 12,
    color: '#fff',
  },
  imagem: {
    height: 50,
    width: 50,
  }
});
export default Rodape