import React, {useEffect} from "react";
import {NavBar} from './components/navbar/navbar';
import {Header} from './components/header';
import {Grid, GridItem} from './ui/grid';
import { Highlights } from './components/highlights/highlights';
import { Feed } from "./components/feed/feed";


function App() {
 
  return (<>
    <Grid>

      <GridItem>
        <NavBar />    
      </GridItem>
      
      <GridItem>
        <Header />
        <Highlights />
        <Feed />
      </GridItem>

    </Grid>
         
  </>)
  
}

export default App
