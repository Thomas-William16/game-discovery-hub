import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";
import loading from "../assets/DragonLoader.webp";
import { transform } from "framer-motion";

const DragonLoader = () => {
  return (
    <Center h="70vh">
      <VStack spacing={4}>
        <Box
          w="180px"
          h="120px"
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
        >
          <Image
            src={loading}
            alt="Loading..."
            boxSize="220px"
            sx={{
              animation: "spin 4s linear infinite",
              aspectRatio: "auto",
              transform: "scaleX(1.5)",
              "@keyframes spin": {
                from: { transform: "rotate(0deg)" },
                to: { transform: "rotate(360deg)" },
              },
            }}
          />
        </Box>
        <Text fontSize="xl" fontWeight="bold" color="orange.500">
          Loading Games...
        </Text>
      </VStack>
    </Center>
  );
};

export default DragonLoader;
