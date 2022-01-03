import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Cabecalho from "../Componentes/Cabecalho";
import { ScrollView } from "react-native-gesture-handler";
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';


const Tipologias = () => {

    return (
        <>
            <SafeAreaView>
                <Cabecalho></Cabecalho>
                <ScrollView>
                    <View style={styles.containerGeral}>
                        <View style={styles.containerDescrição}>
                            <Collapse>
                                <CollapseHeader>
                                    <View>
                                        <Text style={styles.texto1}>
                                            Categoria 1 – Violência Doméstica e Familiar
                                        </Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Text style={styles.texto2}>Tipo 1 – Violência física. Exemplos: empurrões, tapas, socos, estrangulamento, puxões de cabelo, chutes, espancamento, facadas, uso de arma de fogo.</Text>
                                    <Text style={styles.texto2}>Tipo 2 – Violência Sexual. Exemplos: estupro marital através de ameaça, coerção, força física ou chantagens; estupro por outros familiares através de ameaça, coerção, força física ou chantagens.</Text>
                                    <Text style={styles.texto2}>Tipo 3 – Violência Psicológica. Exemplos: humilhações, xingamentos, destruição da autoestima e ameaças.</Text>
                                    <Text style={styles.texto2}>Tipo 4 – Violência Moral. Exemplos: falar mal da mulher para terceiros, exposição da vida particular, pornografia de vingança.</Text>
                                    <Text style={styles.texto2}>Tipo 5 – Violência patrimonial. Exemplos: destruição de bens, retenção de bens, retenção ou destruição de documentos, destruição de objetos de valor afetivo, controle financeiro contra a vontade da mulher.</Text>
                                </CollapseBody>
                            </Collapse>
                        </View>
                        <View style={styles.containerDescrição}>
                            <Collapse>
                                <CollapseHeader>
                                    <View>
                                        <Text style={styles.texto1}>
                                            Categoria 2 – Micro Violências
                                        </Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Text style={styles.texto2}>Tipo 6 – Gaslighting: Quando o agressor convence a vítima de que ela está fora de seu juízo racional perfeito a fim de manipular.</Text>
                                    <Text style={styles.texto2}>Tipo 7 – Bropriating: Quando a agressor se apropria das ideias da vítima para trazer os créditos da ideia para si ou para confundi-la.</Text>
                                    <Text style={styles.texto2}>Tipo 8 – Mansplaining: Quando o agressor explana sobre um assunto em tom de autoridade para uma mulher que entende mais daquele assunto ou quando a mesma não pediu a opinião dele sobre determinado tema e mesmo assim, o homem insiste em “ensinar”.</Text>
                                    <Text style={styles.texto2}>Tipo 9 – Manterrupting: Quando o agressor interrompe a mulher impedindo que ela complete um raciocínio e consiga organizar uma ideia verbalmente.</Text>
                                </CollapseBody>
                            </Collapse>
                        </View>
                        <View style={styles.containerDescrição}>
                            <Collapse>
                                <CollapseHeader>
                                    <View>
                                        <Text style={styles.texto1}>
                                            Categoria 3 – Relacionamentos Tóxicos e Abusivos
                                        </Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Text style={styles.texto2}>Tipo 10 – Ciúmes excessivo</Text>
                                    <Text style={styles.texto2}>Tipo 11 – Construção de dependência emocional</Text>
                                    <Text style={styles.texto2}>Tipo 12 – Controle de senhas e comunicação</Text>
                                    <Text style={styles.texto2}>Tipo 13 – Manipulação</Text>
                                    <Text style={styles.texto2}>Tipo 14 – Isolamento de outras relações</Text>
                                    <Text style={styles.texto2}>Tipo 15 – Controle da vestimenta</Text>
                                    <Text style={styles.texto2}>Tipo 16 – Perda de identidade</Text>
                                    <Text style={styles.texto2}>Tipo 17 – Chantagem emocional</Text>
                                    <Text style={styles.texto2}>Tipo 18 – Cárcere privado</Text>
                                </CollapseBody>
                            </Collapse>
                        </View>
                        <View style={styles.containerDescrição}>
                            <Collapse>
                                <CollapseHeader>
                                    <View>
                                        <Text style={styles.texto1}>
                                            Categoria 4 – violências em ambientes públicos
                                        </Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Text style={styles.texto2}>Tipo 19 – Importunação Sexual: Podem ser considerados atos libidinosos, práticas e comportamentos que tenham finalidade de satisfazer desejo sexual, tais como: apalpar, lamber, tocar, desnudar, masturbar-se ou ejacular em público, dentre outros.</Text>
                                    <Text style={styles.texto2}>Tipo 20 – Assédio Sexual: É definido por lei como o ato de constranger alguém, com o intuito de obter vantagem ou favorecimento sexual, prevalecendo-se o agente de sua condição de superior hierárquico ou ascendência inerentes ao exercício de emprego, cargo ou função.</Text>
                                    <Text style={styles.texto2}>Tipo 21 – Estupro por desconhecidos: forma de violência sexual menos comum, quando o agressor é no geral um desconhecido e aborda a vítima em ambientes públicos como ruas, estradas ou becos. Geralmente implica no uso de força física ou ameaça com facas e armas de fogo</Text>
                                    <Text style={styles.texto2}>Tipo 22 – Crimes de ódio contra mulheres: este tipo de violência pode ser física, moral ou psicológica. Ela se relaciona geralmente com aspectos identitários (identidade de gênero ou orientação sexual contra LGBTQI+ – principalmente nos casos de mulheres lésbicas ou transexuais).</Text>
                                </CollapseBody>
                            </Collapse>
                        </View>
                        <View style={styles.containerDescrição}>
                            <Collapse>
                                <CollapseHeader>
                                    <View>
                                        <Text style={styles.texto1}>
                                            Categoria 5 – Violências invisibilizadas – atuam de maneira estrutural simbólica vinculando a cultura e a organização social da vida cotidiana.</Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Text style={styles.texto2}>Tipo 23 – Silenciamento cotidiano: Culturalmente mulheres são silenciadas, pois diante da hierarquia social estabelecida entre homens e mulheres, a palavra das mulheres é percebida como de menor valor. Um exemplo é o quanto se duvida da palavra da vítima em casos de estupro, quando se questiona “o que ela estava fazendo lá”; ou “porque não gritou”; ou “porque estava usando aquela roupa”. Mas pode ser percebida também de maneira mais sutil como em mesas de almoço de família ou reuniões de trabalho quando as mulheres tem sua fala descredibilizada. </Text>
                                    <Text style={styles.texto2}>Tipo 24 – Maternidade compulsória: Perda da autonomia na decisão de engravidar.A ideia normalizada de que a mulher deve ser mãe para ser uma mulher completa, pressão invisível, mas muito forte nas mulheres desde sua infância – onde já cuidam de suas bonecas – para que “completem seu destino”. A proibição da interrupção da gravidez se relaciona estruturalmente com esta modalidade de Violência.</Text>
                                    <Text style={styles.texto2}>Tipo 25 – Dupla Jornada de trabalho doméstico: As mulheres trabalham, em média, 7,5 horas a mais que os homens por semana devido à dupla jornada, que inclui tarefas domésticas e trabalho remunerado. Apesar da taxa de escolaridade das mulheres ser mais alta, a jornada também é. Isso implica em diversas perdas para Mulheres ao longo de suas trajetórias, um menor desenvolvimento nas carreiras, maior impacto na saúde física e mental.</Text>
                                    <Text style={styles.texto2}>Tipo 26 – Cultura do Estupro:  é um termo usado para abordar as maneiras em que a sociedade culpa as vítimas de assédio sexual e normaliza o comportamento sexual violento dos homens. Ou seja: quando, em uma sociedade, a violência sexual é normalizada por meio da culpabilização da vítima, isso significa que existe uma cultura do estupro.</Text>
                                    <Text style={styles.texto2}>Tipo 27 – Racismo Vinculado ao Machismo: O mapa da Violência de 2019 mostra que enquanto o homicídio de mulheres negras experimentou um crescimento de 54,2% entre 2003 e 2013, no mesmo período, o homicídio de mulheres brancas caiu 9,8%. Não bastasse a violência contra si, a mulher negra também experimenta com maior intensidade a violência contra seus filhos, irmãos e companheiros. </Text>
                                    <Text style={styles.texto2}>Tipo 28 – Violência Obstétrica: violência obstétrica é a prática de procedimentos e condutas que desrespeitam e agridem a mulher na hora do gestação, parto, nascimento ou pós-parto. Na prática, se considera violência obstétrica os atos agressivos tanto de forma psicológica quanto física.</Text>
                                    <Text style={styles.texto2}>Tipo 29 – Violência Política Contra a Mulher: A Violência Política contra a mulher ou violência política de gênero, pode ser definida como o tipo de violência que visa desestimular a candidatura feminina a cargos públicos ou os atos que visem cercear o exercício de mandatos.</Text>
                                    <Text style={styles.texto2}>Tipo 30 – Educação desigual para meninos e meninas: Cerca de 16 milhões de meninas nunca terão chance de ir à escola. Em situações de vulnerabilidade, elas são as primeiras a ficarem sem educação e representam, hoje, dois terços da população analfabeta do mundo. Mesmo quando matriculadas, a discrepância de direitos em relação a seus pares masculinos permanece. Podem estar nas salas de aula, mas a invisibilidade, opressões e violências recaem, sobretudo, sobre elas. Tudo isso pelo simples fato de terem nascido meninas;</Text>
                                </CollapseBody>
                            </Collapse>
                        </View>
                        <View style={styles.containerDescrição}>
                            <Collapse>
                                <CollapseHeader>
                                    <View>
                                        <Text style={styles.texto1}>
                                            Categoria 6 – Tipo 31 – Feminicídio
                                        </Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Text style={styles.texto2}>O feminicídio é o homicídio praticado contra a mulher em decorrência do fato de ela ser mulher (misoginia e menosprezo pela condição feminina ou discriminação de gênero, fatores que também podem envolver violência sexual) ou em decorrência de violência doméstica.</Text>
                                </CollapseBody>
                            </Collapse>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    containerGeral: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 100,
    },

    containerDescrição: {
        width: '95%',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        //marginBottom: 10,
    },
    texto1: {
        fontSize: 15,
        color: '#4F4F4F',
        paddingHorizontal: 24,
        paddingTop: 15,
        paddingBottom: 15,
        fontFamily: 'Poppins_500Medium',
        //fontWeight: '',
        alignContent: 'stretch',
    },
    texto2: {
        fontSize: 15,
        color: '#4F4F4F',
        paddingStart: 24,
        paddingTop: 15,
        paddingBottom: 5,
        fontFamily: 'Poppins_200ExtraLight',

    },
})

export default Tipologias;