import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score >= 85 ? "green" : score > 65 ? "yellow" : "";

  return (
    <Badge
      colorScheme={color}
      fontSize="16px"
      paddingX="8px"
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
