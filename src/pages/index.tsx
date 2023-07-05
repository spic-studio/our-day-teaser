import { Flex, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex h="100vh" w="100vw" bgImage="images/bg.jpg" bgSize="cover" bgRepeat="no-repeat" bgPosition="center" alignItems="center" justifyContent="center" overflow="hidden">
      <Image src="/images/letters.png" w={["57vw"]} h="auto" />
    </Flex >
  )
}
