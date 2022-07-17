import *as React from "react"
import {View, Text, StyleSheet} from "react-native"

export default class StarMapScreen extends React.Component{
render(){
    return(
        <View style = {styles.smscreenDesign}>
            <Text style = {styles.textDesign}>
                Star Map Screen
            </Text>
        </View>
    )
}
}
const styles = StyleSheet.create(
    {
        smscreenDesign: {flex:1, backgroundColor:"Cyan", justifyContent:"center"},
        textDesign: {alignSelf:"center", fontSize:35, fontWeight:"bold", color:"white"}
    }
)