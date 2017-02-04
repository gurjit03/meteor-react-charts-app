import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "import 'react-s-alert/dist/s-alert-defaultcss';import 'react-s-alert/dist/s-alert-css-effects/jellycss';project-form input[type='button']": {
        "background": "inherit",
        "color": "#50d550"
    },
    "project-form input[type='submit']": {
        "background": "inherit",
        "color": "#50d550",
        "fontSize": "125%",
        "cursor": "pointer"
    },
    "html": {
        "width": "100%",
        "height": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "body": {
        "width": "100%",
        "height": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "li": {
        "listStyle": "none"
    },
    "a": {
        "textDecoration": "none"
    },
    "project-form": {
        "width": "100%"
    },
    "project-form-wrapper": {
        "width": "30%",
        "marginTop": 2,
        "marginRight": "auto",
        "marginBottom": 2,
        "marginLeft": "auto",
        "fontFamily": "ubuntu"
    },
    "project-form input": {
        "border": "0.15rem solid #50d550",
        "borderRadius": 0.5,
        "paddingTop": 0.5,
        "paddingRight": 0.5,
        "paddingBottom": 0.5,
        "paddingLeft": 0.5,
        "marginTop": 0.5,
        "marginRight": 0.5,
        "marginBottom": 0.5,
        "marginLeft": 0.5,
        "width": "100%"
    },
    "project-form textarea": {
        "border": "0.15rem solid #50d550",
        "borderRadius": 0.5,
        "paddingTop": 0.5,
        "paddingRight": 0.5,
        "paddingBottom": 0.5,
        "paddingLeft": 0.5,
        "marginTop": 0.5,
        "marginRight": 0.5,
        "marginBottom": 0.5,
        "marginLeft": 0.5,
        "width": "100%"
    },
    "project-form select": {
        "border": "0.15rem solid #50d550",
        "borderRadius": 0.5,
        "paddingTop": 0.5,
        "paddingRight": 0.5,
        "paddingBottom": 0.5,
        "paddingLeft": 0.5,
        "marginTop": 0.5,
        "marginRight": 0.5,
        "marginBottom": 0.5,
        "marginLeft": 0.5,
        "width": "100%",
        "background": "inherit"
    },
    "project-form input[type='button']": {
        "fontSize": "125%",
        "cursor": "pointer"
    },
    "form-elem-wrapper": {
        "marginTop": 0.5,
        "marginRight": 0.5,
        "marginBottom": 0.5,
        "marginLeft": 0.5,
        "paddingTop": 0.5,
        "paddingRight": 0.5,
        "paddingBottom": 0.5,
        "paddingLeft": 0.5
    }
});