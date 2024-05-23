import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import NavDropdown from "./NavDropdown";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      // isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="pl-0"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit text-[22px]">Rent-it</p>
        </NavbarBrand>
        <NavbarItem isActive>
          <Link color="primary" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground" aria-current="page">
            Residentials
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Recreation
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/sign-up">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="/sign-up" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="secondary"
            href="/create-listing"
            variant="flat"
          >
            List Your Property
          </Button>
        </NavbarItem>
        <NavbarItem className="cursor-pointer">
          <NavDropdown />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
