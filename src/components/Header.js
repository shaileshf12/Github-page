import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import GitHubIcon from "@mui/icons-material/GitHub";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import Fade from "@mui/material/Fade";

function Header() {
  const matches = useMediaQuery("(max-width:1000px)");
  const searchStyle = {
    color: "white",
    padding: ".6rem",
    borderRadius: ".3rem",
    backgroundColor: "#2b3249",
    border: "none",
    border: ".01px solid #F5F5F5",
    width: "12rem",
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {matches && (
        <Box sx={{ flexGrow: 0 }}>
          <AppBar position="static" color="transparent">
            <Toolbar>
              <Button
                sx={{
                  textTransform: "none",
                  color: "white",
                  border: "white .5px solid",
                }}
                variant="outlined"
                size="small"
              >
                Sign Up
              </Button>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <GitHubIcon
                  size="large"
                  edge="start"
                  style={{ color: "white" }}
                  fontSize="large"
                />
              </Typography>
              <IconButton
                size="large"
                edge="start"
                color=""
                aria-label="menu"
                sx={{ mr: 1 }}
                style={{ color: "white" }}
              >
                <MenuIcon
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />

                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem>Product</MenuItem>
                  <MenuItem>Solutions</MenuItem>
                  <MenuItem>Open Source</MenuItem>
                  <MenuItem>Pricing</MenuItem>
                </Menu>
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      )}

      {!matches && (
        <Box sx={{ flexGrow: 0 }}>
          <AppBar position="static" color="transparent">
            <Toolbar>
              <GitHubIcon
                size="large"
                edge="start"
                style={{ color: "white" }}
                fontSize="large"
              />

              <Toolbar style={{ color: "white", gap: "2rem" }}>
                <div>Product</div>
                <div>Solutions</div>
                <div>Open Source</div>
                <div>Pricing</div>
              </Toolbar>

              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
              </Typography>

              <Toolbar style={{ gap: "1.5rem" }}>
                <input style={searchStyle} placeholder="Search GitHub"></input>

                <Typography textAlign="center" style={{ color: "white" }}>
                  Sign in
                </Typography>
                <Button
                  style={{
                    color: "white",
                    border: "white .5px solid",
                    textTransform: "none",
                  }}
                  variant="outlined"
                  size="small"
                >
                  Sign up
                </Button>
              </Toolbar>
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </>
  );
}

export default Header;
