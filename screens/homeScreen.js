import *as React from "react"
import {View, Text, StyleSheet} from "react-native"

export default class HomeScreen extends React.Component{
render(){
    return(
        <View style = {styles.hscreenDesign}>
            <Text style = {styles.textDesign}>
                Home Screen
            </Text>
        </View>
    )
}
}

const styles = StyleSheet.create(
    {
        hscreenDesign: {flex:1, backgroundColor:"Cyan", justifyContent:"center"},
        textDesign: {alignSelf:"center", fontSize:35, fontWeight:"bold", color:"white"}
    }
)
