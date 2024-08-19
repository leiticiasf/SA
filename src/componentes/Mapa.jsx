import { Container, Navbar, Button } from "react-bootstrap";
import "../App.css"
import mapa from "../assets/mapa.png"
import { useNavigate } from "react-router";
import adicionarPonto from "../assets/add.png"
function Mapa(){

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };
    return(
        <div>
        <Navbar>
        <div className="navbar-btn">
          <Button onClick={handleClick}> Voltar  </Button> 
          </div>
      </Navbar>

        <h1>Mapa</h1>
        <Container className="mapaPagina">
                <img id="mapa" src={mapa}/>
                    <img id="addPonto " src={adicionarPonto} />
        </Container>

        </div>
    )
}

export default Mapa;