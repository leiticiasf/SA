import doguitos from "../assets/frango.jpg"
import { Container, Navbar, Button } from "react-bootstrap";
import "../App.css"
import { useNavigate } from "react-router-dom";
import React, { useState, handleSubmit } from "react";

function Ponto(){
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setSelectedImage(URL.createObjectURL(file));
      }
    };
  
    const enviar = () => {
        alert("Ponto registrado com sucesso!")
    }
    const navigate = useNavigate();
    const voltar = () => {
                navigate("/")
    };

    return(
            <>
        <Navbar className="topnav">
        <div className="navbar-btn">
          <Button onClick={voltar}> Voltar  </Button>  &nbsp;
          </div>
      </Navbar>
      <div className="adicionarPontos">

      <div id="addFoto">

      <form onSubmit={handleSubmit}>
        <input 
          type="file"
          id="pontoImg "
          accept="image/*" 
          onChange={handleImageChange}
        />
        <br/><br/><br/>
      </form>       
      </div>

      <input id="inputNome" type="text" placeholder="Nome da praia" /> 
      <br/><br/>
      <input id="inputEndereco"type="text" placeholder="Endereço" />
      <br/><br/>
      <input id="inputComplemento"type="text" placeholder="Complemento" />

      <textarea  id="inputDescricao"type="text" placeholder="Faça uma breve descrição do ponto." />
      
      <button id="botaoEnviar" onClick={enviar} >Enviar</button>
      </div>
        </>
    )
}

export default Ponto;