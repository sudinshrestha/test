import React from 'react';
import { Image, CardGroup, Button, Card} from 'react-bootstrap';
import image from './image.jpeg';
import image1 from './image1.png'
function Scorecard(){
return(<div>
    

<CardGroup>
  <Card>
    <Card.Img variant="top" />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
      <Image className="photo" src={image} rounded />
    </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top"  />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
      <Image className="photo" src={image1} rounded />
      </Card.Text>
    </Card.Body>
     </Card>
</CardGroup>

<CardGroup>
<Card className="text-center">  
  <Card.Header>ScoreBoard</Card.Header>
  <Card.Body>
    <Card.Title>M10 barbados Royals</Card.Title>
    <Card.Title>M10 barbados Royals</Card.Title>
    <Card.Text>
      Warren Park, Saint Kitts and Nevis
    </Card.Text>
    <Card.Text>
      31 August 2021
    </Card.Text>
   </Card.Body>
   </Card>
   <Card className="text-center">  
  <Card.Header>ScoreBoard</Card.Header>
  <Card.Body>
    <Card.Title>Total Runs: 22 </Card.Title>
    </Card.Body>
   </Card>
</CardGroup>
  
</div>);
}
export default Scorecard;