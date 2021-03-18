import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Welcome from '../Components/Welcome.js'
import Galaxy from '../Components/Galaxy.js'
import Angel from '../Components/Angel.js'
import Aliens from '../Components/Aliens.js'

const CoreStack = createStackNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            headerShown: false
        }
    },
    Galaxy: {
        screen: Galaxy,
        navigationOptions: {
            headerShown: true,
            title: "Galaxie"
        }
    },
    Angel: {
        screen: Angel,
        navigationOptions: {
            headerShown: true
        }
    },
    Aliens: {
        screen: Aliens,
        navigationOptions: {
            headerShown: true
        }
    }
})

export default createAppContainer(CoreStack)