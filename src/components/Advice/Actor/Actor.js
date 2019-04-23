import React from 'react';
import Box from '../../../components/Box/Box';
import Title from '../../../components/Title/Title';

import './Actor.css';

const actor = (props) => {
  return (

    <div className="container">
      <Box color="#1F3040" textColor="white">
        <Title align="left" color="#AFE9FF" fade="#AFE9FF">
          Le rôle du comédien
        </Title>
        <div>
          Un acteur doit savoir interpréter et représenter un personnage, une situation, une idée, devant un public ou devant des caméras, à partir d'un support de création (texte, scénario, thème...) et à l'aide de techniques d'expression gestuelle ou orale.<br /><br />
          A leurs débuts les acteurs commencent souvent par de petits rôles ou par de la figuration avant de se voir confier un rôle important. Avec l'expérience, Il peut enseigner son art à un public de professionnels ou d'amateurs, ou diriger des artistes dramatiques. Il peut aussi assurer des fonctions de direction dans une école d'art dramatique ou une compagnie d'acteurs.<br /><br />
        </div>
        <Title align="left" color="#AFE9FF" fade="#AFE9FF">
          Qualités recherchées ?
        </Title>
        <div>
          Du talent ! C’est évidemment le premier critère. Si la maîtrise des techniques vocales, respiratoires et corporelles constitue la base attendue, il est essentiel d’avoir le petit plus qui fait la différence. Etre passionné de littérature, savoir danser, chanter, jouer d’un instrument sont, par exemple, des atouts incontestables.
        </div>
      </Box>
    </div>

  );
}

export default actor;