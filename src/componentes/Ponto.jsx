import doguitos from "../assets/frango.jpg"
import { Container, Navbar, Button } from "react-bootstrap";
import "../App.css"
import { useNavigate } from "react-router-dom";

function Ponto(){

    const navigate = useNavigate();
    const voltar = () => {
                navigate("/")
    };

    return(
        <>
              
        <Container className="registroPonto">
        <Navbar className="topnav">
        <div className="navbar-btn">
          <Button onClick={voltar}> Voltar  </Button>  &nbsp;
          </div>
      </Navbar>
      </Container>
        </>
    )
}

export default Ponto;