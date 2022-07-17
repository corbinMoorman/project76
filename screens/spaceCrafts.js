import *as React from "react"
import {View, Text, StyleSheet} from "react-native"

export default class SpaceCraftsScreen extends React.Component{
render(){
    return(
        <View style = {styles.scscreenDesign}>
            <Text style = {styles.textDesign}>
                Space Crafts Screen
            </Text>
        </View>
    )
}
}
const styles = StyleSheet.create(
    {
        scscreenDesign: {flex:1, backgroundColor:"Cyan", justifyContent:"center"},
        textDesign: {alignSelf:"center", fontSize:35, fontWeight:"bold", color:"white"}
    }
)