import {
  Text,
  Box,
  Button,
  Flex,
  Avatar,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  Stack,
  useMediaQuery,
  Image
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//  Navbar Component
const Navbar = () => {
  /* This component represents the navigation bar of the application. It includes a logo, 
  menu options, and a responsive drawer for smaller screens. It uses Chakra UI components 
  for styling and react-router-dom for navigation. */

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Flex justifyContent="space-between" bg="gray.500" w="100%" p="4">
      <Flex gap="4">
        <Avatar src="https://bit.ly/broken-link" size="md" />
        <Text color="whiteAlpha.900" fontSize="30px" fontWeight="700">
          GoldStone Technology Assignment
        </Text>
      </Flex>
      <br />
      <br />
      {isLargerThan768 ? (
        <Flex gap="8">
          <Box
            fontWeight="500"
            color="whiteAlpha.900"
            borderRadius="lg"
            fontSize="22px"
            onClick={() => navigate("/adduser")}
            cursor="pointer"
          >
            Register User
          </Box>
          <Box
            fontWeight="500"
            color="whiteAlpha.900"
            fontSize="22px"
            onClick={() => navigate("/")}
            cursor="pointer"
          >
            User List
          </Box>
          <Link to="https://fantastic-blue-cobra.cyclic.app/export/user/">
            <Button colorScheme="red" fontSize="20px" cursor="pointer">
              Export CSV
            </Button>
          </Link>
        </Flex>
      ) : (
        <>
          <Button
            onClick={onOpen}
            variant="ghost"
            fontSize="2xl"
            bg="blue.900"
            mr="5"
          >
            <Image
              w={6}
              src="https://www.clipartmax.com/png/full/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png"
            />
          </Button>
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader fontSize="2xl" borderBottom="2px solid #18CFA8">
                GoldStone Technology Assignment
              </DrawerHeader>
              <DrawerBody>
                <Stack spacing={4} fontSize="lg">
                  <Link to="/adduser">
                    <Text>Register User</Text>
                  </Link>
                  <Link to="/">
                    <Text>User List</Text>
                  </Link>
                </Stack>
              </DrawerBody>
              <DrawerFooter bg="whiteAlpha.900">
                <Link to="https://fantastic-blue-cobra.cyclic.app/export/user/">
                  <Button colorScheme="red" fontSize="20px" cursor="pointer">
                    Sign out
                  </Button>
                </Link>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </Flex>
  );
};

export default Navbar;
