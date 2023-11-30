import { Button, Card } from "react-bootstrap";

const CardComponent = (props) => {
  return (
    <Card>
      <Card.Img src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">${props.price}</Card.Footer>
      <Button
        variant="primary"
        onClick={() =>
          props.addItem({
            title: props.title,
            price: props.price,
          })
        }
      >
        Buy Now
      </Button>
    </Card>
  );
};

export default CardComponent;
