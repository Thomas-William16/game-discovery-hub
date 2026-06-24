import { HStack, Image } from "@chakra-ui/react";
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
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
