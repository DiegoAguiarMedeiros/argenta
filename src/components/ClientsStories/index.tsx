import Slider from 'react-slick';
import { Box, Typography, IconButton, useTheme, Button } from '@mui/material';
import { ArrowForward, ArrowBack, GraphicEq, DragHandle } from '@mui/icons-material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import './index.css';
import person1 from '../../assets/img/person1.jpg'
import person2 from '../../assets/img/person2.jpg'
import person3 from '../../assets/img/person3.jpg'
import person4 from '../../assets/img/person4.jpg'
import person5 from '../../assets/img/person5.jpg'

const ClientsStories = () => {

    const theme = useTheme();
    const peoples = [
        {
            name: 'Maria Silva',
            job: 'Analista Financeira - Empresa X',
            description: 'A Agenta Finanças transformou completamente minha relação com o dinheiro. Antes, eu me sentia perdida e sem saber como organizar minhas finanças pessoais. Com a ajuda da equipe, aprendi a controlar meus gastos, poupar de forma eficiente e investir com confiança. Hoje, tenho segurança financeira e posso planejar meu futuro sem medo. Recomendo para todos que querem mudar de vida!',
            image: person1
        },
        {
            name: 'Joana Santos',
            job: 'Gerente de Projetos - Tech Solutions',
            description: 'Graças à Agenta Finanças, consegui não apenas quitar todas as minhas dívidas, mas também criar uma reserva de emergência que antes parecia impossível. O atendimento é impecável, com orientações práticas e personalizadas para minhas necessidades. Me sinto mais preparada para lidar com imprevistos e alcançar meus objetivos financeiros de longo prazo.',
            image: person2
        },
        {
            name: 'Carla Oliveira',
            job: 'Empresária - Loja Carla Moda',
            description: 'Como empresária, eu sempre tive dificuldades em separar as finanças pessoais das da minha loja. A Agenta Finanças não apenas me ajudou a organizar as contas da empresa, mas também a identificar estratégias para aumentar a rentabilidade. Hoje, tenho uma visão clara dos meus negócios e posso crescer com segurança e sustentabilidade.',
            image: person3
        },
        {
            name: 'Patrícia Almeida',
            job: 'Engenheira Civil - Construtora Almeida',
            description: 'Quando conheci a Agenta Finanças, eu não tinha ideia de como estruturar meus objetivos financeiros. Com o acompanhamento personalizado da equipe, aprendi a criar metas claras e realistas. Agora, estou investindo no meu futuro e já vejo os resultados dessa transformação. Meu estilo de vida é mais equilibrado, e a segurança financeira nunca foi tão palpável.',
            image: person4
        },
        {
            name: 'Fernanda Costa',
            job: 'Professora - Colégio Saber',
            description: 'Nunca imaginei que poupar e investir pudesse ser algo tão acessível e transformador. A Agenta Finanças me mostrou que, com um bom planejamento e disciplina, é possível realizar sonhos que pareciam distantes. Hoje, estou planejando a viagem dos meus sonhos e ainda conseguindo investir no futuro da minha família. Sou muito grata por todo o apoio e orientação!',
            image: person5
        }
    ];


    const settings = {
        centerMode: true, // Ativa o modo de centralização
        centerPadding: '0', // Remove padding extra
        slidesToShow: 1, // Exibe um slide por vez
        infinite: true, // Ativa o looping
        speed: 500, // Velocidade da transição
        dots: false, // Ativa os indicadores
        arrows: true, // Ativa as setas
        focusOnSelect: false,
        slidesToScroll: 1, // Move 4 slides ao arrastar
        draggable: true, // Permitir arrastar
        swipeToSlide: false, // Evita comportamento de "pular" para slide central
        touchMove: true, // Ativar movimentos de toque
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

    return (
        <Box sx={{
            position: 'relative',
            display: 'flex',
            paddingTop: 8,
            flexDirection: 'column', width: '100%',
        }}>
            {/* Título centralizado */}
            <Typography variant="h2" align="center" sx={{ marginBottom: 3, color: theme.palette.secondary.dark }}>
                Client Success Stories
            </Typography>

            {/* Carrossel */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    padding: 10, // Garante espaçamento interno
                }}
            >
                <Slider {...settings}>
                    {peoples.map((people, index) => (
                        <Box
                            key={index}
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
                                    borderTopLeftRadius: '32px',
                                    borderBottomRightRadius: '8px',
                                    position: 'relative'
                                }} >
                                    <Box sx={{
                                        position: 'absolute',
                                        backgroundColor: theme.palette.warning.light,
                                        right: -20,
                                        top: 40,
                                        borderRadius: '32px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }} >
                                        <FormatQuoteIcon sx={{
                                            fontSize: 45,
                                            color: theme.palette.secondary.main,
                                            width: '100%',
                                        }} />
                                    </Box>
                                    <img src={people.image} style={{
                                        width: '450px', borderTopLeftRadius: '32px',
                                        borderBottomRightRadius: '32px',
                                        borderBottomLeftRadius: '0',
                                        borderTopRightRadius: '0',
                                    }} />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    paddingX: 20,
                                    paddingY: 5,
                                }} >
                                    <Typography variant="body2" sx={{ margin: 1, color: theme.palette.text.secondary, textAlign: 'justify' }}>
                                        {people.description}
                                    </Typography>
                                    <Typography variant="h6" sx={{ margin: 1, color: theme.palette.secondary.dark, textAlign: 'left' }}>
                                        {people.name}
                                    </Typography>
                                    <Typography variant="body1" sx={{ margin: 1, color: theme.palette.text.primary, textAlign: 'left' }}>
                                        {people.job}
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

export default ClientsStories;
