import { AppBar, Avatar, Box, IconButton, Menu, MenuItem, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from "react";

const settings = ["Profile", "Dashboard", "Account", "Products"];

function Header() {
    const [open, setOpen] = useState(false);
    const [Notification, setNotification] = useState(false);
    return (
        <Box>
            <AppBar position="fixed" sx={{ background: '#00000000', width: 'calc(100% - 250px)', height: '85px', boxShadow: 'none' }} >
                <Toolbar sx={{ padding: '10px', display:"flex", justifyContent: 'space-evenly' }}>
                    <TextField fullWidth label="Search" sx={{ width: 'calc(100% - 200px)' }}/>
                    <Box>    
                        <IconButton disabled={open} onClick={() => setNotification(!Notification)}>
                                <NotificationsIcon sx={{ fontSize: '30px', color: '#17acaf' }} />
                        </IconButton>
                        <Menu
                            sx={{ mt: '60px', ml: '-50px', zIndex: 1 }}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Notification}
                        >
                            <MenuItem onClick={() => setNotification(false)}>
                                <Typography>All</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => setNotification(false)}>
                                <Typography>Today</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => setNotification(false)}>
                                <Typography>This Week</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => setNotification(false)}>
                                <Typography>This Month</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => setNotification(false)}>
                                <Typography>This Year</Typography>
                            </MenuItem>
                        </Menu>
                        <Tooltip>
                            <IconButton sx={{ p: 3}} onClick={() => setOpen(!open)}>
                                <Avatar />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '60px', ml: '-30px', zIndex: 1 }}
                            id="menu-appbar"
                            anchorEl={null}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={() => setOpen(false)}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;