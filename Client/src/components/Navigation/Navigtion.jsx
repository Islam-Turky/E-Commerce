import { Box, Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Switch, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DevicesIcon from '@mui/icons-material/Devices';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import { LinearGradient } from "react-text-gradients";
import '@fontsource/roboto';
import { useState } from "react";

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'center',
}));
function Navigtion() {
    const [open, setOpen] = useState(false);
    const [openFood, setOpenFood] = useState(false);
    const [openElec, setOpenElec] = useState(false);
    const [check, setCheck] = useState(false);

    return (
        <Box>
            <Drawer
                sx={{
                    width: '250px',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: '250px',
                        boxSizing: 'border-box',
                    },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={true}
            >
                <DrawerHeader>
                    <h1>
                        <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
                            *shopping
                        </LinearGradient>
                    </h1>
                </DrawerHeader>
                <List>
                    <ListItem>
                        <ListItemButton onClick={() => setOpen(!open)}>
                            <ListItemIcon>
                                <CheckroomIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Clothes"}/>
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 11 }}>
                                <ListItemText primary="T-Shirt"/>
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 11 }}>
                                <ListItemText primary="Shirt"/>
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 11 }}>
                                <ListItemText primary="Shoes"/>
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 11 }}>
                                <ListItemText primary="Bags"/>
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItem>
                        <ListItemButton onClick={() => setOpenFood(!openFood)}>
                            <ListItemIcon>
                                <RestaurantIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Food"}/>
                            {openFood ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={openFood} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 11 }}>
                                <ListItemText primary="Pizza"/>
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 11 }}>
                                <ListItemText primary="Vegatables"/>
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 11 }}>
                                <ListItemText primary="Fruites"/>
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 11 }}>
                                <ListItemText primary="Meats"/>
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItem>
                        <ListItemButton onClick={() => setOpenElec(!openElec)}>
                            <ListItemIcon>
                                <DevicesIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Electronics"}/>
                            {openElec ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={openElec} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 11 }}>
                                <ListItemText primary="PC"/>
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 11 }}>
                                <ListItemText primary="Laptop"/>
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 11 }}>
                                <ListItemText primary="Components"/>
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 11 }}>
                                <ListItemText primary="Phones"/>
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
                <Box sx={{ bottom: 10, left: 10, position: "absolute", display: 'flex', flexDirection: 'column', justifyContent: "space-between" }}>
                    <Switch checked={check} onClick={() => setCheck(!check)} />
                    <IconButton>
                        <SettingsIcon sx={{ fontSize: '30px', color: 'black' }}/>
                        <Typography variant="h6">Settings</Typography>
                    </IconButton>
                </Box>
            </Drawer>
        </Box>
    )
}

export default Navigtion;