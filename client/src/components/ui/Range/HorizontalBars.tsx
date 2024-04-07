import { BarChart, BarChartProps } from '@mui/x-charts/BarChart';
import { Prediction } from '../../../types';
import barCharSx from '../../../utils/barChartSx';

const chartSetting: Partial<BarChartProps> = {
    xAxis: [
        {
            label: 'prediction',
        },
    ],
    height: 400,
};

const valueFormatter = (value: number | null) => `${(value! * 100).toFixed(2)}%`;

export default function HorizontalBars({ dataset }: { dataset: Prediction[] }) {
    return (
        Boolean(dataset.length) &&
        <BarChart
            dataset={dataset.map(d => ({
                'label': d.class,
                'score': d.score,
            }))}
            yAxis={[{ scaleType: 'band', dataKey: 'label' }]}
            series={[{ dataKey: 'score', label: 'WasteType', valueFormatter }]}
            layout="horizontal"
            {...chartSetting}
            sx={barCharSx}
        />
    );
}
