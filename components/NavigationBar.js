import { Navbar, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Routes } from "../constants/Links";

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
        {Routes.map(route => {
          // Fix route for github pages
          if (typeof window !== "undefined" && window.location.pathname.includes("website")) {
            route.path = "/website" + route.path;
          } 
          return (
          <Navbar.Link key={route.name} isActive={route.name === active} href={route.path}>
             {route.name}
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