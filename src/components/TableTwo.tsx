import { Table, Title, ScrollArea } from '@mantine/core';
import { getAverageCropStatistics } from '../data/agricultureData';
import '../styles/style.css';

// Component to display average crop statistics.
export default function TableTwo() {

    const data = getAverageCropStatistics();

    // Helper function to format large numbers for display.
    const formatLargeNumber = (num: number) => {
        
        if (!Number.isFinite(num) || num === null) return 0
        if (num >= 1e15) return "> 1 Quadrillion";

        return num.toFixed(2);
    };

    return (
        <ScrollArea className="scroll-area">
            <Title order={2} className="title">Average Crop Statistics (1950-2020)</Title>
            <Table className="table" highlightOnHover>
                <thead>
                    <tr>
                        <th>Crop</th>
                        <th>Average Yield of the Crop between 1950-2020</th>
                        <th>Average Cultivation Area of the Crop between 1950-2020</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.crop}>
                            <td>{row.crop}</td>
                            <td>{formatLargeNumber(row.avgYield)}</td>
                            <td>{formatLargeNumber(row.avgArea)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </ScrollArea>
    );
}
