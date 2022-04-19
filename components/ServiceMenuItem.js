import Link from 'next/link';

import { MenuItem, Typography } from '@mui/material';

function ServiceMenuItem(props) {
  const title = props.title;
  const handleMenuClose = props.handleMenuClose;
  const id = title.toLowerCase().split(' ').join('');

  return (
    <MenuItem onClick={handleMenuClose}>
      <Link href={`/#${id}`} scroll={false} passHref>
        <Typography>{title}</Typography>
      </Link>
    </MenuItem>
  );
};

export default ServiceMenuItem;