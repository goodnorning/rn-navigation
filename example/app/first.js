import React,{Component} from "react"
import {View,Text,StyleSheet} from "react-native"

import {NavBar} from "nva-ui"

class First extends Component{
    render(){
        const {pushScene,jumpToScene} = this.props.navigationActions
        return (
            <View style={styles.container}>
            <NavBar title="First" leftButton={null} rightButton='Next' onRightButtonClick={()=>pushScene('second')}/>
            <View style={styles.content}>
                <View style={styles.label}>
                    <Text>It's First scene</Text>
                </View>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    content:{
        flex:1,
        backgroundColor:"#FFF",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    label:{
        // flex:1
        paddingVertical:12
    }
})

export default First