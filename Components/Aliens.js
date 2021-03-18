import React from 'react'
import {
    View, Image, Text,
    StyleSheet, ImageBackground,
    TouchableOpacity, ScrollView,
    Dimensions
} from 'react-native'
import {Line, Svg} from 'react-native-svg'
import {WaveIndicator} from 'react-native-indicators'

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
                        <View
                            style={{
                                position: 'absolute', marginLeft: 240, marginTop: 75,
                                backgroundColor: 'white', borderRadius: 100, padding: 10
                            }}
                        >
                            <Image source={require("../assets/prize.png")} style={{width: 30, height: 30}}/>
                        </View>
                        <Line x1="210" y1="100" x2="90" y2="220" stroke="white" strokeWidth="4" />
                        <View style={{marginTop: 100, marginLeft: 80}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <Line x1="90" y1="220" x2="210" y2="240" stroke="white" strokeWidth="4" />
                        <View style={{marginLeft: 200}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <View
                            style={{
                                position: 'absolute', marginLeft: 240, marginTop: 220,
                                backgroundColor: 'white', borderRadius: 100, padding: 10
                            }}
                        >
                            <Image source={require("../assets/challenge.png")} style={{width: 30, height: 30}}/>
                        </View>
                        <Line x1="90" y1="220" x2="150" y2="360" stroke="white" strokeWidth="4" />
                        <View style={{marginTop: 100, marginLeft: 140}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <WaveIndicator color='white' style={styles.pulse} size={50}/>
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
    image: {
        width: 20,
        height: 20
    },
    pulse: {
        position: 'absolute',
        paddingLeft: 125,
        paddingTop: 335
    }
})

export default Aliens