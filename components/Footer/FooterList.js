/**
 * Component for rendering a list of links in the footer.
 * @param {props} items Takes an array of strings
 */

// Mui Imports
import { List, ListItemText, Typography } from "@mui/material";

import Link from "next/link";

const FooterList = (props) => {
  const listItem = props.item;

  let href = listItem.toLowerCase().split(' ')[0];

  if (href === 'services') {
    href = '/#services';
  };

  // Create an array of list item components
  return (
    <Link href={`/${href}`} passHref>
      <Typography color="secondary" variant="h6" align="center" sx={{cursor: 'pointer'}}>
        {listItem}
      </Typography>
    </Link>
  );
};

export default FooterList;
