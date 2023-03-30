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
import "./style.css";
import Backdrop from "@mui/material/Backdrop";
import { Modal } from "@mui/material";

function Header() {
  const matches = useMediaQuery("(max-width:1000px)");
  const searchStyle = {
    color: "white",
    padding: ".6rem",
    backgroundColor: "#2b3249",
    border: "none",
    width: "12rem",
    marginLeft:".2rem"
  };

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "28%",
    left: "75%",
    transform: "translate(-50%, -50%)",
    width: 200,
    bgcolor: "background.paper",
    border: ".5px solid #000",
    boxShadow: 24,
    p: 4,
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
                  onClick={handleOpen}
                />

                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  slots={{ backdrop: Backdrop }}
                  slotProps={{
                    backdrop: {
                      timeout: 500,
                    },
                  }}
                >
                  <Fade in={open}>
                    <Box sx={style}>
                      <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <CloseIcon
                          onClick={handleClose}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                      {/* <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Text in a modal
                      </Typography> */}
                      <Typography
                        id="transition-modal-description"
                        sx={{ mt: 2 }}
                      >
                        Product
                      </Typography>
                      <Typography
                        id="transition-modal-description"
                        sx={{ mt: 2 }}
                      >
                        Solutions
                      </Typography>
                      <Typography
                        id="transition-modal-description"
                        sx={{ mt: 2 }}
                      >
                        Open Source
                      </Typography>
                      <Typography
                        id="transition-modal-description"
                        sx={{ mt: 2 }}
                      >
                        Pricing
                      </Typography>
                      <Typography
                        id="transition-modal-description"
                        sx={{ mt: 2 }}
                      ></Typography>

                      <input
                        className="search"
                        style={{
                          backgroundColor: "white",
                          color: "white",
                          borderRadius: ".3rem",
                          border: "none",
                          border: "1px solid black",
                          width: "12rem",
                          marginBottom: ".5rem",
                          height: "1.8rem",
                        }}
                        placeholder="Search GitHub"
                        type="search"
                      ></input>

                      <Typography
                        textAlign="center"
                        style={{
                          backgroundColor: "grey",
                          color: "white",
                          borderRadius: ".3rem",
                          border: "none",
                          border: ".01px solid #F5F5F5",
                          width: "12rem",
                          height: "1.8rem",
                        }}
                      >
                        Sign in
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>

                {/* <Menu
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
                </Menu> */}
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
              ></Typography>

              <Toolbar style={{ gap: "1.5rem" }}>
                <div
                  style={{
                    width: "15rem",
                    border: "1px solid rgb(160, 157, 157)",
                    display: "flex",
                    backgroundColor: "#2b3249",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: ".3rem",
                    height : '2.4rem',
                    fontSize: "small"
                  }}
                >
                  <input
                    className="search"
                    style={searchStyle}
                    placeholder="Search GitHub"
                    type="search"
                    
                  ></input>
                  <div
                    style={{
                      border: "1px solid rgb(160, 157, 157)",
                      color: "white",
                      height: "1rem",
                      padding: ".1rem .4rem .1rem .4rem",
                      marginRight: '.4rem',
                      borderRadius: ".2rem"
                    }}
                  >
                    /
                  </div>
                </div>

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
