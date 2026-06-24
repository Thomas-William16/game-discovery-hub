import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/NewLogo.webp";

import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image
        src={logo}
        boxSize="60px"
        objectFit="contain"
        borderRadius="12px"
      />
      <Text
        fontFamily="'Pirata One', serif"
        fontSize="3xl"
        color="orange.400"
        textShadow="2px 2px 4px rgba(0,0,0,0.8)"
        fontStyle="oblique"
      >
        Dragon's Den
      </Text>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
