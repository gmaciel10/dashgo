import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

export default function Header() {
  return (
    <Flex
      as="header"
      h="20"
      w="100%"
      maxW={1480}
      align="center"
      mt="4"
      mx="auto"
      px="6"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        Dashboard
        <Text as="span" color="pink.500" ml="1">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        position="relative"
        flex="1"
        maxW={400}
        alignSelf="center"
        ml="6"
        py="4"
        px="6"
        bg="gray.800"
        color="gray.200"
        borderRadius="full"
      >
        <Input
          px="4"
          mr="4"
          variant="unstyled"
          placeholder="buscar..."
          _placeholder={{
            color: "gray.400",
          }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" mx="auto">
        <HStack
          spacing="8"
          py="1"
          pr="8"
          mx="8"
          color="gray.300"
          borderColor="gray.700"
          borderRightWidth={1}
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Guilherme Costa Maciel</Text>
            <Text color="gray.300" fontSize="small">
              guilherme.maciel@alcans.com.br
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Guilherme Maciel"
            src="https://avatars.githubusercontent.com/u/67983309?s=60&v=4"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
