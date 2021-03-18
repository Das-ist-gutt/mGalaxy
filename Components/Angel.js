import React from 'react'
import {
    View, Image, Text,
    StyleSheet, ImageBackground,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import {Line, Svg} from 'react-native-svg'
import {WaveIndicator} from 'react-native-indicators'

const WIDTH = Dimensions.get("screen").width
const HEIGHT = Dimensions.get("screen").height

class Angel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            challenge: false,
            prize: false,
            hide: true
        }
    }

    _challenge = (message) => {
        if (this.state.challenge && !this.state.hide) {
            return(
                <View style={styles.pop}>
                    <Text style={{fontWeight: 'bold'}}>{message}</Text>
                    <View style={styles.content}>
                        <Text style={{textAlign: 'center'}}>Poster une photo avec le #Mugler sur Instagram</Text>
                    </View>
                    <TouchableOpacity style={styles.confirm} onPress={() => {this._confirm("challenge")}}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>OK</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    _prize = (message) => {
        if (this.state.prize && !this.state.hide)
            return(
                <View style={styles.pop}>
                    <Text style={{fontWeight: 'bold'}}>{message}</Text>
                    <View style={styles.content}>
                        <Text style={{textAlign: 'center'}}>Une place VIP au prochain shooting photo Mugler</Text>
                    </View>
                    <TouchableOpacity style={styles.confirm} onPress={() => {this._confirm("prize")}}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>OK</Text>
                    </TouchableOpacity>
                </View>
            )
    }

    _confirm = (type) => {
        if (type == "challenge")
            this.setState({challenge: false})
        else if (type == "prize")
            this.setState({prize: false})
        this.setState({hide: true})
    }

    _popUp = (type) => {
        if (this.state.hide) {
            if (type == "challenge")
                this.setState({challenge: true})
            else if (type == "prize")
                this.setState({prize: true})
            this.setState({hide: false})
        }
        else {
            if (type == "challenge")
                this.setState({challenge: false})
            else if (type == "prize")
                this.setState({prize: false})
            this.setState({hide: true})
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require("../assets/forest.jpg")} style={styles.back}>
                    <Svg height={HEIGHT} width={WIDTH}>
                        <View style={{marginTop: 20, marginLeft: WIDTH/2}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <Line x1={WIDTH / 2 + 10} y1="30" x2="110" y2="100" stroke="white" strokeWidth="4" />
                        <View style={{marginTop: 50, marginLeft: 100}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <Line x1="110" y1="100" x2="290" y2="130" stroke="white" strokeWidth="4" />
                        <View style={{marginTop: 10, marginLeft: 280}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <Line x1="290" y1="130" x2="270" y2="180" stroke="white" strokeWidth="4" />
                        <View style={{marginTop: 30, marginLeft: 260}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <Line x1="110" y1="100" x2="140" y2="230" stroke="white" strokeWidth="4" />
                        <View style={{marginTop: 30, marginLeft: 130}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <View style={{marginTop: 60, marginLeft: 230}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <View style={{marginTop: 30, marginLeft: 70}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <View style={{marginTop: 30, marginLeft: 250}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                        <View style={{marginTop: 60, marginLeft: 160}}>
                            <Image source={require("../assets/star.png")} style={styles.image}/>
                        </View>
                    </Svg>
                    <WaveIndicator color='white' style={{position: 'absolute', paddingLeft: 5, marginTop: 50}} size={100}/>
                    <WaveIndicator color='white' style={{position: 'absolute', paddingLeft: 220, marginTop: 185}} size={100}/>
                    <TouchableOpacity
                        style={{
                            position: 'absolute', marginLeft: 30, marginTop: 75,
                            backgroundColor: 'white', borderRadius: 100, padding: 10
                        }}
                        onPress={() => {this._popUp("challenge")}}
                    >
                        <Image source={require("../assets/challenge.png")} style={{width: 30, height: 30}}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            position: 'absolute', marginLeft: 245, marginTop:210,
                            backgroundColor: 'white', borderRadius: 100, padding: 10
                        }}
                        onPress={() => {this._popUp("prize")}}
                    >
                        <Image source={require("../assets/prize.png")} style={{width: 30, height: 30}}/>
                    </TouchableOpacity>
                    {this._challenge("Voici votre nouveau challenge !")}
                    {this._prize("Nous avons un cadeau pour vous !")}
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
        paddingLeft: 116,
        paddingTop: 205
    },
    pop: {
        backgroundColor: 'white',
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: HEIGHT / 3,
        borderRadius: 30,
        padding: 20
    },
    content: {
        padding: 10,
        margin: 20,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20
    },
    confirm: {
        backgroundColor: 'black',
        borderRadius: 30,
        paddingHorizontal: 30,
        padding: 10,
        marginTop: 20
    }
})

export default Angel