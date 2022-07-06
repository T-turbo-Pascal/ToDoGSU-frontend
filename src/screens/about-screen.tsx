import React from 'react'
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Masthead
        title="Кто мы ?"
        image={require('../assets/about.gif')}
      >
        <Navbar />
      </Masthead>
        <VStack 
        flex={1} 
        space={4}
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
        >
          {/*<Box alignItems="center">
            <Image
              source={require('../assets/1.jpeg')}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
          </Box>*/}
          <Text fontSize="md" w="full">
              Привет ) Мы команда cRiNgE и мы создали классное приложение для студентов, которое облегчит их учёбу.
          </Text>
          <LinkButton
            colorScheme="red"
            size="lg"
            borderRadius="full"
            href="https://youtu.be/dQw4w9WgXcQ"
            /*leftIcon={
              <Icon as={Feather} name="youtube" size="sm" opacity={0.5} />
            }*/
          >
            А вот наш сайт
          </LinkButton>
          <LinkButton
            colorScheme={useColorModeValue('blue', 'darkBlue')}
            size="lg"
            borderRadius="full"
            href="https://www.canva.com/design/DAFE5aiL0Sk/ch9FzqM7jTzbDFSfRAfaqA/view?utm_content=DAFE5aiL0Sk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            //</VStack>leftIcon={
              //<Icon as={Feather} name="twitter" size="sm" opacity={0.5} />
            //}
          >
            Список ближайших обновлений
          </LinkButton>
        </VStack>
    </AnimatedColorBox>
  )
}

export default AboutScreen
