import { Box, Typography, Button, useTheme } from '@mui/material';
import mettingImg from '../../assets/img/metting.jpg';  // Importando a imagem

const Header = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '800px',
                paddingTop: 20,
                padding: 10,
            }}
        >
            {/* Lado Esquerdo */}
            <Box sx={{
                flex: 1, display: 'flex',
                padding: 3,
                flexDirection: 'column', alignItems: 'center'
            }}>
                <Typography variant="h1" sx={{ marginY: 5, textAlign: 'left', color: theme.palette.secondary.dark, }}>
                    Your Trusted Partner for Strategic Growth
                </Typography>
                <Typography variant="h5" sx={{ marginY: 5, textAlign: 'left', color: theme.palette.text.secondary, }}>
                    Empower your business with expert guidance. Biztar Consulting delivers strategic for sustainable gorwth, Your success starts here.
                </Typography>
                <Box sx={{ display: 'flex', marginY: 5, gap: 2, justifyContent: 'center' }}>
                    <Button variant="contained" sx={{
                        color: theme.palette.secondary.contrastText,
                        borderColor: theme.palette.secondary.dark,
                        backgroundColor: theme.palette.secondary.dark,
                        '&:hover': {
                            borderColor: theme.palette.secondary.contrastText,
                            color: theme.palette.secondary.dark,
                            backgroundColor: theme.palette.secondary.contrastText,
                        },
                        borderTopLeftRadius: '16px',
                        borderBottomRightRadius: '16px',
                        borderBottomLeftRadius: '0',
                        borderTopRightRadius: '0',
                    }}>
                        Let's Get Started!
                    </Button>
                    <Button variant="outlined"
                        sx={{
                            color: theme.palette.secondary.dark,
                            borderColor: theme.palette.secondary.dark,
                            backgroundColor: theme.palette.secondary.contrastText,
                            '&:hover': {
                                borderColor: theme.palette.secondary.dark,
                                color: theme.palette.secondary.contrastText,
                                backgroundColor: theme.palette.secondary.dark,
                            },
                            borderTopLeftRadius: '16px',
                            borderBottomRightRadius: '16px',
                            borderBottomLeftRadius: '0',
                            borderTopRightRadius: '0',
                        }}>
                        See Case Studies
                    </Button>
                </Box>
            </Box>

            {/* Lado Direito (Imagem) */}
            <Box sx={{
                flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center',
            }}>
                <img
                    src={mettingImg} // Substitua pelo link da sua imagem
                    alt="Exemplo"
                    style={{
                        width: '650px',            // Largura da imagem
                        height: '600px',            // Manter a proporção
                        objectFit: 'cover',
                        borderTopLeftRadius: '32px',
                        borderBottomRightRadius: '32px',    // Arredondando os cantos
                    }}
                />
            </Box>
        </Box >
    );
};

export default Header;
