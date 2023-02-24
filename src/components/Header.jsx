import Button from "./styles/Button.styled";
import Flex from "./styles/Flex.styled";
import StyledHeader, { Logo, Nav, Image } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo src="./images/logo.png" alt="" />
        <div>
          <Button color="#A62440">Apply Courses</Button>
          <Button bg="#A62440">Talk to adviser</Button>
        </div>
      </Nav>

      <Flex>
        <div>
          <h1>The IT Career of Your dreams Starts Here!!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad dolor,
            ipsum aperiam fugit, voluptatum non corporis veniam reiciendis hic
            suscipit vero repellat explicabo quo, perspiciatis totam natus
            voluptatem quidem corrupti?
          </p>
          <Button bg="#A62440">Tstart Your New Carier</Button>
        </div>
        <Image
          src="./images/WhatsApp Image 2023-02-22 at 19.35.56.jpeg"
          alt=""
        />
      </Flex>
    </StyledHeader>
  );
};

export default Header;
