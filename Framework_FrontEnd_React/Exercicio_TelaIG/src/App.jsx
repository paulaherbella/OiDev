import {NavBar} from './components/navbar/navbar';
import {Header} from './components/header';
import {Grid, GridItem} from './ui/grid';

function App() {
  
  return (<>
    <Grid>

      <GridItem>
        <NavBar />    
      </GridItem>
      
      <GridItem>
        <Header />
      </GridItem>

    </Grid>
         
  </>)
  
}

export default App
