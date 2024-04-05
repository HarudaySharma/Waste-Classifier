import { BarChart } from '@mui/x-charts/BarChart';
import { Prediction } from '../../../types';

const chartSetting = {
    xAxis: [
        {
            label: 'prediction' ,
        },
    ],
    width: 600,
    height: 400,
};

const valueFormatter = (value: number | null) => `${(value! * 100).toFixed(2)}%`;

export default function HorizontalBars({ dataset }: { dataset: Prediction[] }) {
    return (
        Boolean(dataset) &&
        <BarChart
            dataset={dataset}
            yAxis={[{ scaleType: 'band', dataKey: 'class' }]}
            series={[{ dataKey: 'score', label: 'WasteType', valueFormatter }]}
            layout="horizontal"
            {...chartSetting}
            sx={{
                '*': {
                    stroke: 'rgb(255, 255, 255) !important',
                },
                '& .MuiChartsAxis-label , & .MuiChartsAxis-root, \
                & .MuiChartsLegend-root text, \
               & .MuiChartsAxis-tickContainer text': {
                    fill: 'rgb(255, 255, 255) !important',
                    color: 'white'
                },
               '& .MuiChartsAxis-tickContainer .MuiChartsAxis-tick"': {
                    stroke: 'rgb(255, 255, 255) !important',
               }

            }}
        />
    );
}
