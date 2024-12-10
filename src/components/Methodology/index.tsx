import { Description } from '@mui/icons-material';
import { Box, Typography, Button, useTheme } from '@mui/material';

const Methodology = () => {
    const theme = useTheme();

    const methodologies = [
        { index: 1, title: 'Discovery', description: 'Uncover opportunities and chanllenges for strategic planning.' },
        { index: 2, title: 'Analysis', description: 'Thoroughly examine data and market trewnds for imformed decision-making.' },
        { index: 3, title: 'Strategy', description: 'Craft tailored strategies aligned with your business objectives.' },
        { index: 4, title: 'Implementation', description: 'Execute plans with precision, integrating technology for optimal results.' },
        { index: 5, title: 'Optimization', description: 'Continuosly refine strategies for ongoing business efficiency and growth.' },
        { index: 6, title: 'Evaluation', description: 'Assess performance metrics to ensure goals are being met effectively.' },
        { index: 7, title: 'Advisory', description: 'Receive ongoing expert consulting for sustained success' },
    ]

    return (
        <Box sx={{
            display: 'flex',
            paddingTop: 2,
            flexDirection: 'column', width: '100%',
            background: theme.palette.primary.light
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row', width: '100%'
            }}>
                <Typography variant="h2" align="left" sx={{ paddingY: 5, paddingX: 12, color: theme.palette.secondary.dark }}>
                    Our Proven Methodology for Success
                </Typography>
                <Typography variant="h6" align="left" sx={{ paddingY: 8, paddingX: 25, color: theme.palette.text.primary }}>
                    Navigate the Path to Prosperity with Biztar's Comprehensive and Effective Business Consulting Process.
                </Typography>
            </Box >
            <Box
                sx={{
                    paddingX: 12,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)', // 4 colunas na primeira linha
                    gap: 3, // Espaçamento entre os itens
                }}
            >
                {methodologies.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            gridColumn: index >= 4 ? `${index === 4 ? '2 / span 1' : 'auto'}` : 'auto', // Define o offset na segunda linha
                            display: 'flex',
                            flexDirection: 'column',
                            padding: 2,
                        }}
                    >
                        <Box
                            sx={{
                                width: '20%',
                                paddingY: 1,
                                background: item.index % 2 === 0 ? theme.palette.primary.main : theme.palette.warning.main,
                                borderTopLeftRadius: '16px',
                                borderBottomRightRadius: '16px',
                                borderBottomLeftRadius: '0',
                                borderTopRightRadius: '0',
                            }}
                        >
                            <Typography variant="h6" align="center" sx={{ color: theme.palette.warning.contrastText }}>
                                0{item.index}
                            </Typography>
                        </Box>
                        <Typography variant="h6" align="left" sx={{ color: theme.palette.warning.contrastText, marginTop: 5 }}>
                            {item.title}
                        </Typography>
                        <Typography variant="body2" align="left" sx={{ color: theme.palette.text.secondary, marginBottom: 5 }}>
                            {item.description}
                        </Typography>
                    </Box>
                ))}
            </Box>

        </Box >
    )
}
export default Methodology;