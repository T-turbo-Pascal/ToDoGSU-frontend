import React, { useCallback } from 'react'
import {
  HStack,
  VStack,
  Center,
  Avatar,
  Heading,
  IconButton,
  useColorModeValue
} from 'native-base'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import AnimatedColorBox from './animated-color-box'
import ThemeToggle from './theme-toggle'
import { Feather } from '@expo/vector-icons'
import MenuButton from './menu-button'

const Sidebar = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props
  const currentRoute = state.routeNames[state.index]

  const handlePressBackButton = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])
  const handlePressMenuMain = useCallback(() => {
    navigation.navigate('Main')
  }, [navigation])
  const handlePressMenuSchedule = useCallback(() => {
    navigation.navigate('Schedule')
  }, [navigation])
  const handlePressMenuEvents = useCallback(() => {
    navigation.navigate('Events')
  }, [navigation])
  const handlePressMenuSettings = useCallback(() => {
    navigation.navigate('Settings')
  }, [navigation])
  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate('About')
  }, [navigation])

  return (
    <AnimatedColorBox
      safeArea
      flex={1}
      bg={useColorModeValue('blue.50', 'darkBlue.800')}
      p={7}
    >
      <VStack flex={1} space={2}>
        <HStack justifyContent="flex-end">
          <IconButton
            onPress={handlePressBackButton}
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue('blue.300', 'darkBlue.700')}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 6,
              color: useColorModeValue('blue.800', 'darkBlue.700')
            }}
          />
        </HStack>
        <Avatar
          source={require('../assets/av.jpg')}
          size="xl"
          borderRadius={100}
          mb={6}
          //borderColor="secondary.500"
          borderWidth={3}
        />
        <Heading mb={4} size="xl">
          ToDo GSU
        </Heading>
        <MenuButton
          active={currentRoute === 'Main'}
          onPress={handlePressMenuMain}
          icon="inbox"
        >
          Задачи
        </MenuButton>
        <MenuButton
          active={currentRoute === 'Schedule'} 
          onPress={handlePressMenuSchedule}
          icon="calendar"
        >
          Расписание
        </MenuButton>
        <MenuButton
          active={currentRoute === 'Events'} 
          onPress={handlePressMenuEvents} 
          icon="calendar"
        >
          Мероприятия 
        </MenuButton>
        <MenuButton
          active={currentRoute === 'Settings'}
          onPress={handlePressMenuSettings}
          icon="settings"
        >
          Настройки ( Скоро )
        </MenuButton>
        <MenuButton
          active={currentRoute === 'About'}
          onPress={handlePressMenuAbout}
          icon="info"
        >
          О нас
        </MenuButton>
      </VStack>
      <Center>
        <ThemeToggle />
      </Center>
    </AnimatedColorBox>
  )
}

export default Sidebar
