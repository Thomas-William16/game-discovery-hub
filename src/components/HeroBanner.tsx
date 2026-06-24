import { Box, Text, Button, Skeleton } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../Services/image-url";

interface Props {
  game: Game | null;
  isLoading: boolean;
}

const HeroBanner = ({ game, isLoading }: Props) => {
  if (isLoading) return <Skeleton height="300px" borderRadius="12px" mb={6} />;
  if (!game) return null;

  return (
    <Box
      position="relative"
      borderRadius="12px"
      overflow="hidden"
      mb={6}
      height="300px"
      bgImage={`url('${getCroppedImageUrl(game.background_image)}')`}
      bgSize="cover"
      bgPosition="center"
    >
      {/* Dark gradient overlay */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-r, blackAlpha.900 40%, transparent)"
      />

      {/* Content */}
      <Box
        position="relative"
        zIndex={1}
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        px={8}
        gap={3}
      >
        <Text
          fontSize="xs"
          fontWeight="bold"
          color="yellow.400"
          letterSpacing="widest"
        >
          FEATURED GAME
        </Text>
        <Text
          fontSize="4xl"
          fontWeight="extrabold"
          color="white"
          lineHeight="1.1"
        >
          {game.name}
        </Text>
        <Text color="whiteAlpha.800" fontSize="sm">
          Metacritic Score: {game.metacritic}
        </Text>
        <Button
          mt={2}
          colorScheme="yellow"
          size="md"
          width="fit-content"
          borderRadius="8px"
        >
          View Game
        </Button>
      </Box>
    </Box>
  );
};

export default HeroBanner;
