import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import MoreIcon from '@mui/icons-material/MoreVert';
import InboxIcon from '@mui/icons-material/Inbox';

const pages = ['Home', 'Skills', 'Projects'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    size="large"
                    edge="end"
                    color="inherit">
                    <LinkedInIcon />
                </IconButton>
                <p>LinkedIn</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    edge="end"
                    color="inherit">
                    <FacebookRoundedIcon />
                </IconButton>
                <p>Facebook</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    edge="end"
                    color="inherit">
                    <GitHubIcon />
                </IconButton>
                <p>GitHub</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box>
            <AppBar sx={{backgroundColor: 'transparent' }} position="static">
                <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                    Kevin Aburto
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{                                
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Kevin Aburto
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                            {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit">
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit">
                            <FacebookRoundedIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit">
                            <GitHubIcon />
                        </IconButton>
                        <Button className='btn-contact' sx={{m: 1}} variant="outlined" startIcon={<InboxIcon />}>
                            Contact me
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                        >
                        <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
                </Container>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
}
export default ResponsiveAppBar;