import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import Texto from '../componentes/Texto';

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
    <Image source={topo} style={estilos.topo} />
    <Texto style={estilos.titulo}>Detalhes da Cesta</Texto>

    <View style={estilos.cesta}>
        <Texto style={estilos.nome}>Cesta de Verduras</Texto>
        <View style={estilos.fazenda}>
        <Image source={logo} style={estilos.imagemFazenda} />
        <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
        
        <Texto style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente diretamente direto
            para a sua cozinha.</Texto>
        <Text style={estilos.preco}>R$ 40,00</Text>
    </View>
    </>
}

const estilos = StyleSheet.create ({
    topo: {
        width:"100 %",
        height: 578 / 768 * width
    },
    titulo: {
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        fontSize: 25,
        lineHeight: 26,
        color: 'white',
        padding: 16,
        fontFamily: "MontserratBold",
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: 'MontserratBold'
    },
    descricao: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight:26
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
});