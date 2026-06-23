import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/HubLogo.webp";

import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image
        src={logo}
        boxSize="60px"
        objectFit="contain"
        borderRadius="12px"
      />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
