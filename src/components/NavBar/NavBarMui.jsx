import { Link } from "react-router-dom";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Home from "@mui/icons-material/Home";

export default function HorizontalList() {
  return (
    <Box component="nav" aria-label="CR Porfolio" sx={{ flexGrow: 1 }}>
      <List role="menubar" orientation="horizontal">
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component={Link}
            to="/Inicio"
            aria-label="Inicio">
              <Home />
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component={Link} to="/Portfolio">
          Portfolio
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component={Link} to="/SobreMi">
            Sobre Mi
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component={Link} to="/Habilidades">
          Habilidades
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component={Link} to="/Contacto ">
            Contacto
          </ListItemButton>
        </ListItem>
        <ListDivider />

        <ListItem role="none">
          <ListItemButton role="menuitem" component={Link} to="/Servicios">
            Servicios
          </ListItemButton>
        </ListItem>
        <ListDivider />

      </List>
    </Box>
  );
}
