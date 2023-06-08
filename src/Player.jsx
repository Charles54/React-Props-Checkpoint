import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: '24rem', margin: '1rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Card.Img variant="top" src={imageUrl} style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '1rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
      <Card.Body>
        <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{name}</Card.Title>
        <Card.Text>
          <div>
            <strong>Team:</strong> {team}
          </div>
          <div>
            <strong>Nationality:</strong> {nationality}
          </div>
          <div>
            <strong>Jersey Number:</strong> {jerseyNumber}
          </div>
          <div>
            <strong>Age:</strong> {age}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: 'Player Name',
  team: 'Unknown Team',
  nationality: 'Unknown Nationality',
  jerseyNumber: 0,
  age: 0,
  imageUrl: 'https://example.com/default.jpg',
};

export default Player;
