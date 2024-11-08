import { Table, Title, ScrollArea } from '@mantine/core';
import { getYearlyProductionAnalysis } from '../data/agricultureData';
import '../styles/style.css';

// Component to display yearly crop production analysis in a table format.
export default function TableOne() {
  
    const data = getYearlyProductionAnalysis();

    return (
        <ScrollArea className="scroll-area">
            <Title order={2} className="title">Yearly Crop Production Analysis</Title>
            <Table className="table" highlightOnHover>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Crop with Maximum Production in that Year</th>
                        <th>Crop with Minimum Production in that Year</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.year}>
                            <td>{row.year}</td>
                            <td>{row.maxCrop}</td>
                            <td>{row.minCrop}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </ScrollArea>
  );
}
