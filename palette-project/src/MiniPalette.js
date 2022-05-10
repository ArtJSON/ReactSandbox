import React from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  root: {
    backgroundColor: "white",
    borderRadius: "0.5rem",
    padding: "1rem",
    overflow: "hidden",
    textAlign: "center",
  },
  colors: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    width: "100%",
    height: "150px",
  },
  smallBox: {
    height: "100%",
  },
  title: {
    color: "black",
    margin: "0.5rem 0 0 0",
  },
};

const MiniPalette = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.colors}>
        {props.colors.map((c) => (
          <div
            className={classes.smallBox}
            style={{ backgroundColor: c.color }}
            key={c.color}
          ></div>
        ))}
      </div>
      <h5 className={classes.title}>
        {props.paletteName} {props.emoji}
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
