import "../App.css"
import mapa from "../assets/mapa.png"
import { useNavigate, Link } from "react-router-dom";
import React, {handleSubmit, useState} from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import exemploMapa from "../assets/gatsu.jpg";

function Visualizar() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setSelectedImage(URL.createObjectURL(file));
      }
    };

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };
    const irPonto = () => {
        navigate('/ponto');
    };

    const verPonto = () => {
        navigate('/visualizar');
    }

    return (
        <div className="mapaBody">
        <Navbar className="topnav">
        <div className="navbar-btn">
        <div className="search-container">
            <input type="text"  placeholder="Procurar ponto de coleta" name="search"/>
            <button type="submit"></button>
            </div>

          <Button onClick={handleClick}> Voltar  </Button>  &nbsp;
          <Button onClick={irPonto}> Adicionar Ponto  </Button> 
          <Button onClick={verPonto}>Visualizar Ponto</Button>
          </div>
      </Navbar>
      <Container className="mapaPagina">
     
        <h1>Mapa</h1>
                  <img id="mapa" src={mapa}/> 
                  <div className="verPonto">
                   <img id="imgexp" src={exemploMapa} />
                   <p id="descricaoPonto">blablablablablablablablablabblabl  blablablablablablablablablabblabl blablablablablablablablablabblabl blablablablablablablablablabblabl </p>
                  <h3 id="visu">Comentários</h3>

                 <div id="addcoment">
                    <textarea type="text"placeholder="Adicionar comentário"></textarea>

                        <form onSubmit={handleSubmit}>
                        <input 
                            type="file"
                            accept="image/*" 
                            onChange={handleImageChange}
                        />
                        <br/><br/><br/>
                        </form>       
                        </div>
                    
                  </div>
                 
        </Container>


        

        </div>
    );
}

export default Visualizar;