import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    colors: {
        black: '#000000',

    },
    backgrounds: {
        main: '#00D7FF',
    }
})

export const getInputStyle = (color) => ({
    color: color,
    fontFamily: '"Avenir Next",serif',
    fontWeight: 500
})
