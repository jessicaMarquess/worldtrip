import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, A11y]);


export function Slider() {
  return(
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
      h={["250px", "450px"]}
    >
      <Swiper
        slidesPerView={1}
        pagination={{clickable: true}}
        navigation
        autoplay={{
          delay: 5000,
        }}
        style={{width: '100%', flex: '1'}}
      >
        <SwiperSlide>
          <Flex
            w='100%'
            h='100%'
            align="center"
            justify="center"
            direction="column"
            textAlign="center"
            bgImage="url(/europe.jpg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color="gray.100"
                  fontWeight="bold"
                >
                  Europa
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.100"
                  fontSize={["0.8rem", "1xl", "2xl"]} 
                  mt={["2", "4"]}             
                >O continente mais antigo.</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w='100%'
            h='100%'
            align="center"
            justify="center"
            direction="column"
            textAlign="center"
            bgImage="url(/asia.jpg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
          >
            <Link href="/continent/asia">
              <a>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color="gray.100"
                  fontWeight="bold"
                >
                  Ásia
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.100"
                  fontSize={["0.8rem", "1xl", "2xl"]} 
                  mt={["2", "4"]}             
                >Belas arquiteturas residem aqui.</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w='100%'
            h='100%'
            align="center"
            justify="center"
            direction="column"
            textAlign="center"
            bgImage="url(/africa.jpg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
          >
            <Link href="/continent/africa">
              <a>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color="gray.100"
                  fontWeight="bold"
                >
                  Africa
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.100"
                  fontSize={["0.8rem", "1xl", "2xl"]} 
                  mt={["2", "4"]}             
                >Aproveite o que tem de melhor na natureza</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w='100%'
            h='100%'
            align="center"
            justify="center"
            direction="column"
            textAlign="center"
            bgImage="url(/north-america.jpg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
          >
            <Link href="/continent/north-america">
              <a>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color="gray.100"
                  fontWeight="bold"
                >
                  América
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.100"
                  fontSize={["0.8rem", "1xl", "2xl"]} 
                  mt={["2", "4"]}             
                >Aproveite belas paisagens.</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w='100%'
            h='100%'
            align="center"
            justify="center"
            direction="column"
            textAlign="center"
            bgImage="url(/antarctica.jpg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
          >
            <Link href="/continent/antarctica">
              <a>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color="gray.100"
                  fontWeight="bold"
                >
                  Antártida 
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.100"
                  fontSize={["0.8rem", "1xl", "2xl"]} 
                  mt={["2", "4"]}             
                >Aproveite o tempo glacial.</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}
