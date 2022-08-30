import { Navbar, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Links } from "../constants/Links";

export default function NavigationBar({ active}) {

    return (
    <>
    <Navbar variant="floating">

      <Navbar.Brand>
        <Image src={Logo} alt="FoodTrackerApp" width={100} height={100} />
        <Text b color="inherit" hideIn="xs">
          FoodTrackerApp
        </Text>
      </Navbar.Brand>

      <Navbar.Content hideIn="xs" variant="highlight">
        {Links.map(link => {
          // Fix link for github pages
          if (typeof window !== "undefined" && window.location.pathname.includes("website")) {
            link.path = "/website" + link.path;
          } 
          return (
          <Navbar.Link key={link.name} isActive={link.name === active} href={link.path}>
             {link.name}
          </Navbar.Link>
        )})}
      </Navbar.Content>

      <Navbar.Content>
        <Navbar.Link color="inherit" href="https://github.com/FoodTrackerApp/foodTrackerApp" target="_blank">
          <Button icon={<FaGithub />} >GitHub</Button>
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
    </>
    )
}