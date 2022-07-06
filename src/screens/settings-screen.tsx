import React from 'react'
import { Text } from 'react-native'
import {
  ScrollView,
  VStack,
  Skeleton,
  HStack,
  useColorModeValue,
  NativeBaseProvider,
  Center
} from 'native-base'
import AnimatedColorBox from '../components/animated-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'
import SkeletonContent from 'react-native-skeleton-content';


const Load = () => {
  return  <Center w="100%">
      <HStack key={null} w="90%" maxW="400" borderWidth="1" space={8} rounded="md" _dark={{
      borderColor: "coolGray.500"
    }} _light={{
      borderColor: "coolGray.200"
    }} p="4">
        <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
        <VStack flex="3" space="4">
          <Skeleton startColor="amber.300" />
          <Skeleton.Text />
          <HStack space="2" alignItems="center">
            <Skeleton size="5" rounded="full" />
            <Skeleton h="3" flex="1" rounded="full" />
            <Skeleton h="3" flex="1.5" rounded="full" startColor="indigo.300" />
          </HStack>
          <HStack space="2" alignItems="center">
            <Skeleton size="5" rounded="full" />
            <Skeleton h="3" flex="1" rounded="full" />
            <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
          </HStack>
          <HStack space="2" alignItems="center">
            <Skeleton size="5" rounded="full" />
            <Skeleton h="3" flex="1" rounded="full" />
            <Skeleton h="3" flex="2" rounded="full" startColor="indigo.300" />
          </HStack>
        </VStack>
      </HStack>
    </Center>;
    
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
                <Load />
            </Center>
          </NativeBaseProvider>
          
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default SettingsScreen


