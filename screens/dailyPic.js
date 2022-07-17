import *as React from "react"
import {View, Text, StyleSheet} from "react-native"

export default class DailyPicScreen extends React.Component{
render(){
    return(
        <View style = {styles.dpscreenDesign}>
            <Text style = {styles.textDesign}>
                Daily Pics Screen
            </Text>
        </View>
    )
}
}

const styles = StyleSheet.create(
    {
        dpscreenDesign: {flex:1, backgroundColor:"Cyan", justifyContent:"center"},
        textDesign: {alignSelf:"center", fontSize:35, fontWeight:"bold", color:"white"}
    }
)