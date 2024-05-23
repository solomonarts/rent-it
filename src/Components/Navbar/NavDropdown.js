import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  cn,
  Avatar,
} from "@nextui-org/react";
import { BiLogOut } from "react-icons/bi";
import { GrNotes } from "react-icons/gr";
import { GiSettingsKnobs } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { Link } from "react-router-dom";

export default function NavDropdown() {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          isBordered
          color="success"
          radius="lg"
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        />
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
        <DropdownItem
          as={Link}
          to="/profile"
          key="new"
          shortcut="⌘N"
          description="View your profile"
          startContent={<ImProfile className={iconClasses} />}
        >
          Profile
        </DropdownItem>
        <DropdownItem
          key="copy"
          shortcut="⌘C"
          description="Change settings"
          startContent={<GiSettingsKnobs className={iconClasses} />}
        >
          Settings
        </DropdownItem>
        <DropdownItem
          as={Link}
          to="/notifications"
          key="edit"
          shortcut="⌘⇧E"
          showDivider
          description="View recent notifications"
          startContent={<GrNotes className={iconClasses} />}
        >
          Notifications
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          shortcut="⌘⇧D"
          description="Logout you account"
          startContent={<BiLogOut className={cn(iconClasses, "text-danger")} />}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
