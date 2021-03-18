import React from 'react'
import {
    View, Image, Text,
    StyleSheet, ImageBackground,
    TouchableOpacity
} from 'react-native'
import {Circle, Svg} from "react-native-svg"

class Galaxy extends React.Component {


    _goAngelo() {
        this.props.navigation.navigate("Angel", {})
    }

    _goAliens() {
        this.props.navigation.navigate("Aliens", {})
    }

    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require("../assets/test.jpg")} style={styles.back}>
                    <View style={{marginLeft: 265, marginTop: 127, position: 'absolute'}}>
                        <TouchableOpacity
                            style={{
                                alignItems:'center', justifyContent:'center',
                                width:55, height:55, borderRadius:50
                            }}
                            onPress={() => this._goAngelo()}
                        >
                        </TouchableOpacity>
                        <View style={styles.text}>
                            <Text style={{textAlign: 'center'}}>Angel</Text>
                        </View>
                    </View>
                    <View style={{marginLeft: 208, marginTop: 318, position: 'absolute'}}>
                        <TouchableOpacity
                            style={{
                                alignItems:'center', justifyContent:'center',
                                width:90, height:90, borderRadius:50
                            }}
                            onPress={() => {}}
                        >
                        </TouchableOpacity>
                        <View style={styles.text}>
                            <Text style={{textAlign: 'center'}}>???</Text>
                        </View>
                    </View>
                    <View style={{marginLeft: 37, marginTop: 345, position: 'absolute'}}>
                        <TouchableOpacity
                            style={{
                                alignItems:'center', justifyContent:'center',
                                width:65, height:65, borderRadius:50
                            }}
                            onPress={() => this._goAliens()}
                        >
                        </TouchableOpacity>
                        <View style={styles.text}>
                            <Text style={{textAlign: 'center'}}>Aliens</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    back: {
        flex:1
    },
    text: {
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 30
    },
    image: {
        width: 50,
        height: 50
    }
})

export default Galaxy