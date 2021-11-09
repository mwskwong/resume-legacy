import { AppBar, Box, Collapse, Container, IconButton, List, Stack, Toolbar, useMediaQuery } from "@mui/material";
import { memo, useEffect, useState } from "react";

import Logo from "./Logo";
import { MenuRounded as Menu } from "@mui/icons-material";
import NavButton from "./NavButton";
import NavListItem from "./NavListItem";
import ThemeModeButton from "./ThemeModeButton";
import nav from "constants/nav";
import useActiveSectionId from "hooks/useActiveSectionId";
import useSx from "./useNavBarSx";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mdUp = useMediaQuery(theme => theme.breakpoints.up("md"), { noSsr: true });
  const activeSectionId = useActiveSectionId();
  const sx = useSx();

  useEffect(() => {
    if (mdUp) {
      setMenuOpen(false);
    }
  }, [mdUp]);

  const handleMenuToggle = () => setMenuOpen(menuOpen => !menuOpen);

  return (
    <AppBar>
      <Container>
        <Toolbar disableGutters>
          <Logo />
          <Box sx={sx.spacer} />
          <Stack
            sx={sx.navButtonContainer}
            component="nav"
            spacing={1}
            direction="row"
          >
            {Object.values(nav).map(({ id, name }) => (
              <NavButton
                key={id}
                id={id}
                label={name}
                active={activeSectionId === id}
              />
            ))}
          </Stack>
          <Stack spacing={1} direction="row">
            <IconButton
              sx={sx.menuButton}
              onClick={handleMenuToggle}
              aria-label="toggle menu"
            >
              <Menu />
            </IconButton>
            <ThemeModeButton />
          </Stack>
        </Toolbar>
        <Collapse in={menuOpen} timeout="auto" unmountOnExit>
          <List dense component="nav" aria-label="nav list">
            {Object.values(nav).map(({ id, name }) => (
              <NavListItem
                key={id}
                id={id}
                label={name}
                active={activeSectionId === id}
              />
            ))}
          </List>
        </Collapse>
      </Container>
    </AppBar>
  );
};

NavBar.whyDidYouRender = true;

export default memo(NavBar);