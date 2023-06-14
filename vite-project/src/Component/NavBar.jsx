import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Image
} from "@chakra-ui/react";
// import { Logo } from "@choc-ui/logo";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillBell,
} from "react-icons/ai";
import { BsFillCameraVideoFill,BsFillMicFill} from "react-icons/bs";
import { MdDensitySmall } from "react-icons/md";

export default function NavBar() {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
  return (
    <div>
         <React.Fragment>
      <chakra.header
        bg={bg}
        w="6xl"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                {/* <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                  Dashboard
                </Button>
                <Button
                  w="full"
                  variant="solid"
                  colorScheme="brand"
                  leftIcon={<AiOutlineInbox />}
                >
                  Inbox
                </Button> */}
                <Button
                  w="full"
                  variant="ghost"
                  leftIcon={<BsFillCameraVideoFill />}
                >
                  Videos
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              {/* <Logo /> */}
              <Image
               size="sm"
               name="profile"
               src=""
              ></Image>
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>

            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
              {/* <Button variant="ghost" leftIcon={<AiFillHome />} size="sm">
                Dashboard
              </Button> */}
              {/* <Button
                variant="solid"
                colorScheme="brand"
                leftIcon={<MdDensitySmall />}
                size="sm"
              >
                Inbox
              </Button> */}
              <MdDensitySmall/>
              {/* <Button
                variant="ghost"
                leftIcon={<BsFillCameraVideoFill />}
                size="sm"
              >
                Videos
              </Button> */}
              <Image
              src='data:image/png;base64,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'
              ></Image>
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <AiOutlineSearch />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." w='100' />
            </InputGroup>
<BsFillMicFill/>
            <chakra.a
              p={3}
              color="gray.800"
              _dark={{ color: "inherit" }}
              rounded="sm"
              _hover={{ color: "gray.800", _dark: { color: "gray.600" } }}
            >
              <AiFillBell />
              
              <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>
            <BsFillCameraVideoFill />
            <Avatar
              size="sm"
              name="profile"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB+CAMAAADGKhVOAAAAY1BMVEX///+ZmZkBAQHw8PCVlZWRkZGjo6P6+vrR0dHe3t7Dw8OgoKC/v7+8vLyOjo7V1dWqqqqzs7Pl5eXLy8tQUFBFRUVeXl5lZWUhISELCwszMzNra2uCgoIuLi5VVVV5eXkXFxfF4ZhZAAAEqElEQVRoge1aa3ejIBDVCqggipJXk227//9XLtG81BkcjG6/eHuanibB6zyZGYyiDRs2bNiwYcOGB9Ikt1LXDlraPPkvlFUheMmZQxxfX90/QlfpmpyJVeWVbgjGSmXXkjo3EOWT2uTLc6aV8HDemMXSys4Fd9cVGqVUWrlXLpaUODG8vbYpcFop2r/cLGbjjN+vbXANPz7i2SKkqeE4GQRuFrBwE0+60hAsbt5lrYJJW+LqPdYsUMF3vGfguazv8c5nfYe3eoPV8c60b+PzJl7GSsWl78bYLH9O27UKvCCrqyR1SKratz3MiV9zvR675bw+q35JgIkGeE37JjPhrJ07MQvQDpTXjL9RF+29hLtVcrMawDpSXTr+zs02PHRfqCFbtfIDBktR+9ZhrHmJsYLuiTp9GbT/poBuO9YCXlBgvCLEm/FEgRgrwb4flDRQYTW2AgqjTlw6a45dg6OmyjH9MLp18doFDQhUy/SckXCGpDzcQTAnZEpQYzfXrsEBeWvcL+FAF7IuqFqWWmrQRYQn2Vlw01Cy0JJIWxTuyxCtsbi0MK2RhUVCfYhcCANLG+5SyjjQtHzNODV47zFHd+4G3/DxYO8ByxUxnhs92TGmZgxsF2iVhhg3hbXToaSwJj5aZuFF1ld3lZTIRdNcB/ASaI5qgafUF2Te9oOBhvK33IxS20h/1wPlWDOxhJIwfD7ZyTtwq3SC1eP/L+gnCijV9pUGGUX09jBS4PY2AbBOdtuKq85bQZNcgVm0pzJGKeQItHFcSGmzzEoNTzNMHUzbVzJiNtUhriX8eQ8kJU+6lCsBlHA/yv0ao2KsJniuoLiUN4BYKbJm6MlNJkrvIkoAedIFYxLLydYzWSGlCzw5coy0JZb4OkpyxLYCJiba5AZLkaStIILvmnnKt7vAcN0XcworXCXTSgS4FKJVypArkyI+GuSa+1pa6Qi1IuROBpo5EAvlsXHpXXkCLCYuHRkXK2UgjMsbahM0Hm/SWaNodM/UDndYGZGyzAOjLEc20NAfg8Zag7kNNQai4QQkYCFw0yEjwH5NEnja0Q/AkElcfzsInGn1XIO0DTzwKm7A0KPDa8oIGzu+NnDBA8sX4+ItIoxnUg/1KBdCRlzbWkHuMZ9Ib+IWKnhpVGltZTsQ4MET5W7qyKyYRVtIqzULmzh26CxkZkib6fYgu+DB5omukyZ2s20SiO6GC6NmsE41rZNgofF+Bzp6pNHOPsqdaOy9CEtPA17fHMOLOU78hGfc5Jf1zaPUGce3ixzgJlMjAoB1ifP5FJ3HY6x6mccg8ruihe9JBHVX8HLPQOiufzV47666UzlWBqdSH5KaE1TNeL30kzWN98i0JWX12w4MICkULjLjqljrGaI01woYkLi3lM5XfWQqbbK6fTzribgeTVHW4s4r26LK/w/jhg0bNmzYsGEGQnvmZRB9/AputIffoN1ZHRtRqz98JZav3W7/dTztD9+74+lBu8/yn6rStZEr0X5+ns6fp4/T6e/H58eDtsyawjpavRbt4XK47I+X42F3Oe4ftF+Xw7eTfy/0SrS7/e777BT9c97tzw/aOy7nlWhH+KUA+gfERzmfYbxyzQAAAABJRU5ErkJggg=="
            />
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
    </div>
  )
}
