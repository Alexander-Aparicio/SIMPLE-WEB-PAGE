import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useWindowDimensions from "../../helpers/WindowDimension";
import Logotipo from "../../public/logo-kpop-dance-revolution.png";
import { Encabezado, Figure, Navbar, OptionMenu } from "./HeaderStyles";

export const Logo = ({ nameOne, nameTwo, logo }) => {
  return (
    <Figure>
      <Image src={logo} alt={`${nameOne} ${nameTwo}`} width={40} height={50} />
      <figcaption>
        <p>{nameOne}</p>
        <br />
        <p>{nameTwo}</p>
      </figcaption>
    </Figure>
  );
};

const Navegation = ({ home, blog }) => {
  const router = useRouter();

  console.log();
  return (
    <Navbar>
      {home ? (
        <OptionMenu className={router.asPath == "/" ? "seleccionado" : ""}>
          <Link href={"/"}>{home}</Link>
        </OptionMenu>
      ) : null}

      {blog ? (
        <OptionMenu
          className={router.asPath == "/inscripciones" ? "seleccionado" : ""}
        >
          <Link href={"/inscripciones"}>{blog}</Link>
        </OptionMenu>
      ) : null}
    </Navbar>
  );
};

const Header = (props) => {
  const { width } = useWindowDimensions();

  return (
    <Encabezado position={props.v} background={props.x}>
      <Logo logo={Logotipo} nameOne={"REVOLUTION"} nameTwo={"DANCE"} />
      {width > 600 ? <Navegation home="Home" blog="Inscríbete" /> : null}
    </Encabezado>
  );
};

export default Header;
