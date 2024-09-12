import { Box, Collapse, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Switch } from "@mui/material";
import CheckroomIcon from '@mui/icons-material/Checkroom';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LogoutIcon from '@mui/icons-material/Logout';
import DevicesIcon from '@mui/icons-material/Devices';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import { LinearGradient } from "react-text-gradients";
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
    const [openClothes, setOpenClothes] = useState(false);
    const [openFood, setOpenFood] = useState(false);
    const [openElec, setOpenElec] = useState(false);
    const [check, setCheck] = useState(false);

    return (
        <Box position="fixed">
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
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>

                <List>
                    <ListItem>
                        <ListItemButton onClick={() => setOpenClothes(!openClothes)}>
                            <ListItemIcon>
                                <CheckroomIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Clothes"}/>
                            {openClothes ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={openClothes} timeout="auto" unmountOnExit>
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
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsIcon sx={{ fontSize: '30px' }}/>
                            </ListItemIcon>
                            <ListItemText primary={"Settings"}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <LogoutIcon sx={{ fontSize: '30px' }}/>
                            </ListItemIcon>
                            <ListItemText primary={"Sign Out"}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <Switch checked={check} onClick={() => setCheck(!check)} />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
                </Box>
            </Drawer>
        </Box>
    )
}

export default Navigtion;