import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Cabecalho from "../Componentes/Cabecalho";
import { ScrollView } from "react-native-gesture-handler";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Psicologico from "./views/psicologico";
import { NavigationContainer } from "@react-navigation/native";
import Juridico from "./views/juridico";

const Stack = createNativeStackNavigator();
    function MyStack() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Psicologico" component={Psicologico} />
                <Stack.Screen name="Juridico" component={Juridico} />
            </Stack.Navigator>
        )
    }

const Apoio = ({ navigation }) => {

    return (
        <>      
            <SafeAreaView>
                <MyStack></MyStack>
                <Cabecalho></Cabecalho>
                <ScrollView>
                    <View style={styles.containerDuplo}>
                        <TouchableOpacity style={styles.containerApoio} onPress={() => navigation.navigate('Psicologico')}>
                            <Text style={styles.texto}>Psicologico</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerApoio} onPress={() => navigation.navigate('Juridico')}>
                            <Text style={styles.texto}>Jurídico</Text>
                            
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerDuplo}>
                        <TouchableOpacity style={styles.containerApoio}>
                            <Text style={styles.texto}>Profissional</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerApoio}>
                            <Text style={styles.texto}>Hospitalar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerDuplo}>
                        <TouchableOpacity style={styles.containerApoio}>
                            <Text style={styles.texto}>CREAS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerApoio}>
                            <Text style={styles.texto}>Casas de apoio</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerMensagem}>

                        <Text style={styles.texto2}>Gostaria de registrar um serviço gratúrito de apoio a vitimas de violencia contra a mulher? </Text>
                    </View>
                    <View style={styles.containerMensagem2}>
                        <TextInput style={styles.textInput} placeholder="    Digite aqui" />
                        <View style={styles.containerBotao}>
                            <Button title="Enviar" color="white" />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({

    containerDuplo: {
        flexDirection: 'row',
        justifyContent: 'center',
        //backgroundColor: '#000',
    },
    containerApoio: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#fff',
        margin: 5,
        width: 180,
        height: 100,
    },
    containerMensagem2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    containerMensagem: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 30,
    },

    containerBotao: {
        padding: 5,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#7C3242',
        height: 50,
        flex: 1,

    },
    texto: {
        fontSize: 15,
        color: '#4F4F4F',
        fontFamily: 'Poppins_500Medium',
        textTransform: 'uppercase',
    },
    texto2: {
        fontSize: 15,
        color: '#4F4F4F',
        fontFamily: 'Poppins_200ExtraLight',
        textAlign: 'justify',
    },
    textInput: {
        flex: 3,
        backgroundColor: "#fff",
        height: 130,
        borderRadius: 5,
        padding: 20,
    },
})

export default Apoio;