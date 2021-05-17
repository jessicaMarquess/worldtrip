import { Flex, Image, Grid, Icon } from "@chakra-ui/react";
import {RiArrowLeftSLine} from 'react-icons/ri';
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export function Header() {
  const {asPath} = useRouter();
  const isHomePage = asPath !== "/"
  return (
    <Flex
      backgroundColor="white"
      as="header"
      w="100%"
      h={["50px", "100px"]}
      px="1rem"
      mx="auto"
      align="center"
      justify="center"
    >
      <Grid
        w="100%"
        maxW={"1160px"}
        mx="auto"
        templateColumns="repeat(3, 1fr)"
        alignItems="center"
        justifyContent="center"
      >
        {isHomePage && (
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start"/>
            </a>
          </Link>
        )}
        <Image
          w={["81px", "184px"]}
          src="/Logo.svg"
          alt="Logo"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
