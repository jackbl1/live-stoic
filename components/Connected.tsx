import { FC } from "react";
import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Connected: FC = () => {
  return (
    <VStack spacing={20}>
      <Container>
        <VStack spacing={8}>
          <Heading
            color="white"
            as="h1"
            size="2xl"
            noOfLines={1}
            textAlign="center"
          >
            Welcome to Stoic NFTs
          </Heading>

          <Text color="bodyText" fontSize="xl" textAlign="center">
            Each Stoic NFT is a randomly generated thought from stoic
            philosophy. We hope these pieces of wisdom can serve as a reminder
            to act more intentionally and reflect on your decisions.
          </Text>
        </VStack>
      </Container>

      <HStack spacing={10}>
        <Image src="stoic1.png" alt="" />
        <Image src="stoic2.png" alt="" />
        <Image src="stoic3.png" alt="" />
        <Image src="stoic4.png" alt="" />
        <Image src="stoic5.png" alt="" />
      </HStack>

      {/* <Button bgColor="accent" color="white" maxW="380px">
        <HStack>
          <Text>mint a Stoic</Text>
          <ArrowForwardIcon />
        </HStack>
      </Button> */}
    </VStack>
  );
};

export default Connected;
