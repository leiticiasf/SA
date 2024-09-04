import { useNavigate, Link} from "react-router-dom";
import React, {handleSubmit, useState} from 'react';
import { Container, Navbar, Button } from "react-bootstrap";
import "./editar.css";
import icon from "../assets/add.png"

function editarPerfil() {
    const navigate = useNavigate();
     const voltar = () => {
        navigate('/')
     };

     const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setSelectedImage(URL.createObjectURL(file));
      }
    };
  
    const enviar = () => {
        alert("Alterações salvas!")
    }



    return(
        <>
        <Navbar className="topnav">
        <div className="navbar-btn">
          <Button onClick={voltar}> Voltar  </Button>  &nbsp;
          </div>
         </Navbar>


            <div  id="fotoPerfil">
              <img src={icon} id="iconefoto" />
            <form onSubmit={handleSubmit}>
            <input 
                type="file"
                id="imgss"
                accept="image/*" 
                onChange={handleImageChange}
            />
            <br/><br/><br/>
            </form>   
            </div>    

            <input id="inputUser" type="text" placeholder="Nome" /> 
            <br/><br/>
            <input id="inputEmail"type="text" placeholder="Email" />
            <br/><br/>
            <input id="inputSenha"type="text" placeholder="Senha" />

            <button id="botaoSalvar" onClick={enviar} >Salvar</button>  

            </>
    );
}

export default editarPerfil;