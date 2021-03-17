import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Galaxy from '../Components/Galaxy.js'
import Angelo from '../Components/Angelo.js'
import Aliens from '../Components/Aliens.js'

const CoreStack = createStackNavigator({
    Galaxy: {
        screen: Galaxy,
        navigationOptions: {
            headerShown: true
        }
    },
    Angelo: {
        screen: Angelo,
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