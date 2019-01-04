import React, { Component } from 'react';
import Bandeau from '../../../components/Bandeau/Bandeau';
import Title from '../../../components/Title/Title';
import ImageSide from '../../../components/ImageSide/ImageSide';

import './Home.css';
import imageTest from '../../../assets/img/clap.png';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <ImageSide image={imageTest}>
          <div className="asideTitre">Test</div>
          <div className="asideContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet egestas quam, nec tempus massa. In nec interdum orci. Donec vehicula ultrices tellus, ut venenatis est consequat id. Sed volutpat purus tristique magna auctor viverra. Proin lobortis, est ac eleifend tincidunt, nisl orci venenatis eros, eu bibendum mi mi vitae enim. Aenean id molestie risus. Pellentesque at congue dolor. Etiam vel odio lacus.
          </div>
          <a className="asideButton col-md-3" href="/">LEARN MORE</a>
        </ImageSide>
        <Bandeau color="#AFE9FF">
          <Title>
            Une plateforme de casting innovante
          </Title>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet egestas quam, nec tempus massa. In nec interdum orci. Donec vehicula ultrices tellus, ut venenatis est consequat id. Sed volutpat purus tristique magna auctor viverra. Proin lobortis, est ac eleifend tincidunt, nisl orci venenatis eros, eu bibendum mi mi vitae enim. Aenean id molestie risus. Pellentesque at congue dolor. Etiam vel odio lacus.
        </Bandeau>
        <Bandeau color="white">
          <Title>
            Skype c'est chiant
          </Title>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet egestas quam, nec tempus massa. In nec interdum orci. Donec vehicula ultrices tellus, ut venenatis est consequat id. Sed volutpat purus tristique magna auctor viverra. Proin lobortis, est ac eleifend tincidunt, nisl orci venenatis eros, eu bibendum mi mi vitae enim. Aenean id molestie risus. Pellentesque at congue dolor. Etiam vel odio lacus.
        </Bandeau>
        <Bandeau color="#AFE9FF">
          <Title>
            Blablabla
          </Title>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet egestas quam, nec tempus massa. In nec interdum orci. Donec vehicula ultrices tellus, ut venenatis est consequat id. Sed volutpat purus tristique magna auctor viverra. Proin lobortis, est ac eleifend tincidunt, nisl orci venenatis eros, eu bibendum mi mi vitae enim. Aenean id molestie risus. Pellentesque at congue dolor. Etiam vel odio lacus.
        </Bandeau>
      </div>
    )
  }
}

export default Home;