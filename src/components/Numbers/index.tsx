import { Box, Typography, useTheme } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarsIcon from '@mui/icons-material/Stars';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Numbers = () => {
    const theme = useTheme();

    const numbersArray = [
        { number: "500+", description: "Successful Projects", icon: <PersonIcon sx={{ color: theme.palette.primary.main }} /> },
        { number: "98%", description: "Clients Satisfaction Rate", icon: <ThumbUpIcon sx={{ color: theme.palette.primary.main }} /> },
        { number: "120+", description: "Expert Consultants", icon: <StarsIcon sx={{ color: theme.palette.primary.main }} /> },
        { number: "$2B", description: "In Revenue Growth", icon: <TrendingUpIcon sx={{ color: theme.palette.primary.main }} /> }
    ]
    return (
        <Box sx={{
            display: 'flex',
            paddingTop: 4,
            marginTop: 10,
            flexDirection: 'column', width: '100%',
        }}>
            <Box
                sx={{
                    paddingX: 12,
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    gap: 3, // Espaçamento entre os itens
                }}
            >
                {numbersArray.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignContent: 'center',
                            padding: 2,
                            width: '20%',
                        }}
                    >
                        <Box
                            sx={{
                                background: theme.palette.primary.light,
                                borderTopLeftRadius: '16px',
                                borderBottomRightRadius: '16px',
                                borderBottomLeftRadius: '0',
                                borderTopRightRadius: '0',
                                paddingTop: 1,
                                paddingX: 2,
                                height: '45px'
                            }}
                        >
                            {item.icon}
                        </Box>
                        <Box
                            sx={{
                                width: '50%',
                                padding: 1,
                                paddingTop: 0,
                                borderBottomLeftRadius: '0',
                                borderTopRightRadius: '0',
                            }}
                        >
                            <Typography variant="h4" align="left" sx={{ color: theme.palette.warning.contrastText }}>
                                {item.number}
                            </Typography>
                            <Typography variant="body2" align="left" sx={{ color: theme.palette.text.secondary, marginBottom: 5 }}>
                                {item.description}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>

        </Box >
    )
}

export default Numbers;