import AppContainer from './src/components/app-container'
import Navigator from './src/'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppLoading from 'expo-app-loading'
import shortid from 'shortid'
import React, { useEffect, useState } from 'react'

export default function App() {
  
  const [ ready, setReady ]  =useState(false)

  const initialData = [
    {
      id: shortid.generate(),
      subject: '',
      done: false
    }
  ]
  
  const [data, setData] = useState(initialData)
  

  const LoadTasks = () => {
    AsyncStorage.getItem("StoredTasks").then(initialData => {
      if (initialData !== null) {
        setData(JSON.parse(initialData))
      }
    }).catch((error) => console.log(error))
  }
  



  useEffect(() => {
    LoadTasks();
    console.log(123);

   },[]);

  if (!ready) { 
    return (
      <AppContainer>
        <Navigator />
          
      </AppContainer>
    )
  }
}
