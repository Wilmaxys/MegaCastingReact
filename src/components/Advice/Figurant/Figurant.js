import React from 'react';
import Box from '../../../components/Box/Box';
import Title from '../../../components/Title/Title';

import './Figurant.css';

const Figurant = (props) => {
  return (

    <div className="container">
      <Box color="#1F3040" textColor="white">
        <div>
          Si vous rêvez de tourner dans un clip, jouer dans une pub, apparaître dans une série télé ou figurer dans un film, la figuration est faite pour vous !<br /><br />
          Il n'y a pas d'exigences particulières pour devenir comédiens de complément, mais vous aurez plus de chance si vous avez une « gueule » ou des aptitudes artistiques telles que le chant, la danse, le jonglage...<br /><br />

          Vous avez décidé de devenir figurant, mais vous ne savez ni comment faire, ni à qui vous adresser... Avec ce petit guide, découvrez le métier, ses avantages et ses inconvénients, mais aussi les erreurs à ne surtout pas commettre. Grâce à Allcasting, la figuration n'aura plus de secrets pour vous !<br /><br />
        </div>
        <Title align="left" color="#AFE9FF" fade="#AFE9FF">
          Quel figurant êtes-vous ?
        </Title>
        <div>
          Grossièrement, on peut classer les figurants en 2 grandes catégories : les dilettantes et les professionnels. Les premiers conçoivent la figuration comme une façon agréable de gagner un peu d'argent. Ce sont souvent des étudiants qui arrondissent ainsi leurs fins de mois et découvrent l'envers du cinéma.<br /><br />

          Les autres sont des apprentis-comédiens, des gens désireux de percer dans le milieu, ou encore des intermittents du spectacle. Pour eux, la figuration est une solution d'attente en espérant de meilleures opportunités. En fréquentant les plateaux de tournage, les figurants peuvent en effet se rapprocher d'un réalisateur, d'un acteur, enrichir leur réseau et ainsi postuler à des rôles plus intéressants. C'est ainsi que Sandrine Bonnaire, venue faire de la figuration pour A nos amours, a décroché le premier rôle. Comme quoi, pour peu que le talent suive, la figuration peut mener à tout...
        </div>
      </Box>
    </div>

  );
}

export default Figurant;