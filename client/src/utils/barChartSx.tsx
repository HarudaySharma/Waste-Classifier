import { SxProps, Theme } from "@mui/material";

const barCharSx: SxProps<Theme> = {
    '&': {
        border: '2px dashed white',
        borderRadius: '12px',
    },
    '& .MuiChartsLegend-root': {
        '& text, & line': {
            fill: 'var(--color-white) !important',
            stroke: 'var(--color-white) !important',
        }
    },
    '& .MuiChartsAxis-root': {
        '& text, & line': {
            fill: 'var(--color-white) !important',
            stroke: 'var(--color-white) !important',
        },
    },
};
export default barCharSx;
