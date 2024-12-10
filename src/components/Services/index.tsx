import Slider from 'react-slick';
import { Box, Typography, IconButton, useTheme, Button } from '@mui/material';
import { ArrowForward, ArrowBack, GraphicEq, DragHandle } from '@mui/icons-material';
import MovingIcon from '@mui/icons-material/Moving';
import Groups2Icon from '@mui/icons-material/Groups2';
import ExtensionIcon from '@mui/icons-material/Extension';
import PaidIcon from '@mui/icons-material/Paid';
import SavingsIcon from '@mui/icons-material/Savings';
import AddchartIcon from '@mui/icons-material/Addchart';
import AttachmentIcon from '@mui/icons-material/Attachment';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AddReactionIcon from '@mui/icons-material/AddReaction';

const ServiceCarousel = () => {

    const theme = useTheme();
    const services = [
        {
            title: 'Strategic Planning', description: 'Craft winnig strategies for sustainable growth', icon: <ExtensionIcon sx={{
                fontSize: 65, padding: 1, color: theme.palette.primary.light, width: '100%',
            }} />
        },
        {
            title: 'Financial Advisory', description: 'Optimize your financial resources and invertments', icon: <PaidIcon sx={{
                fontSize: 65, padding: 1, color: theme.palette.primary.light, width: '100%',
            }} />
        },
        {
            title: 'Market Research', description: 'Gain insights for informed decision-making', icon: <SavingsIcon sx={{
                fontSize: 65, padding: 1, color: theme.palette.primary.light, width: '100%',
            }} />
        },
        {
            title: 'HR Management', description: 'Build a motivated and efficient workforce', icon: <Groups2Icon sx={{
                fontSize: 65, padding: 1, color: theme.palette.primary.light, width: '100%',
            }} />
        },
        {
            title: 'Strategic Planning', description: 'Craft winnig strategies for sustainable growth', icon: <AttachmentIcon sx={{
                fontSize: 65, padding: 1, color: theme.palette.primary.light, width: '100%',
            }} />
        },
        {
            title: 'Financial Advisory', description: 'Optimize your financial resources and invertments', icon: <AddchartIcon sx={{
                fontSize: 65, padding: 1, color: theme.palette.primary.light, width: '100%',
            }} />
        },
        {
            title: 'Market Research', description: 'Gain insights for informed decision-making', icon: <AutoStoriesIcon sx={{
                fontSize: 65, padding: 1, color: theme.palette.primary.light, width: '100%',
            }} />
        },
        {
            title: 'HR Management', description: 'Build a motivated and efficient workforce', icon: <AddReactionIcon sx={{
                fontSize: 65, padding: 1, color: theme.palette.primary.light, width: '100%',
            }} />
        },
        // Adicione mais serviços conforme necessário
    ];
    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 4, // Exibe 4 itens por vez
        arrows: true, // Desabilitamos as setas padrão
        focusOnSelect: false,
        slidesToScroll: 4, // Move 4 slides ao arrastar
        draggable: true, // Permitir arrastar
        swipeToSlide: false, // Evita comportamento de "pular" para slide central
        touchMove: true, // Ativar movimentos de toque
        centerMode: false,
        prevArrow: (
            <Button variant="contained" sx={{
                position: 'absolute',
                top: '50%',
                left: -20,
                zIndex: 1,
                transform: 'translateY(-50%)',
                color: theme.palette.secondary.contrastText,
                borderColor: theme.palette.secondary.dark,
                backgroundColor: theme.palette.secondary.dark,
                '&:hover': {
                    borderColor: theme.palette.secondary.contrastText,
                    color: theme.palette.secondary.dark,
                    backgroundColor: theme.palette.secondary.contrastText,
                },
                height: '35px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderTopLeftRadius: '16px',
                borderBottomRightRadius: '16px',
                borderBottomLeftRadius: '0',
                borderTopRightRadius: '0',
            }}>

                <ArrowBack />
            </Button>
        ),
        nextArrow: (
            <Button variant="contained"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: -20,
                    zIndex: 1,
                    transform: 'translateY(-50%)',
                    color: theme.palette.secondary.contrastText,
                    borderColor: theme.palette.secondary.dark,
                    backgroundColor: theme.palette.secondary.dark,
                    '&:hover': {
                        borderColor: theme.palette.secondary.contrastText,
                        color: theme.palette.secondary.dark,
                        backgroundColor: theme.palette.secondary.contrastText,
                    },
                    height: '35px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopLeftRadius: '16px',
                    borderBottomRightRadius: '16px',
                    borderBottomLeftRadius: '0',
                    borderTopRightRadius: '0',
                }}>
                <ArrowForward />
            </Button>
        ),
        DragHandle: false,
        responsive: [
            {
                breakpoint: 1024, // Para telas menores que 1024px (tela média)
                settings: {
                    slidesToShow: 3, // Exibe 3 itens em telas médias
                },
            },
            {
                breakpoint: 600, // Para telas pequenas
                settings: {
                    slidesToShow: 1, // Exibe 1 item em telas pequenas
                },
            },
        ],
    };
    // Função para simular o clique nas setas do slick carousel
    const handleArrowClick = (direction: 'prev' | 'next') => {
        const arrow = direction === 'prev' ? document.querySelector('.slick-prev') : document.querySelector('.slick-next');
        if (arrow) {
            (arrow as HTMLElement).click(); // Garantir que seja do tipo HTMLElement
        }
    };

    return (
        <Box sx={{
            position: 'relative',
            display: 'flex',
            paddingTop: 2,
            flexDirection: 'column', width: '100%'
        }}>
            {/* Título centralizado */}
            <Typography variant="h2" align="center" sx={{ marginBottom: 3, color: theme.palette.secondary.dark }}>
                Tailored Solutions for Your Success
            </Typography>

            {/* Carrossel */}
            <Box sx={{
                position: 'relative',
                width: '100%',
                padding: 10,
            }}>
                <Slider {...settings}>
                    {services.map((service, index) => (
                        <Box key={index} sx={{
                            paddingX: 2,
                            backgroundColor: '#fff',
                        }}>
                            <Box key={index} sx={{
                                backgroundColor: theme.palette.primary.main,
                                borderTopLeftRadius: '32px',
                                borderBottomRightRadius: '32px',
                                borderBottomLeftRadius: '0',
                                borderTopRightRadius: '0',
                                position: 'relative'
                            }}>
                                <Box sx={{
                                    position: 'absolute',
                                    backgroundColor: theme.palette.secondary.dark,
                                    borderTopLeftRadius: '32px',
                                    borderBottomRightRadius: '8px',
                                }} >
                                    {service.icon}
                                </Box>
                                <MovingIcon sx={{
                                    fontSize: 450,
                                    color: theme.palette.primary.light,
                                    width: '100%',
                                    marginTop: -10,
                                    marginBottom: -15,
                                }} />
                                <Box sx={{
                                    height: '150px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }} >
                                    <Typography variant="h4" sx={{ marginTop: 2, color: theme.palette.secondary.dark, textAlign: 'center' }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: theme.palette.secondary.light, textAlign: 'center' }}>
                                        {service.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Slider>
            </Box >
        </Box >
    );
};

export default ServiceCarousel;
