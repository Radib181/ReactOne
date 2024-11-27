import React, { useState } from 'react'
import logoImg from "../images/Logo.png"
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu"
import { useTheme } from '@mui/material/styles'

function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const menuItem = ["About", "Services", "Project", "Contact"];
  
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="sticky" className='Navbar  hover:bg-[#ddd]' sx={{ backgroundColor: "white", color: "black" , }}>
      <Toolbar>
        {isMobile ? (
          <div>
            <IconButton  color='inherit' onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </div>
        ) : (
          <>
            <Typography sx={{ flexGrow: 1 }}>

              {/* Add Images */}
              {
                <div>
            <img className='w-40 h-16  mt-4 cursor-pointer' src= {logoImg} alt="" />
                </div>
                }


            </Typography>
            {menuItem.map((item) => (
              <Button  color='inherit' key={item}>{item}</Button>
            ))}
            <Button variant='outlined' sx={{
              color: "red",
              backgroundColor: "#2AB6",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#2AB663",
                color: "white",
              }
            }}>
              Sign Up
            </Button>
           
          </>

        
        )}
      </Toolbar>

      <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
        <List>
          {menuItem.map((item) => (
            <ListItem button key={item} onClick={() => setOpen(false)}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  )
}

export default Navbar;
