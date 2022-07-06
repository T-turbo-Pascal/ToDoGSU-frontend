import React from 'react'
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Spacer,
  HStack,
  Heading,
  FlatList,
  Avatar,
  useColorModeValue
} from 'native-base'
import AnimatedColorBox from '../components/animated-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'


const ScheduleScreen = () => {
  const data = [{
    id: "1",
    fullName: "Казимиров Г. Н.",
    timeStamp: "9:00 | 10:25",
    //recentText: "Мат. анализ",
    placetext: "корпус 2 аудит 3-18",
    avatarUrl: "https://math.gsu.by/wp-content/uploads/2016/12/%D0%A0%D1%83%D0%B6%D0%B8%D1%86%D0%BA%D0%B0%D1%8F-478x400.jpg"
  }, {
    id: "2",
    fullName: "Кузьменкова Е. Ю.",
    timeStamp: "10:40 | 12:05",
    recentText: "Delphi",
    placetext: "корпус 2 аудит 2-2",
    avatarUrl: "https://math.gsu.by/wp-content/uploads/2016/12/KuzmenkovaE-350x400.jpg"
  }, {
    id: "3",
    fullName: "Старовойтов А. П.",
    timeStamp: "12:25 | 13:50",
    recentText: "Мат анализ",
    placetext: "корпус 2 аудит 3-1",
    avatarUrl: "https://math.gsu.by/wp-content/uploads/2016/12/StarovoitovAP-350x400.jpg"
  }, {
    id: "4",
    fullName: "Кузьменкова Е. Ю.",
    timeStamp: "14:20 | 15:45",
    recentText: "УВП",
    placetext: "корпус 2 аудит 2-2",
    avatarUrl: "https://math.gsu.by/wp-content/uploads/2016/12/KuzmenkovaE-350x400.jpg"
  }, {
    id: "5",
    fullName: "Кузьменкова Е. Ю.",
    timeStamp: "14:20 | 15:45",
    recentText: "УВП",
    placetext: "корпус 2 аудит 2-2",
    avatarUrl: "https://math.gsu.by/wp-content/uploads/2016/12/KuzmenkovaE-350x400.jpg"
  }
];
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.2000', 'warmGray.900')}
      w="full"
    >
      <Masthead
        title="Над чертой"
        image={require('../assets/events.jpg')}
      >
        <Navbar/>
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-42px"
        pt="10px"
        p={4}
      >
        <VStack flex={1} space={4} alignItems="center">
        
        {/* 1-st Test Shedule exmpl  */}

        <Heading fontSize="xl" p="4" pb="3">
          Понедельник
        </Heading>
        <FlatList data={data} renderItem={({
          item
        }) => <Box borderBottomWidth="1" _dark={{
          borderColor: "gray.600"
        }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                <HStack space={3} justifyContent="space-between">
                  <Avatar size="48px" source={{
              uri: item.avatarUrl
            }} />
                  <VStack>
                    <Text _dark={{
                color: "warmGray.50"
              }} color="coolGray.800" bold>
                      {item.fullName}
                    </Text>
                    <Text color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                      {item.recentText}
                    </Text>
                    <Text color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                      {item.placetext}
                    </Text>
                  </VStack>
                  <Spacer />
                  <Text fontSize="xs" _dark={{
              color: "warmGray.50"
            }} color="coolGray.800" alignSelf="flex-start">
                    {item.timeStamp}
                  </Text>
                </HStack>
            </Box>} keyExtractor={item => item.id} />

            <Heading fontSize="xl" p="4" pb="3">
          Вторник
        </Heading>
        <FlatList data={data} renderItem={({
          item
        }) => <Box borderBottomWidth="1" _dark={{
          borderColor: "gray.600"
        }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                <HStack space={3} justifyContent="space-between">
                  <Avatar size="48px" source={{
              uri: item.avatarUrl
            }} />
                  <VStack>
                    <Text _dark={{
                color: "warmGray.50"
              }} color="coolGray.800" bold>
                      {item.fullName}
                    </Text>
                    <Text color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                      {item.recentText}
                    </Text>
                    <Text color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                      {item.placetext}
                    </Text>
                  </VStack>
                  <Spacer />
                  <Text fontSize="xs" _dark={{
              color: "warmGray.50"
            }} color="coolGray.800" alignSelf="flex-start">
                    {item.timeStamp}
                  </Text>
                </HStack>
            </Box>} keyExtractor={item => item.id} />
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default ScheduleScreen

