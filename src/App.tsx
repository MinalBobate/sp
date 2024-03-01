import { Container } from "@mui/material"
import RegisterForm from "./pages/RegisterForm"
import Form2 from "./pages/Form2"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Container maxWidth="xs">
       <BrowserRouter>
       <Routes>
          <Route path="/" element={<RegisterForm />}/>
          <Route path="/form2" element={<Form2/>} />
        
          
        </Routes>
       
       </BrowserRouter>
     
    </Container>
  )
}

export default App