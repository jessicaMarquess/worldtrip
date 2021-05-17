import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      as="div"
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImg="url(./backgroundBanner.png)"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        w="100%"
        align="center"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
        justifyContent={["center", "space-between"]}
      >
        <Box>
          <Heading
            pt={3}
            alignItems="center"
            fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
            color="white"
          >
            5 Continentes,
            <br />
            infinitas possibilidades
          </Heading>
          <Text as="p" mt={5} color="gray.300" fontSize={["0.8rem", "xl"]}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Box>
          <Image
            w={["300px","300px", "300px", "430px"]}
            display={["none","none", "block"]}
            src="./Airplane.svg"
            alt="airplane"
            ml={8}
            transform="translateY(55px)"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
