import React, { Component } from 'react';
import Box from '../../../components/Box/Box';
import Title from '../../../components/Title/Title';
import Button from '../../../components/Button/Button';

class Advices extends Component {

  render() {
    return (
      <div className="container">
        <Box color="#1F3040" textColor="white">
          <Title align="left" color="#AFE9FF" fade="#AFE9FF">
            Contact
          </Title>
          <div>
            MegaCasting<br /><br />
            53, rue aristide briand<br /><br />
            53000 LAVAL<br /><br />
            02 43 xx xx xx | 06 43 xx xx xx <br /><br />
            contact@MegaCasting.fr<br /><br />
          </div>
        </Box>
      </div>
    );
  }

}

export default Advices;