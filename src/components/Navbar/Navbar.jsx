import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import CardWidget from './CardWidget';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const {user, logout} = React.useContext(AuthContext); 
    const {clear} = React.useContext(CartContext);
    const navigate = useNavigate();
    let charUserName;

    const settings = [
        {
            id: 1,
            title: 'Ingresar',
            link: '/login', 
        },
        {
            id: 2,
            title: 'Registrarse',
            link: '/register', 
        },
    ];
    
    const pages = [
        {
            id: 1,
            title: 'Inicio',
            link: '/',
            onclick: () => handleCloseNavMenu()
        },
        {
            id: 2,
            title: 'Hoodies',
            link: 'category/Hoodies',
            onclick: () => handleCloseNavMenu()
        },
        {
            id: 3,
            title: 'Zapatillas',
            link: 'category/Zapatillas',
            onclick: () => handleCloseNavMenu()
        },
    ]

    const handleOpenNavMenu = event => setAnchorElNav(event.currentTarget);
    const handleOpenUserMenu = event => setAnchorElUser(event.currentTarget);

    function handleCloseNavMenu() { setAnchorElNav(null) };
    const handleCloseUserMenu = () => setAnchorElUser(null); 
    
    const handleLogout = async () => {
        await logout()
        clear()
        navigate('/')
    }

    user === null ? charUserName = ':)' : charUserName = user.email.charAt(0);    
    
    return (
        <AppBar position="static" style={{ backgroundColor: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to='/' style={{color:'white'}}>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    </Link>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
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
                        LOGO
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
                                <MenuItem key={page.id} onClick={page.onclick}>
                                    <Link to={page.link} style={{ color: 'black', textDecoration: 'none' }}>
                                        <Typography textAlign="center">{page.title}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Link to='/' style={{color:'white'}}>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    </Link>
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
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.id}
                                onClick={page.onclick}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link to={page.link} style={{ color: 'white', textDecoration: 'none' }}>
                                    {page.title}
                                </Link>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{
                        mr: 1,
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <CardWidget></CardWidget>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar sx={{ bgcolor: '#757ce8' }}> {charUserName.toUpperCase()} </Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {user === null ? 
                            settings.map((setting, i) => (
                                <MenuItem key={i} onClick={handleCloseUserMenu}>
                                    <Link to={setting.link} style={{ color: 'black', textDecoration: 'none' }}>
                                        <Typography textAlign="center">{setting.title}</Typography>
                                    </Link>
                                </MenuItem>
                            )) :
                            <MenuItem onClick={handleLogout}>
                                Cerrar Session 
                            </MenuItem>
                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
