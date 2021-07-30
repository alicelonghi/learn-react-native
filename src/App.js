import React from "react"
import Primeiro from "./components/Primeiro"
import X, { Comp1, Comp2 } from "./components/Multi.js"
import { View, StyleSheet} from 'react-native'

export default () => (
    <View style={style.App}>
        <Primeiro/>
        <Comp1/>
        <Comp2 />
        <X/>
    </View> 
)

// o StyleSheet ajuda a criar um estilo
const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff'
    }
})



