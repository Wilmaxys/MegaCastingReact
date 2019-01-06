import React, { Component } from 'react';
import Box from '../../../components/Box/Box';
import Title from '../../../components/Title/Title';
import Bandeau from '../../../components/Bandeau/Bandeau';
import UniformGrid from '../../../components/UniformGrid/UniformGrid';
import Button from '../../../components/Button/Button';

class Advices extends Component {

  render() {

    let elements = [
      <Box color="#AFE9FF" align="left">
        <Title align="left" color="#1F3040" fade="#1F3040">
        Le rôle du comédien
        </Title>
        Un acteur doit savoir interpréter et représenter un personnage, une situation, une idée, devant un public ou devant des caméras...
        <Button to="/advices/actor">Lire</Button>
      </Box>,
      <Box color="#AFE9FF" align="left">
        <Title align="left" color="#1F3040" fade="#1F3040">
          Trouver des annonces
        </Title>
        Si vous ne faites pas partie d’une agence, vous devez postuler des annonces de castings. Répondez à un maximum d’offres qui correspondent à votre profil...
        <Button to="/advices/casting">Lire</Button>
      </Box>,
      <Box color="#AFE9FF" align="left">
        <Title align="left" color="#1F3040" fade="#1F3040">
          Conseils pour devenir figurant
        </Title>
        Si vous rêvez de tourner dans un clip, jouer dans une pub, apparaître dans une série télé ou figurer dans un film, la figuration est faite pour vous ! 
        <Button to="/advices/figurant">Lire</Button>
      </Box>,
    ];

    return (
      <Bandeau color="white">
        <Title align="center" color="#00BBFF" fade="white">
          Les conseils de nos équipes
        </Title>
        Tout les discours au monde ne vaudront jamais les témoignages de nos utilisateurs.
        <UniformGrid size="4" list={elements}></UniformGrid>
      </Bandeau>
      );
  }

}

export default Advices;