import React from 'react'
import { Stack } from '@mui/material';
import {Link} from 'reacct-router-dom';
import { logo }  from '../utils/constants'
const Navbar = () => {
  
    <Stack direction='row' alignItems="center">
      <Link to='/' style={{display:'flex',alignItems:'center'}}>
        <img src={logo} alt="logo" height={45} />
      </Link>
    </Stack>
  
}

export default Navbar