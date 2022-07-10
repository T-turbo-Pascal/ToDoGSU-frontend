import React, {useEffect} from 'react'
import {Text} from 'react-native'
import {
    ScrollView,
    VStack,
    Skeleton,
    HStack,
    Input,
    useColorModeValue,
    NativeBaseProvider,
    Icon,
    Center, Button
} from 'native-base'
import AnimatedColorBox from '../components/animated-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'
import {MaterialIcons} from "@expo/vector-icons";
import {Login} from "../components/RESTAPI/RestAPI";


const Pizda = () => {



    const [show, setShow] = React.useState(false);
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');


    const Auth = async () => {
        const {data} = await Login(username, password);
        console.log(data.token);
    }

    return <HStack space={4} w="100%" alignItems="center">
        <Input placeholder="Username" onChangeText={text => setUsername(text)}/>
        <Input placeholder="Password" onChangeText={text => setPassword(text)}/>
        <Button onPress={() => {Auth()}}>SEsdfgsdfgsdfgsdfgsfghND</Button>
    </HStack>;
};

const SettingsScreen = () => {
    return (
        <AnimatedColorBox
            flex={1}
            bg={useColorModeValue('warmGray.50', 'warmGray.900')}
            w="full"
        >
            <Masthead
                title="Настройки"
                image={require('../assets/settings.jpg')}
            >
                <Navbar/>
            </Masthead>
            <ScrollView
                borderTopLeftRadius="20px"
                borderTopRightRadius="20px"
                bg={useColorModeValue('warmGray.50', 'primary.900')}
                mt="-20px"
                pt="30px"
                p={4}
            >
                <VStack flex={1} space={4}>

                    <NativeBaseProvider>
                        <Center flex={1} px="3">
                            <Pizda/>
                        </Center>
                    </NativeBaseProvider>

                </VStack>
            </ScrollView>
        </AnimatedColorBox>
    )
}

export default SettingsScreen


