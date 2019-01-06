import React from 'react';
import Box from '../../../components/Box/Box';
import Title from '../../../components/Title/Title';

import './Casting.css';

const Casting = (props) => {
  return (

    <div className="container">
      <Box color="#1F3040" textColor="white">
        <Title align="left" color="#AFE9FF" fade="#AFE9FF">
          Trouver des annonces
        </Title>
        <div>
          Si vous ne faites pas partie d’une agence, vous devez postuler des annonces de castings. Répondez à un maximum d’offres qui correspondent à votre profil. Si vous n’êtes pas chanteur, il n’est pas nécessaire de postuler au casting d’une comédie musicale ! Envoyez vos photos professionnelles (en portraits et en pieds) ainsi qu’un CV, par mail sous format Word ou PDF. Attention : N’envoyez pas de photos trop lourdes par mail.<br /><br /> 
        </div>
        <Title align="left" color="#AFE9FF" fade="#AFE9FF">
          Bien se préparer pour l’audition
        </Title>
        <div>
          Notez consciencieusement le jour, l’heure et l’adresse de votre casting. Si vous ne connaissez pas l’itinéraire munissiez-vous d’un plan et n’hésitez pas à arriver en avance. N’oubliez pas de demander au directeur de casting le code vestimentaire à respecter et soignez votre look car vous vendez votre image !<br /><br />
          Pour un comédien ou un chanteur, apprenez au mot près le texte proposé. Cela vous évitera de perdre vos moyens le jour de l’audition. <br /><br />
        </div>
        <Title align="left" color="#AFE9FF" fade="#AFE9FF">
          Le jour du casting
        </Title>
        <div>
          Soyez à l’heure ! N’oubliez pas que vous n’êtes pas le seul à passer l’audition et que les directeurs de casting sont sensibles à la ponctualité et au professionnalisme d’un artiste.<br /><br />

          Soyez au Top, montrez vous sous votre meilleur jour (pas de sortie en boîte la veille). Restez souriant, et courtois, même si votre interlocuteur ne semble pas réceptif à votre politesse, ce n’est pas pour autant qu’il faut se comporter comme lui car c’est peut-être un test de sa part.<br /><br />

          Ne vous formalisez pas...les journées sont longues et pensez que le directeur de casting a vu de nombreuses personnes avant vous et qu'il en verra beaucoup d’autres après vous.<br /><br />

          N'ayez pas peur de demander ce que vous devez faire pendant le casting que ce soit au niveau des attitudes et expressions. Pour bien réussir son casting, il faut d'abord comprendre ce que l'on vous demande.<br /><br />

          Ne mâchez pas de chewing-gum pendant un casting, ce n'est pas poli d'une part pour votre interlocuteur et d'autre part parce que votre mâchoire ne sera pas détendue sur les photos ou sur la vidéo. Venir passer un casting pour ne pas réussir ses photos semble être simplement une perte de temps pour tout le monde.

          A la fin de votre entretien, pensez à remercier votre interlocuteur et ne vous attardez pas sauf si on vous le demande.

          Même si cela ne vous semble pas nécessaire, pensez à ramener un CV et vos photos. Cela peut être un gain de temps pour le jury. 
        </div>
      </Box>
    </div>

  );
}

export default Casting;