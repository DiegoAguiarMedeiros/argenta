import Slider from 'react-slick';
import { Box, Typography, IconButton, useTheme, Button } from '@mui/material';
import { ArrowForward, ArrowBack, GraphicEq, DragHandle } from '@mui/icons-material';
import MovingIcon from '@mui/icons-material/Moving';
import CheckIcon from '@mui/icons-material/Check';
import ExtensionIcon from '@mui/icons-material/Extension';
import PaidIcon from '@mui/icons-material/Paid';
import SavingsIcon from '@mui/icons-material/Savings';

const Pricing = () => {

    const theme = useTheme();
    const plans = [
        {
            title: 'Strategic Planning', plan: 'Basic', price: 99,
            description: [
                'Access to our knowledge base',
                'Monthly email newsletter',
                '24/7 customer support',
                'Exclusive access to our business webinars',
                'Priority registration for our annual conference',
                'Resoiurce library with templates and guides',
            ],
            icon: <ExtensionIcon sx={{
                fontSize: 65, padding: 1, color: theme.palette.primary.light, width: '100%',
            }} />
        },
        {
            title: 'Financial Advisory', plan: 'Pro', price: 299,
            description: [
                'Everything in Basic',
                'Quarterly strategy session',
                'Customized market reports',
                'Priority access to events and business seminars',
                'Dedicated account manager for personalizes support',
                'Early access to our whitepapers and industry insights',
            ],
            icon: <PaidIcon sx={{
                fontSize: 65, padding: 1, color: theme.palette.primary.light, width: '100%',
            }} />
        },
        {
            title: 'Market Research', plan: 'Premium', price: 499,
            description: [
                'Everything in Pro',
                'Weekly consultation calls',
                'Priority access to our mastesclasses',
                'Access to our premium business tools and software',
                'Invitations to exclusive networking events',
                'On-demand consulting for urgent business needs',],
            icon: <SavingsIcon sx={{
                fontSize: 65, padding: 1, color: theme.palette.primary.light, width: '100%',
            }} />
        }
    ];

    return (
        <Box sx={{
            position: 'relative',
            display: 'flex',
            paddingTop: 8,
            flexDirection: 'column',
            width: '100%',
            backgroundColor: theme.palette.primary.light
        }}>
            {/* Título centralizado */}
            <Typography variant="h2" align="center" sx={{ marginBottom: 3, color: theme.palette.secondary.dark }}>
                Choose a Plan that Fits Your Needs
            </Typography>

            {/* Carrossel */}
            <Box sx={{
                width: '100%',
                padding: 2,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {plans.map((plan, index) => (
                    <Box key={index} sx={{
                        display: 'flex',
                        height: '650px', // Altura fixa para o Box externo
                        width: '25%',    // Largura fixada
                        boxSizing: 'border-box', // Inclui padding e borda no cálculo de largura/altura
                        flexDirection: 'column', // Para garantir que o conteúdo siga uma coluna
                    }}>
                        <Box sx={{
                            borderTopLeftRadius: '32px',
                            borderBottomRightRadius: '32px',
                            borderBottomLeftRadius: '0',
                            borderTopRightRadius: '0',
                            position: 'relative',
                            overflow: 'hidden', // Corrigir 'hide' para 'hidden'
                            padding: 4,
                            margin: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%', // Garantir que o Box interno ocupe toda a altura do contêiner
                            boxSizing: 'border-box',
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                borderTopLeftRadius: '32px',
                                borderBottomRightRadius: '8px',
                                backgroundColor: index % 2 !== 0 ? theme.palette.warning.main : '#fff',
                                height: '175px', // Altura fixa para garantir que todos os itens internos tenham a mesma altura
                                boxSizing: 'border-box', // Inclui bordas e padding no cálculo de altura
                            }}>
                                <Box sx={{
                                    borderTopLeftRadius: '32px',
                                    padding: 2,
                                    width: '60%',
                                    borderBottomRightRadius: '8px',
                                    backgroundColor: index % 2 !== 0 ? theme.palette.warning.main : '#fff',
                                    boxSizing: 'border-box', // Garantir que o conteúdo dentro do Box não ultrapasse os limites
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between', // Para garantir que o conteúdo tenha um espaçamento adequado
                                }}>
                                    <Typography variant="h6" sx={{
                                        marginTop: 2,
                                        backgroundColor: index % 2 === 0 ? theme.palette.warning.main : theme.palette.primary.light,
                                        color: theme.palette.secondary.main,
                                        textAlign: 'center',
                                    }}>
                                        {plan.plan} Plan
                                    </Typography>
                                    <Typography variant="h4" sx={{ color: theme.palette.secondary.dark, display: 'inline' }}>
                                        <strong>${plan.price}</strong>
                                        <Typography variant="body1" sx={{ fontWeight: 'normal', color: theme.palette.text.secondary, display: 'inline' }}>
                                            /month
                                        </Typography>
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    width: '40%',
                                    backgroundColor: index % 2 !== 0 ? theme.palette.warning.main : '#fff',
                                    position: 'relative',
                                    height: '175px',
                                    overflow: 'hidden',
                                    boxSizing: 'border-box', // Inclui borda e padding no cálculo da altura
                                }}>
                                    <MovingIcon sx={{
                                        position: 'absolute',
                                        transform: 'scaleX(-1)',
                                        fontSize: 250,
                                        color: theme.palette.primary.light,
                                        width: '200%',
                                        top: '-20%',
                                        left: '-20%',
                                    }} />
                                </Box>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',  // Alinha o conteúdo no topo
                                backgroundColor: index % 2 == 0 ? theme.palette.warning.light : '#fff',
                                paddingX: 2,
                                height: '450px',
                                borderTopLeftRadius: '0',
                                borderBottomRightRadius: '32px',
                                borderBottomLeftRadius: '0',
                                borderTopRightRadius: '0',
                                paddingBottom: 2
                            }}>
                                {plan.description.map((d, index) => (
                                    <Typography key={index} variant="body2" sx={{ marginTop: 2, color: theme.palette.secondary.dark, textAlign: 'left' }}>
                                        <CheckIcon sx={{ paddingTop: 1 }} />
                                        {d}
                                    </Typography>
                                ))}

                                <Button variant={index % 2 !== 0 ? 'contained' : 'outlined'} sx={{
                                    marginTop: 'auto', // Empurra o botão para o final
                                    color: index % 2 !== 0 ? theme.palette.secondary.contrastText : '#000',
                                    borderColor: theme.palette.secondary.dark,
                                    backgroundColor: index % 2 !== 0 ? theme.palette.secondary.dark : '#fff',
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
                                    Get Started
                                </Button>
                            </Box>

                        </Box>
                    </Box>
                ))}


            </Box >
        </Box >
    );
};

export default Pricing;
