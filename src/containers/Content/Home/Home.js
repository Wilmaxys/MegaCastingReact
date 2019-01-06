import React, { Component } from 'react';
import Bandeau from '../../../components/Bandeau/Bandeau';
import Title from '../../../components/Title/Title';
import ImageSide from '../../../components/ImageSide/ImageSide';
import Button from '../../../components/Button/Button';
import UniformGrid from '../../../components/UniformGrid/UniformGrid';
import Box from '../../../components/Box/Box';

import './Home.css';
import imageTest from '../../../assets/img/clap.png';

class Home extends Component {
  render() {

    let elements = [
      <Box color="#AFE9FF" align="left">
        <Title align="left" color="#1F3040" fade="#1F3040">
          Nicolas - 23 ans
        </Title>
        Pour un service 100 % gratuit je m'attendais à un site placardé de publicités mais j'ai été très surpris. Tout est clair, précis et facile d'accès. J'aime également vos articles.
      </Box>,
      <Box color="#AFE9FF" align="left">
        <Title align="left" color="#1F3040" fade="#1F3040">
          Karim - 27 ans
        </Title>
        J'aime beaucoup votre site, il est complet et surtout il touche à des domaines artistiques variés. Il donne de très bons conseils et les annonces de castings sont nombreuses et actualisées.
      </Box>,
      <Box color="#AFE9FF" align="left">
        <Title align="left" color="#1F3040" fade="#1F3040">
          Léa - 22 ans
        </Title>
        Je trouve votre site génial. Pour moi qui suis nouvelle dans le milieu artistique, vos articles et conseils m'aident énormément
      </Box>,
    ];

    return (
      <div className="Home">
        <ImageSide image={imageTest}>
          <div className="asideTitre">Rechercher des offres de casting</div>
          <div className="asideContent">
            Vous rêvez d’intégrer le monde du cinéma ou celui du théâtre en tant que comédien ou comme acteur, ou vous voulez exercer
            un autre métier dans le milieu de la comédie ou bien même vous avez un talent particulier, vous voulez tourner dans un clip,
            dans une pub, passer une audition de danse notre site est fait pour vous. Postulez aux castings rémunérés et professionnels
            ouverts aux debutants comme aux confirmés-Casting, audition, offres d'emploi artistiques pour figurants et pleins d'autres offres.
          </div>
          <Button to="/posts/" />
        </ImageSide>
        <Bandeau color="#AFE9FF">
          <Title align="center" color="#00BBFF" fade="#AFE9FF">
            Une plateforme de casting innovante
          </Title>
          Notre moteur de recherche vous permet de cibler exactement le style de casting que vous souhaitez. Il vous suffit de sélectionner les métiers pour lesquels vous souhaitez effectuer une recherche,
          ou de choisir un domaine dans lequel vous souhaitez faire carrière pour trouver toutes les offres de casting associées.
        </Bandeau>
        <Bandeau color="white">
          <Title align="center" color="#00BBFF" fade="white">
            Des conseils prodiguées par des professionnels
          </Title>
          Le milieu de la télé, du cinéma, du théâtre ou bien du spectacle représentent pour vous un rêve ou une ambition,
          mais vous ne savez pas quoi faire pour réussir? Retrouvez nos conseils artistiques pour vous faire votre place et décrocher vos premiers contrats.
        </Bandeau>
        <Bandeau color="#AFE9FF">
          <Title align="center" color="#00BBFF" fade="#AFE9FF">
            Une équipe à votre service
          </Title>
          Chacune de nos offres sont soigneusement vérifiées par nos équipes avant chaque mise en ligne ce qui vous permet dès lors d'être sûre que chacune des
          offres sont véridiques et que vous pouvez postuler sans aucune crainte. De plus, chacune des offres étant analysée, pour ce qui est de la rémunération, vous pouvez
          être sûre qu'elle est en adéquation avec la tâche demandée.
        </Bandeau>
        <Bandeau color="white">
          <Title align="center" color="#00BBFF" fade="white">
            Les utilisateurs en parlent
          </Title>
          Tout les discours au monde ne vaudront jamais les témoignages de nos utilisateurs.
          <UniformGrid size="4" list={elements}></UniformGrid>
        </Bandeau>

        <div className="container">
          <Box color="#1F3040" textColor="white">
            <Title align="left" color="#AFE9FF" fade="#AFE9FF">
              Proposer vos offres
            </Title>
            <div>Vous êtes à la recherche de nouveau talent ? Proposer vos offres de casting en contactant notre équipe.</div>
            <Button to="/posts/" />
          </Box>
        </div>
      </div>
    )
  }
}

export default Home;