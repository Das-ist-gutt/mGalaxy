import React from 'react'
import {
    View, Image, Text,
    StyleSheet, ImageBackground,
    TouchableOpacity, Dimensions
} from 'react-native'
import {Rect, Svg} from 'react-native-svg'
import {WaveIndicator} from 'react-native-indicators'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

class Galaxy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: false
        }
    }

    _switchMenu = () => {
        this.setState({menu: !this.state.menu})
    }

    _showMenu = () => {
        if (this.state.menu)
            return(
                <View style={{position: 'absolute'}}>
                    <Svg width={WIDTH} height={HEIGHT}>
                        <Rect x="200" y="0" width="200" height={HEIGHT} fill="black" stroke="white" strokeWidth="3"/>
                    </Svg>
                    <View style={{position: 'absolute', marginLeft: 220, marginTop: 70}}>
                        <Text style={styles.menuText}>Profil</Text>
                        <Text style={styles.menuText}>Ajouter un produit</Text>
                        <Text style={styles.menuText}>Aide</Text>
                        <Text style={styles.menuText}>Borne la plus proche</Text>
                    </View>
                    <TouchableOpacity style={{position: 'absolute', marginLeft: 220, marginTop: 20}} onPress={() => {this._switchMenu()}}>
                        <Image source={require("../assets/arrow.png")} style={{width: 30, height: 30}}/>
                    </TouchableOpacity>
                </View>
            )
    }

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
                    <TouchableOpacity style={{paddingLeft: 310, paddingTop: 30}} onPress={() => {this._switchMenu()}}>
                        <Image source={require("../assets/menu.png")} style={{height: 25, width: 25}}/>
                    </TouchableOpacity>
                    <View style={{marginLeft: 265, marginTop: 127, position: 'absolute'}}>
                        <TouchableOpacity
                            style={{
                                alignItems:'center', justifyContent:'center',
                                width:55, height:55, borderRadius:50
                            }}
                            onPress={() => this._goAngelo()}
                        >
                            <WaveIndicator color='white'/>
                        </TouchableOpacity>
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
                    </View>
                    <View style={{marginLeft: 37, marginTop: 345, position: 'absolute'}}>
                        <TouchableOpacity
                            style={{
                                alignItems:'center', justifyContent:'center',
                                width:65, height:65, borderRadius:50
                            }}
                            onPress={() => this._goAliens()}
                        >
                            <WaveIndicator color='white'/>
                        </TouchableOpacity>
                    </View>
                    {this._showMenu()}
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
    },
    menuText: {
        color: 'white',
        fontFamily: 'sans-serif',
        marginTop: 50,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    }
})

export default Galaxy