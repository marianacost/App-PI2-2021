import React from "react";
import { Button, View, Text, StyleSheet, Alert, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Cabecalho from "../Componentes/Cabecalho";
import { ScrollView } from "react-native-gesture-handler";
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';

const Denuncia = () => {
    return (
        <>
            <SafeAreaView>
                <Cabecalho></Cabecalho>
                <View style={styles.containerGeral}>
                    <ScrollView>
                        <View style={styles.containerDescrição}>
                            < Collapse>
                                <CollapseHeader>
                                    <View>
                                        <Text style={styles.texto1}>Lei Maria da Penha (Lei nº 11.340, 2006)</Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Text style={styles.texto2}>A lei tem o objetivo de criar mecanismos para coibir a violência doméstica e familiar contra a mulher de forma a prevenir, punir e erradicar a violência contra a mulher; tipifica 5 tipos de violência: física, psicológica, sexual, patrimonial e moral.</Text>
                                </CollapseBody>
                            </Collapse>
                        </View>
                        <View style={styles.containerDescrição}>
                            < Collapse>
                                <CollapseHeader>
                                    <View>
                                        <Text style={styles.texto1}>Lei do Feminicídio (Lei nº 13.104, 2015)</Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Text style={styles.texto2}>A legislação altera o Código Penal e estabelece o feminicídio como circunstância que qualifica o crime de homicídio, quando uma mulher é morta em decorrência de violência doméstica e familiar, menosprezo ou discriminação à condição de mulher, fica caracterizado o feminicídio, sendo considerado um crime hediondo em que a pena pode chegar a 30 anos de reclusão.</Text>
                                </CollapseBody>
                            </Collapse>
                        </View>
                        <View style={styles.containerDescrição}>
                            < Collapse>
                                <CollapseHeader>
                                    <View>
                                        <Text style={styles.texto1}>Lei do Minuto Seguinte (Lei nº 12.845/2013)</Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Text style={styles.texto2}>Oferece atendimento imediato pelo SUS, amparo médico, psicológico e social, exames preventivos e o fornecimento de informações sobre os direitos legais das vítimas. Garante atendimento emergencial, integral e gratuito às vítimas. Importante ressaltar que não há necessidade de apresentar boletim de ocorrência ou qualquer outro tipo de prova do abuso sofrido - a palavra da vítima basta para que o acolhimento seja feito pelo hospital.</Text>
                                </CollapseBody>
                            </Collapse>
                        </View>
                        <View style={styles.containerDescrição}>
                            < Collapse>
                                <CollapseHeader>
                                    <View>
                                        <Text style={styles.texto1}>Lei nº 13.718/2018 </Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Text style={styles.texto2}>Tipifica os crimes de importunação sexual de divulgação de cena de estupro, alterando o Código Penal para tipificar os crimes de importunação sexual e de divulgação de cena de estupro, tornar pública incondicionada a natureza da ação penal dos crimes contra a liberdade sexual e dos crimes sexuais contra vulneráveis; estabelece aumento de pena e define como causas para aumento de pena o estupro coletivo e o estupro corretivo.</Text>
                                </CollapseBody>
                            </Collapse>
                        </View>
                        <View style={styles.containerDescrição}>
                            < Collapse>
                                <CollapseHeader>
                                    <View>
                                        <Text style={styles.texto1}>Lei Carolina Dieckmann (Lei nº 12.737/2012)</Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Text style={styles.texto2}>A lei definiu crimes cibernéticos no Brasil. Ela recebeu este nome, pois na época que o projeto tramitava a atriz teve o computador invadido e fotos pessoais divulgadas sem autorização por hackers. A legislação classifica como crime justamente casos como estes: invasão de computadores, tablets, smartphones, conectados ou não à internet, que resulte na obtenção, adulteração ou destruição dos dados e informações.</Text>
                                </CollapseBody>
                            </Collapse>
                        </View>
                        <View style={styles.containerDescrição}>
                            < Collapse>
                                <CollapseHeader>
                                    <View>
                                        <Text style={styles.texto1}>Lei Joana Maranhão (Lei nº 12.650/2015)</Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Text style={styles.texto2}>A lei alterou os prazos quanto à prescrição (prazo) contra abusos sexuais cometidos contra crianças e adolescentes, de forma que a prescrição só passou a valer após a vítima completar 18 anos e o prazo para denúncia aumentou para 20 anos. O nome é uma referência à nadadora brasileira que foi abusada sexualmente aos nove anos de idade, pelo seu treinador. A denúncia feita por ela resultou na lei que garante às vítimas mais tempo para denunciar e punir seus abusadores.</Text>
                                </CollapseBody>
                            </Collapse>
                        </View>
                        <View style={styles.containerDescrição}>
                            < Collapse>
                                <CollapseHeader>
                                    <View>
                                        <Text style={styles.texto1}>Lei Sinal Vermelho contra a Violência Doméstica (Lei nº 14.188/2021)</Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Text style={styles.texto2}>Define o programa de cooperação Sinal Vermelho contra a Violência Doméstica como uma das medidas de enfrentamento da violência doméstica e familiar contra a mulher, altera a modalidade da pena da lesão corporal simples cometida contra a mulher por razões da condição do sexo feminino e cria o tipo penal de violência psicológica contra a mulher.</Text>
                                </CollapseBody>
                            </Collapse>
                        </View>
                        <View style={styles.containerDescrição}>
                            < Collapse>
                                <CollapseHeader>
                                    <View>
                                        <Text style={styles.texto1}>Lei 9.504/1997 </Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Text style={styles.texto2}>Estabelece normas para as eleições</Text>
                                </CollapseBody>
                            </Collapse>
                        </View>
                        <View style={styles.containerDescrição}>
                            < Collapse>
                                <CollapseHeader>
                                    <View>
                                        <Text style={styles.texto1}>Lei 10.778/2003</Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Text style={styles.texto2}>Lei da Notificação Compulsória dos casos de violência contra a mulher que forem atendidos em serviço de saúde pública ou privada;</Text>
                                </CollapseBody>
                            </Collapse>
                        </View>
                        <View style={styles.containerDescrição}>
                            < Collapse>
                                <CollapseHeader>
                                    <View>
                                        <Text style={styles.texto1}>Lei 12.015/2009</Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Text style={styles.texto2}>Dispõe sobre os crimes contra a dignidade sexual</Text>
                                </CollapseBody>
                            </Collapse>
                        </View>
                        <View style={styles.containerDescrição}>
                            < Collapse>
                                <CollapseHeader>
                                    <View>
                                        <Text style={styles.texto1}>Lei 12.034/2009</Text>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Text style={styles.texto2}>Altera lei 9.504/1997, e inclui como objetivo promover e difundir a participação política feminina (entre outros)</Text>
                                </CollapseBody>
                            </Collapse>
                            {/* : ;
                                        Lei nº 13.642/2018, atribui à Polícia Federal atribuição para investigação de crimes praticados na rede mundial de computadores, que difundam conteúdo misógino definidos como aqueles que propagam ódio ou aversão às mulheres.
                                        Lei nº 13.931/2019, dispõe sobre a notificação compulsória dos casos de indícios ou confirmação de violência contra a mulher, atendida em serviços de saúde públicos e privados, determinando a comunicação à autoridade policial, no prazo de 24h, para providências cabíveis e fins estatísticos.
                                        Lei nº 14.192/2021, estabelece normas para prevenir, reprimir e combater a violência política contra a mulher, para dispor sobre os crimes de divulgação de fato ou vídeo com conteúdo inverídico no período de campanha eleitoral, para criminalizar a violência política contra a mulher e para assegurar a participação de mulheres em debates eleitorais proporcionalmente ao número de candidatas às eleições proporcionais.tendimento obrigatório e integral de pessoas em situação de violência sexual;
                                        Decreto no.7.393/2010: Dispõe sobre o funcionamento do Ligue 180 – Central de Atendimento à Mulher;
                                        Decreto no.7.958/2013: Estabelece diretrizes para o atendimento às vítimas de violência sexual pelos profissionais de segurança pública e da rede de atendimento do Sistema Único de Saúde;
                                        Decreto no.8.727/2016: Dispõe sobre o uso do nome social e o reconhecimento da identidade de gênero de pessoas travestis e transexuais no âmbito da administração pública federal direta, autárquica e fundacional.
                                        Lei no.13.104/2015: Altera o art.121 do Código Penal, para prever o feminicídio como circunstância qualificadora do crime de homicídio, e o art.1o da Lei de Crimes Hediondos, para incluir o feminicídio no rol dos crimes hediondos;
                                        Emenda Constitucional no.72/2013: Estabelece a igualdade de direitos trabalhistas entre os/as trabalhadores/as domésticos/as e os/as demais trabalhadores/as urbanos e rurais;
                                        Lei Complementar no.150/2015: Dispõe sobre o contrato de trabalho doméstico.</Text>
                                */}
                        </View>
                    </ScrollView> 
                                   
                        <View style={styles.containerBotao}>
                            <Button style={styles.textoBotao} title="Quero denunciar!" color="white" 
                            //onPress={openUrl(www.google.com.br)}
                            //onPress={this_handleOpenWithLinking}
                            onPress={_handleOpenWithLinking}
                            //onPress={() => navigation.navigate('Home')}
                            />
                        </View>
                        </View>          
            </SafeAreaView>
        </>
    )
}
_handleOpenWithLinking = () => {
    Linking.openURL('https://www.gov.br/pt-br/servicos/denunciar-e-buscar-ajuda-a-vitimas-de-violencia-contra-mulheres');
  };
const styles = StyleSheet.create({
    containerGeral: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 150,
    },

    containerDescrição: {
        width: '95%',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        //marginBottom: 10,
    },
    containerBotao: {
        padding: 10,
        margin:10,
        borderRadius: 10,
        backgroundColor: '#7C3242',
        width: '60%',
    },

    texto1: {
        fontSize: 15,
        color: '#4F4F4F',
        paddingStart: 24,
        paddingTop: 15,
        paddingBottom: 15,
        fontFamily: 'Poppins_500Medium',
        textAlign: 'justify',
    },
    texto2: {
        fontSize: 15,
        color: '#4F4F4F',
        paddingStart: 24,
        paddingTop: 15,
        paddingBottom: 5,
        fontFamily: 'Poppins_200ExtraLight',
    },
    textoBotao: {
        fontSize: 15,
        color: 'red',
        paddingStart: 24,
        paddingTop: 15,
        paddingBottom: 5,

    }
})

export default Denuncia;
