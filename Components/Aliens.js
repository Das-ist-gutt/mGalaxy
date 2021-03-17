import React from 'react'
import {View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Dimensions} from 'react-native'
import {Line, Svg} from 'react-native-svg'

const WIDTH = Dimensions.get("screen").width
const HEIGHT = Dimensions.get("screen").height

class Aliens extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require("../assets/desert.jpg")} style={styles.back}>
                    <Svg height={HEIGHT} width={WIDTH}>
                        <View style={{marginTop: 20, marginLeft: 100}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <Line x1="110" y1="30" x2="210" y2="100" stroke="white" strokeWidth="4" />
                        <View style={{marginTop: 50, marginLeft: 200}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <Line x1="210" y1="100" x2="90" y2="220" stroke="white" strokeWidth="4" />
                        <View style={{marginTop: 100, marginLeft: 80}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <Line x1="90" y1="220" x2="210" y2="240" stroke="white" strokeWidth="4" />
                        <View style={{marginLeft: 200}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <Line x1="90" y1="220" x2="150" y2="360" stroke="white" strokeWidth="4" />
                        <View style={{marginTop: 100, marginLeft: 140}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <View style={{marginTop: 20, marginLeft: 240}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <View style={{marginTop: 100, marginLeft: 80}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                    </Svg>
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
    planet: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 20,
        height: 20
    }
})

export default Aliens