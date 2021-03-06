import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { ChromePicker } from "react-color";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useNavigate } from "react-router-dom";
import seedColors from "./seedColors";

import "./styles/NewPaletteForm.css";
import DraggableColorList from "./DraggableColorList";

import { arrayMoveImmutable } from "array-move";

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function NewPaletteForm(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState("teal");
  const [newPaletteName, setNewPaletteName] = useState("");
  const [newName, setNewName] = useState("");
  const [colors, setColors] = useState(seedColors[1].colors);
  const navigate = useNavigate();

  // add custom validator on mounting the component
  useEffect(() => {
    ValidatorForm.addValidationRule("isColorUnique", (value) => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("correctAmount", (value) => {
      return colors.length < 20;
    });
    ValidatorForm.addValidationRule("isNameUnique", (value) => {
      return !props.names.includes(value);
    });
  }, [colors]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const deleteColor = (name) => {
    setColors((prev) => prev.filter((c) => c.name !== name));
  };

  const savePalette = () => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLocaleLowerCase().replace(/ /g, "-"),
      emoji: "a",
      colors: colors,
    };
    props.addPalette(newPalette);
    navigate("/");
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors((prevColors) =>
      arrayMoveImmutable(prevColors, oldIndex, newIndex)
    );
  };

  const generateRandomColor = () => {
    setCurrentColor("#" + Math.floor(Math.random() * 16777215).toString(16));
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={() => savePalette()}>
            <TextValidator
              label="Palette name"
              value={newPaletteName}
              validators={["required", "isNameUnique"]}
              name="newColorName"
              errorMessages={[
                "This field is required",
                "The name of palette needs to be unique",
              ]}
              onChange={(evt) => setNewPaletteName(evt.target.value)}
            />
            <Button variant="contained" color="secondary" type="submit">
              Save palette
            </Button>
          </ValidatorForm>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/")}
          >
            Go back
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4">Design your palette</Typography>
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setColors([])}
          >
            Clear palette
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={colors.length >= 20}
            onClick={generateRandomColor}
          >
            Random color
          </Button>
        </div>
        <ChromePicker
          onChangeComplete={(newColor) => setCurrentColor(newColor.hex)}
          color={currentColor}
        />
        <ValidatorForm
          onSubmit={() =>
            setColors((prevColors) => [
              ...prevColors,
              { color: currentColor, name: newName },
            ])
          }
        >
          <TextValidator
            value={newName}
            onChange={(evt) => setNewName(evt.target.value)}
            name="newColorName"
            validators={["required", "isColorUnique", "correctAmount"]}
            errorMessages={[
              "This field is required",
              "Color name needs to be unique",
              "You cannot add more colors",
            ]}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: currentColor }}
            type="submit"
            disabled={colors.length >= 20}
          >
            Add color
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <DraggableColorList
          distance={1}
          colors={colors}
          deleteColor={deleteColor}
          onSortEnd={onSortEnd}
          axis="xy"
        />
      </main>
    </div>
  );
}
