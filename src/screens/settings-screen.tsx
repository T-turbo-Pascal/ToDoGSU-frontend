import React from 'react'
import { Text } from 'react-native'
import {
  ScrollView,
  VStack,
  Skeleton,
  HStack,
  Input,
  useColorModeValue,
  NativeBaseProvider,
  Icon,
  Center
} from 'native-base'
import AnimatedColorBox from '../components/animated-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'
import { MaterialIcons } from "@expo/vector-icons";


const Pizda = () => {
  const [show, setShow] = React.useState(false);
  return <HStack space={4} w="100%" alignItems="center">
      <Input w={{
      base: "75%",
      md: "25%"
    }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Name" />
      <Input w={{
      base: "75%",
      md: "25%"
    }} type={show ? "text" : "password"} InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />} placeholder="Password" />
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
        <Navbar />
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


