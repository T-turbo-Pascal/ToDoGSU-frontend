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


const Monday = () => {
  const data = [{
    id: "0",
    fullName: "Казимиров Г. Н.",
    timeStamp: "9:00 | 10:25",
    recentText: "Мат. анализ",
    avatarUrl: "https://math.gsu.by/wp-content/uploads/2016/12/KazimirovGN-350x400.jpg"
  }, {
    id: "1",
    fullName: "Казимиров Г. Н.",
    timeStamp: "10:40 | 12:05",
    recentText: "Мат. анализ",
    avatarUrl: "https://math.gsu.by/wp-content/uploads/2016/12/KazimirovGN-350x400.jpg"
  }, {
    id: "2",
    fullName: "Старовойтов А. П.",
    timeStamp: "12:25 | 13:50",
    recentText: "Мат. анализ",
    avatarUrl: "https://math.gsu.by/wp-content/uploads/2016/12/StarovoitovAP-350x400.jpg"
  }, {
    id: "3",
    fullName: "Кузьменкова Е. Ю.",
    timeStamp: "14:20 | 15:45",
    recentText: "УВП",
    avatarUrl: "https://math.gsu.by/wp-content/uploads/2016/12/KuzmenkovaE-350x400.jpg"
  }];
  return <Box>
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
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>} keyExtractor={item => item.id} />
    </Box>;
};

const Tuesday = () => {
  const data = [{
    id: "4",
    fullName: "Кузьменкова Е. Ю.",
    timeStamp: "9:00 | 10:25",
    recentText: "Delphi",
    avatarUrl: "https://math.gsu.by/wp-content/uploads/2016/12/KuzmenkovaE-350x400.jpg"
  }, {
    id: "5",
    fullName: "Бузланов А. В.",
    timeStamp: "10:40 | 12:05",
    recentText: "Лин. алгебра",
    avatarUrl: "https://math.gsu.by/wp-content/uploads/2016/12/BuzlanovAV-350x400.jpg"
  }, {
    id: "6",
    fullName: "Бузланов А. В.",
    timeStamp: "12:25 | 13:50",
    recentText: "Лин. алгебра",
    avatarUrl: "https://math.gsu.by/wp-content/uploads/2016/12/BuzlanovAV-350x400.jpg"
  }, {
    id: "7",
    fullName: "-",
    timeStamp: "14:20 | 15:45",
    recentText: "Физ. культура",
    avatarUrl: ""
  }];
  return <Box>
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
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>} keyExtractor={item => item.id} />
    </Box>;
};

const Wednesday = () => {
  const data = [{
    id: "9",
    fullName: "Кузьменкова Е. Ю.",
    timeStamp: "9:00 | 10:25",
    recentText: "Delphi",
    avatarUrl: "https://math.gsu.by/wp-content/uploads/2016/12/KuzmenkovaE-350x400.jpg"
  }, {
    id: "10",
    fullName: "Марченко Л. Н.",
    timeStamp: "10:40 | 12:05",
    recentText: "ДМ и МЛ",
    avatarUrl: "https://math.gsu.by/wp-content/uploads/2016/12/%D0%9C%D0%B0%D1%80%D1%87%D0%B5%D0%BD%D0%BA%D0%BE%D0%9B%D0%9D-1.jpg"
  }, {
    id: "11",
    fullName: "Кузьменкова Е. Ю.",
    timeStamp: "12:25 | 13:50",
    recentText: "Delphi",
    avatarUrl: "https://math.gsu.by/wp-content/uploads/2016/12/KuzmenkovaE-350x400.jpg"
  }];
  return <Box>
      <Heading fontSize="xl" p="4" pb="3">
        Среда
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
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>} keyExtractor={item => item.id} />
    </Box>;
};

const Thursday = () => {
  const data = [{
    id: "14",
    fullName: "Бузланов А. В.",
    timeStamp: "9:00 | 10:25",
    recentText: "Лин. алгебра",
    avatarUrl: "https://math.gsu.by/wp-content/uploads/2016/12/BuzlanovAV-350x400.jpg"
  }, {
    id: "15",
    fullName: "Бузланов А. В.",
    timeStamp: "10:40 | 12:05",
    recentText: "Лин. алгебра",
    avatarUrl: "https://math.gsu.by/wp-content/uploads/2016/12/BuzlanovAV-350x400.jpg"
  }, {
    id: "16",
    fullName: "-",
    timeStamp: "12:25 | 13:50",
    recentText: "Физ. культура",
    avatarUrl: ""
  }];
  return <Box>
      <Heading fontSize="xl" p="4" pb="3">
        Четверг
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
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>} keyExtractor={item => item.id} />
    </Box>;
};

const Friday = () => {
  const data = [{
    id: "",
    fullName: "Казимиров Г. Н.",
    timeStamp: "9:00 | 10:25",
    recentText: "Мат. анализ",
    avatarUrl: "https://math.gsu.by/wp-content/uploads/2016/12/KazimirovGN-350x400.jpg"
  }, {
    id: "",
    fullName: "Старовойтов А. П.",
    timeStamp: "10:40 | 12:05",
    recentText: "Мат. анализ",
    avatarUrl: "https://math.gsu.by/wp-content/uploads/2016/12/StarovoitovAP-350x400.jpg"
  }, {
    id: "",
    fullName: "Немилостива В. А.",
    timeStamp: "12:25 | 13:50",
    recentText: "ДМ и МЛ",
    avatarUrl: "https://sun9-84.userapi.com/impg/ZqSuhn4AOzAZS0L7Oo60_SPOctbPdVSYf_Yplw/MSEdMnCXUAc.jpg?size=1620x2160&quality=96&sign=717eadb54c39f3d811a44eeb1dc4d83a&type=album"
  }];
  return <Box>
      <Heading fontSize="xl" p="4" pb="3">
        Пятница
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
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>} keyExtractor={item => item.id} />
    </Box>;
};

const Saturday = () => {
  const data = [{
    id: "0",
    fullName: "Иностранный язык",
    timeStamp: "9:00 | 10:25",
    recentText: "Чернякова Е. А.",
    avatarUrl: "https://forlang.gsu.by/images/english/staff/chern.jpg"
  }, {
    id: "1",
    fullName: "Бел. язык",
    timeStamp: "10:40 | 12:05",
    recentText: "Бобрик В. А.",
    avatarUrl: "https://www.gsu.by/sites/default/files/inline-images/bobrik-vladimir-andreevich.jpg"
  }];
  return <Box>
      <Heading fontSize="xl" p="4" pb="3">
        Суббота
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
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>} keyExtractor={item => item.id} />
    </Box>;
};

const ScheduleScreen = () => {
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
        <Monday />
        <Tuesday />
        <Wednesday />
        <Thursday />
        <Friday />
        <Saturday />
        <Text></Text>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default ScheduleScreen
