import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import AuthRouter from './routes/AuthRouter'
import { articlesLoad } from './actions/articlesAction'
import { ChakraProvider } from "@chakra-ui/react"
import {infoWeare} from './actions/weareActions'


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(articlesLoad());
    dispatch(infoWeare());
  }, [dispatch])
  return (
    <ChakraProvider>
      <AuthRouter />
    </ChakraProvider>
  );
}

export default App;
