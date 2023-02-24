import content from "../data";
import { CardImg, CardTitle, Description, Main } from "./styles/Card.styled";

const Card = () => {
  return (
    <div>
      {content.map((item) => {
        const { id, body, title, image } = item;
        return (
          <Main key={id} id={id}>
            <div>
              <CardImg src={`./images/${image}`} alt="" />
            </div>
            <div>
              <CardTitle>{title}</CardTitle>
              <Description>{body}</Description>
            </div>
          </Main>
        );
      })}
    </div>
  );
};

export default Card;
