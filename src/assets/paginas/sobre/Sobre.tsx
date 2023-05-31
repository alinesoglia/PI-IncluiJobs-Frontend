import { Box, Grid, Tooltip, Typography } from "@material-ui/core";
import "./Sobre.css";
import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import Navbar from "../../components/estaticos/navbar/Navbar";

function Sobre() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixaSobre"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo2"
            >
              Sobre nós:
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="texto2"
            >
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam veritatis voluptatum ipsa deserunt cupiditate rerum quasi eum veniam laborum repudiandae tenetur magnam esse consectetur, dolor voluptas quia. Sint, sequi reprehenderit.
            </Typography>
          </Box>
          </Grid>
        <Grid item xs={6}>
          <img
            src="/src/images/backgroundCadTemas2.png"
            alt=""
            width="100%"
            height="100%"
          />
        </Grid>
        </Grid>
        <div className="caixa">
        <br></br>
        <h1>Conheça nossa equipe!</h1>
        </div>
        <Stack direction={"row"} className="caixa">
          <Box marginX={"auto"} >
            <Stack direction={"row"} flexWrap={"wrap"}>
              <div className="person">
                <div className="container">
                  <div className="container-inner">
                    <img className="circle" />
                    <img className="img img1" src="/src/images/ALINE PERFIL-sem fundo.png" />
                  </div>
                </div>
                <div className="divider"></div>
                <div className="name">Desenvolvedor 1</div>
                <div className="title">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                  accusantium officiis quas sunt labore, voluptatum perferendis.
                  Numquam obcaecati ipsa aspernatur voluptatem velit ut quo.
                  Perspiciatis harum laudantium odio minus eaque. Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. At accusantium
                  officiis quas sunt labore, voluptatum perferendis. Numquam
                  obcaecati ipsa aspernatur voluptatem velit ut quo. Perspiciatis
                  harum laudantium odio minus eaque. Lorem ipsum dolor sit, amet
                  consectetur
                </div>
              </div>
              {/* imagem 2* */}
              <div className="person">
                <div className="container">
                  <div className="container-inner">
                    <img className="circle" />
                    <img className="img img2" src="/src/images/Erenilda.png" />
                  </div>
                </div>
                <div className="divider"></div>
                <div className="name">Desenvolvedor 2</div>
                <div className="title">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                  accusantium officiis quas sunt labore, voluptatum perferendis.
                  Numquam obcaecati ipsa aspernatur voluptatem velit ut quo.
                  Perspiciatis harum laudantium odio minus eaque. Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. At accusantium
                  officiis quas sunt labore, voluptatum perferendis. Numquam
                  obcaecati ipsa aspernatur voluptatem velit ut quo. Perspiciatis
                  harum laudantium odio minus eaque. Lorem ipsum dolor sit, amet
                  consectetur
                </div>
              </div>
              {/* imagem 3* */}
              <div className="person">
                <div className="container">
                  <div className="container-inner">
                    <img className="circle" />
                    <img className="img img3" src="/src/images/Rebeca.png" />
                  </div>
                </div>
                <div className="divider"></div>
                <div className="name">Desenvolvedor 3</div>
                <div className="title">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                  accusantium officiis quas sunt labore, voluptatum perferendis.
                  Numquam obcaecati ipsa aspernatur voluptatem velit ut quo.
                  Perspiciatis harum laudantium odio minus eaque. Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. At accusantium
                  officiis quas sunt labore, voluptatum perferendis. Numquam
                  obcaecati ipsa aspernatur voluptatem velit ut quo. Perspiciatis
                  harum laudantium odio minus eaque. Lorem ipsum dolor sit, amet
                  consectetur
                </div>
              </div>
            </Stack>
            <Stack direction={"row"} flexWrap={"wrap"} marginBottom={10}>
              {/* imagem 4* */}
              <div className="person">
                <div className="container">
                  <div className="container-inner">
                    <img className="circle" />
                    <img className="img img4" src="/src/images/vinicius.png" />
                  </div>
                </div>
                <div className="divider"></div>
                <div className="name">Desenvolvedor 4</div>
                <div className="title">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                  accusantium officiis quas sunt labore, voluptatum perferendis.
                  Numquam obcaecati ipsa aspernatur voluptatem velit ut quo.
                  Perspiciatis harum laudantium odio minus eaque. Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. At accusantium
                  officiis quas sunt labore, voluptatum perferendis. Numquam
                  obcaecati ipsa aspernatur voluptatem velit ut quo. Perspiciatis
                  harum laudantium odio minus eaque. Lorem ipsum dolor sit, amet
                  consectetur
                </div>
              </div>
              {/* imagem 5* */}
              <div className="person">
                <div className="container">
                  <div className="container-inner">
                    <img className="circle" src="*** imagem de fundo ***" />
                    <img className="img img3" src="** imagem do perfil **" />
                  </div>
                </div>
                <div className="divider"></div>
                <div className="name">Desenvolvedor 5</div>
                <div className="title">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                  accusantium officiis quas sunt labore, voluptatum perferendis.
                  Numquam obcaecati ipsa aspernatur voluptatem velit ut quo.
                  Perspiciatis harum laudantium odio minus eaque. Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. At accusantium
                  officiis quas sunt labore, voluptatum perferendis. Numquam
                  obcaecati ipsa aspernatur voluptatem velit ut quo. Perspiciatis
                  harum laudantium odio minus eaque. Lorem ipsum dolor sit, amet
                  consectetur
                </div>
              </div>
              {/* imagem 6* */}
              <div className="person">
                <div className="container">
                  <div className="container-inner">
                    <img className="circle" src="*** imagem de fundo ***" />
                    <img className="img img3" src="** imagem do perfil **" />
                  </div>
                </div>
                <div className="divider"></div>
                <div className="name">Desenvolvedor 6</div>
                <div className="title">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                  accusantium officiis quas sunt labore, voluptatum perferendis.
                  Numquam obcaecati ipsa aspernatur voluptatem velit ut quo.
                  Perspiciatis harum laudantium odio minus eaque. Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. At accusantium
                  officiis quas sunt labore, voluptatum perferendis. Numquam
                  obcaecati ipsa aspernatur voluptatem velit ut quo. Perspiciatis
                  harum laudantium odio minus eaque. Lorem ipsum dolor sit, amet
                  consectetur
                </div>
              </div>
            </Stack>
          </Box>
        </Stack>
      </>
      );
}
      export default Sobre;
