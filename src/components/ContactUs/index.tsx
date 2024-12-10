import meetingRoom from "../../assets/img/mettingroom.jpg";
import { Box, Button, Typography, useTheme } from "@mui/material";
import Slider from "react-slick";

const ContactUs = () => {

    const theme = useTheme();
    return (
        <Box sx={{
            position: 'relative',
            display: 'flex',
            paddingTop: 8,
            flexDirection: 'column', width: '100%',
        }}>
            <Box
                sx={{
                    display: 'flex!important',
                    justifyContent: 'center', // Centraliza horizontalmente
                    alignItems: 'center', // Centraliza verticalmente
                    width: '100%', // Ocupar a largura total do slider
                }}
            >
                <Box
                    sx={{
                        width: '80%', // Controle do tamanho
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Box sx={{
                        width: '50%',
                        borderTopLeftRadius: '32px',
                        borderBottomRightRadius: '8px',
                        position: 'relative'
                    }} >
                        <img src={meetingRoom} style={{
                            width: '100%',
                            height: '100%',
                            borderTopLeftRadius: '32px',

                        }} />
                    </Box>
                    <Box sx={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingX: 7,
                        paddingY: 2,
                        borderBottomRightRadius: '32px',
                        background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,


                    }} >
                        <Typography variant="h3" sx={{ margin: 1, color: theme.palette.secondary.dark, textAlign: 'left' }}>
                            Ready to transform your business?
                        </Typography>
                        <Typography variant="body1" sx={{ margin: 1, color: theme.palette.text.secondary, textAlign: 'left', marginBottom: 5 }}>
                            Let's work for your success. Contact us Today!
                        </Typography>
                        <Button
                            sx={{
                                width: '150px',
                                py: 1, px: 3,
                                display: 'block',
                                borderTopLeftRadius: '16px',
                                borderBottomRightRadius: '16px',
                                borderBottomLeftRadius: '0',
                                borderTopRightRadius: '0',
                                color: theme.palette.secondary.contrastText,
                                backgroundColor: theme.palette.secondary.dark,
                                '&:hover': {
                                    color: theme.palette.secondary.contrastText,
                                },
                                textTransform: 'none'
                            }}
                        >
                            Contact Us
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}

export default ContactUs;