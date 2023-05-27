import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import Usuario from "../../../model/Usuario";
import { buscaId } from "../../../service/service";
import { Avatar, Container, Typography } from "@material-ui/core";
import { Grid } from "@mui/material";

function Perfil() {
  const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [usuario, setUsuario] = useState<Usuario>({
    id: +userId,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
  });

  async function getUserById(id: number) {
    await buscaId(`/usuarios/${id}`, setUsuario, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getUserById(+userId);
  }, []);

  return (
    <>
      <Container>
        <Grid container marginTop={5}>
          <Grid xs={3} alignItems="center" justifyContent="center">
            <Avatar
              src={usuario.foto}
              alt=""
              style={{ width: "15rem", height: "15rem", margin: "0 auto" }}
            />
            <Typography variant="h5" align="center">
              {" "}
              {usuario.nome}{" "}
            </Typography>
          </Grid>
          <Grid xs={9} justifyContent="center">
            <Typography variant="h4" align="center">
              {" "}
              Postagens de{usuario.nome}{" "}
            </Typography>
            Você tem um total de {usuario.postagem?.length} postagens feitas
            {usuario.postagem?.map((post) => (
              <p> {post.titulo} </p>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Perfil;