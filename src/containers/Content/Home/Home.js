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

    let elements = [<Box color="#AFE9FF">test</Box>,
    <Box color="#AFE9FF">test</Box>,
    <Box color="#AFE9FF">test</Box>,
    <Box color="#AFE9FF">test</Box>,
    <Box color="#AFE9FF">test</Box>,
    ];

    return (
      <div className="Home">
        <ImageSide image={imageTest}>
          <div className="asideTitre">Test</div>
          <div className="asideContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet egestas quam, nec tempus massa. In nec interdum orci. Donec vehicula ultrices tellus, ut venenatis est consequat id. Sed volutpat purus tristique magna auctor viverra. Proin lobortis, est ac eleifend tincidunt, nisl orci venenatis eros, eu bibendum mi mi vitae enim. Aenean id molestie risus. Pellentesque at congue dolor. Etiam vel odio lacus.
          </div>
          <Button to="/posts/"/>
        </ImageSide>
        <Bandeau color="#AFE9FF">
          <Title align="center" color="#00BBFF" fade="#AFE9FF">
            Une plateforme de casting innovante
          </Title>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet egestas quam, nec tempus massa. In nec interdum orci. Donec vehicula ultrices tellus, ut venenatis est consequat id. Sed volutpat purus tristique magna auctor viverra. Proin lobortis, est ac eleifend tincidunt, nisl orci venenatis eros, eu bibendum mi mi vitae enim. Aenean id molestie risus. Pellentesque at congue dolor. Etiam vel odio lacus.
        </Bandeau>
        <Bandeau color="white">
          <Title align="center" color="#00BBFF" fade="white">
            Skype c'est chiant
          </Title>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet egestas quam, nec tempus massa. In nec interdum orci. Donec vehicula ultrices tellus, ut venenatis est consequat id. Sed volutpat purus tristique magna auctor viverra. Proin lobortis, est ac eleifend tincidunt, nisl orci venenatis eros, eu bibendum mi mi vitae enim. Aenean id molestie risus. Pellentesque at congue dolor. Etiam vel odio lacus.
        </Bandeau>
        <Bandeau color="#AFE9FF">
          <Title align="center" color="#00BBFF" fade="#AFE9FF">
            Blablabla
          </Title>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet egestas quam, nec tempus massa. In nec interdum orci. Donec vehicula ultrices tellus, ut venenatis est consequat id. Sed volutpat purus tristique magna auctor viverra. Proin lobortis, est ac eleifend tincidunt, nisl orci venenatis eros, eu bibendum mi mi vitae enim. Aenean id molestie risus. Pellentesque at congue dolor. Etiam vel odio lacus.
        </Bandeau>
        <Bandeau color="white">
          <Title align="center" color="#00BBFF" fade="white">
            Skype c'est chiant
          </Title>
          Ceci est un test
          <UniformGrid size="4" list={elements}></UniformGrid>
        </Bandeau>

        <div className="container">
          <Box color="#1F3040" textColor="white">
            <Title align="left" color="#AFE9FF" fade="#AFE9FF">
              Skype c'est chiant
            </Title>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet egestas quam, nec tempus massa. In nec interdum orci. Donec vehicula ultrices tellus, ut venenatis est consequat id. Sed volutpat purus tristique magna auctor viverra. Proin lobortis, est ac eleifend tincidunt, nisl orci venenatis eros, eu bibendum mi mi vitae enim. Aenean id molestie risus. Pellentesque at congue dolor. Etiam vel odio lacus.</div>
            <Button to="/posts/"/>
          </Box>
        </div>
      </div>
    )
  }
}

export default Home;