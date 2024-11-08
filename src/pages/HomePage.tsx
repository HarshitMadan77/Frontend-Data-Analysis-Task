import { Container, Space } from '@mantine/core';
import TableOne from '../components/TableOne';
import TableTwo from '../components/TableTwo';
import '../styles/style.css';

// Main component for the home page layout.
export default function HomePage() {
    return (
        <Container size="lg" py="xl">
            <h1 className='heading'>Indian Agriculture Data Analysis</h1>
            <Space h="md" />
            <TableOne />
            <Space h="xl" />
            <TableTwo />
        </Container>
    );
}
