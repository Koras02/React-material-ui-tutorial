import { Menu, MenuItem, Typography } from "@material-ui/core";
import React from "react";

const initialState = {
    mouseX: null,
    mouseY: null,
}

export default function ContextMenu() {
    const [state, setState] = React.useState(initialState);

    const handleClick = (event) => {
        event.preventDefault();
        setState({
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
        })
    }


const handleClose = () => {
    setState(initialState);
};
 
  return (
    <div onContextMenu={handleClick} style={{ cursor: "context-menu" }}>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nulla,
        velit dolorum nam assumenda ipsam quibusdam cum ab obcaecati adipisci
        officia eveniet, culpa deserunt impedit aspernatur delectus voluptas
        molestiae. Deleniti!.
      </Typography>
      <Menu
        keepMounted
        open={state.mouseY !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          state.mouseY !== null && state.mouseX !== null
            ? { top: state.mouseY, left: state.mouseX }
            : undefined
        }
      >
      <MenuItem onClick={handleClose}>Copy</MenuItem>
      <MenuItem onClick={handleClose}>Print</MenuItem>
      <MenuItem onClick={handleClose}>Highlight</MenuItem>
      <MenuItem onClick={handleClose}>Email</MenuItem>
      </Menu>
    </div>
  );
}

 
