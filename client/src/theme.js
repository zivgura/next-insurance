import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    colors: {
        black: '#000000',

    },
    backgrounds: {
        main: '#00D7FF',
        secondary: '#fff'
    },
    fontSizes:{
        title: {
            small: 27,
            large: 80
        },
        secondary:{
            xs: 13,
            small: 20,
            medium: 25,
            large: 30
        }
    },
    rowHeights:{
        title: {
            small: 25,
            large: 66
        },
        secondary:{
            xs: 18,
            small: 21,
            medium: 25,
            large: 31
        }
    },
    photoWidths:{
        large: 260,
        small: 144
    },
    gridBreakpoints: {
        xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400
    }
})
