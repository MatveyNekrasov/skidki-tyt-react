import { useEffect, useState } from 'react';
import {
	ActiveElement,
	ChartEvent,
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

import { TAnalyticItem } from '@/utils/types';
import { getAnalyticItemsApi } from '@/utils/api';
import { format, parseISO } from 'date-fns';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

interface IChartData {
	labels: string[];
	datasets: [
		{
			label: string;
			data: number[];
			fill: boolean;
			backgroundColor: string;
			borderColor: string;
		},
	];
}

export const AnalyticsChart = () => {
	const [data, setData] = useState<TAnalyticItem[]>([]);
	const [chartData, setChartData] = useState<IChartData>({
		labels: [],
		datasets: [
			{
				label: '',
				backgroundColor: '',
				borderColor: '',
				fill: false,
				data: [],
			},
		],
	});
	const [selectedDate, setSelectedDate] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getAnalyticItemsApi();
				setData(response);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const processData = (selectedDate: string | null) => {
			const counts: { [key: string]: number } = {};
			data.forEach((item) => {
				const date = parseISO(item.created_at);
				const key = selectedDate
					? format(date, 'yyyy-MM-dd HH:00')
					: format(date, 'yyyy-MM-dd');
				counts[key] = (counts[key] || 0) + 1;
			});

			const labels = Object.keys(counts);
			const values = Object.values(counts);

			setChartData({
				labels,
				datasets: [
					{
						label: 'Count',
						data: values,
						fill: false,
						backgroundColor: 'rgba(75,192,192,0.4)',
						borderColor: 'rgba(75,192,192,1)',
					},
				],
			});
		};

		processData(selectedDate);
	}, [data, selectedDate]);

	const handleClick = (event: ChartEvent, elements: ActiveElement[]) => {
		if (elements.length > 0) {
			const element = chartData.labels![elements[0].index];
			setSelectedDate(element);
		}
	};

	return (
		<div>
			<Line
				data={chartData}
				options={{
					onClick: handleClick,
				}}
			/>
		</div>
	);
};
