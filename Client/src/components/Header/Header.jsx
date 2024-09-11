import { AppBar, Avatar, Box, Divider, IconButton, TextField, Toolbar, Tooltip } from "@mui/material";

function Header() {
    return (
        <Box>
            <AppBar position="fixed" sx={{ background: '#00000000', width: 'calc(100% - 250px)', height: '85px', boxShadow: 'none' }}>
                <Toolbar sx={{ padding: '10px', display:"flex", justifyContent: 'space-evenly' }}>
                    <TextField fullWidth label="Search" sx={{ width: 'calc(100% - 200px)' }}/>
                    <Box>    
                        <Tooltip>
                            <IconButton sx={{ p: 3}}>
                                <Avatar />
                            </IconButton>
                        </Tooltip>
                        </Box>
                </Toolbar>
                <Divider />
            </AppBar>
        </Box>
    )
}

export default Header;