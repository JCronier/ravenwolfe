import { Menu } from "@mui/material";

import ServiceMenuItem from "./ServiceMenuItem";

function ServiceMenu(props) {
  const serviceItems = props.serviceItems;
  const anchorEl = props.anchorEl;
  const handleMenuClose = props.handleMenuClose;
  const menuOpen = props.menuOpen;

  const serviceItemsList = serviceItems.map((item) => {
    return (
      <ServiceMenuItem
        key={item.title}
        title={item.title}
        handleMenuClose={handleMenuClose}
      />
    );
  });

  return (
    <Menu
      id='services-menu'
      anchorEl={anchorEl}
      open={menuOpen}
      onClose={handleMenuClose}
    >
      {serviceItemsList}
    </Menu>
  );
};

export default ServiceMenu;
