import { Box, Button, InputBase, TextField, Typography, useTheme } from "@mui/material";

const Footer = () => {
    const theme = useTheme()
    return (<footer style={{ 'marginTop': '100px' }}>
        <Box sx={{
            width: '100%',
            display: 'flex',
            paddingTop: 2,
            flexDirection: 'column',
            backgroundColor: theme.palette.secondary.dark
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '40%',
                    }}
                >
                    <Typography
                        variant="h6"
                        align="left"
                        sx={{ paddingY: 2, color: theme.palette.text.primary }}
                    >
                        Stay Informed. Subscribe to our Newsletter!
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '70%', // Altere para 100% para ocupar toda a largura do container pai
                            border: '1px solid',
                            borderColor: theme.palette.secondary.light,
                            borderTopLeftRadius: '20px',
                            borderBottomRightRadius: '20px',
                            borderBottomLeftRadius: '0',
                            borderTopRightRadius: '0',
                            padding: '3px'
                        }}
                    >
                        <InputBase
                            sx={{
                                width: '70%', // Define uma largura fixa ou percentual para o input
                                padding: '4px',
                                marginLeft: '8px',
                                borderRadius: '8px',
                                alignSelf: 'flex-start'
                            }}
                            placeholder="Email"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <Button
                            sx={{
                                width: '30%',
                                alignSelf: 'flex-end',
                                py: 1, px: 3,
                                display: 'block',
                                borderTopLeftRadius: '16px',
                                borderBottomRightRadius: '16px',
                                borderBottomLeftRadius: '0',
                                borderTopRightRadius: '0',
                                color: theme.palette.secondary.main,
                                backgroundColor: theme.palette.warning.main,
                                '&:hover': {
                                    color: theme.palette.secondary.main,
                                },
                                textTransform: 'none'
                            }}
                        >
                            Contact Us
                        </Button>
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',
                    width: '40%',
                }}>
                    <Typography
                        variant="h2"
                        align="center"
                        sx={{ paddingY: 5, paddingX: 12, color: theme.palette.text.primary }}
                    >
                        LOGO
                    </Typography>
                </Box >
            </Box >
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                width: '100%'
            }}>
                <Box sx={{
                    width: '80%',
                    margin: '0 auto',
                    borderBottom: ' 2px solid',
                    borderColor: theme.palette.secondary.main

                }}>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: '4fr 1fr 1fr 1fr',
                            gap: 2,
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 4,
                            }}
                        >
                            <Box sx={{ marginBottom: 2 }}>
                                <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
                                    Address
                                </Typography>
                                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                    123 Business Blvd, City, ST ZIP
                                </Typography>
                            </Box>
                            <Box sx={{ marginBottom: 2 }}>
                                <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
                                    Phone
                                </Typography>
                                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                    (12) 12345-6789
                                </Typography>
                            </Box>
                            <Box sx={{ marginBottom: 2 }}>
                                <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
                                    Email
                                </Typography>
                                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                    info@info.com
                                </Typography>
                            </Box>
                        </Box>

                        {/* Outros 3 Boxes */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 3,
                            }}
                        >
                            <Typography variant="h6" sx={{ color: theme.palette.text.primary, marginBottom: 2 }}>
                                Quick Links
                            </Typography>
                            <Box component="ul" sx={{ margin: 0, padding: 0, listStyle: 'none' }}>
                                <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary, marginBottom: 1 }}>
                                    Home
                                </Typography>
                                <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary, marginBottom: 1 }}>
                                    About Us
                                </Typography>
                                <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary, marginBottom: 1 }}>
                                    Pricing
                                </Typography>
                                <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary, marginBottom: 1 }}>
                                    Blog
                                </Typography>
                            </Box>
                        </Box>
                        <Box

                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 3,
                            }}
                        >
                            <Typography variant="h6" sx={{ color: theme.palette.text.primary, marginBottom: 2 }}>
                                Services
                            </Typography>
                            <Box component="ul" sx={{ margin: 0, padding: 0, listStyle: 'none' }}>
                                <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary, marginBottom: 1 }}>
                                    Strategic Planning
                                </Typography>
                                <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary, marginBottom: 1 }}>
                                    Financial Advisory
                                </Typography>
                                <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary, marginBottom: 1 }}>
                                    Market Research
                                </Typography>
                                <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary, marginBottom: 1 }}>
                                    HR Management
                                </Typography>
                                <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary, marginBottom: 1 }}>
                                    Technology Intregation
                                </Typography>
                            </Box>
                        </Box>
                        <Box

                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 4,
                            }}
                        >
                            <Typography variant="h6" sx={{ color: theme.palette.text.primary, marginBottom: 2 }}>
                                Information
                            </Typography>
                            <Box component="ul" sx={{ margin: 0, padding: 0, listStyle: 'none' }}>
                                <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary, marginBottom: 2 }}>
                                    Support
                                </Typography>
                                <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary, marginBottom: 2 }}>
                                    Terms & Conditions
                                </Typography>
                                <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary, marginBottom: 2 }}>
                                    Privacy Policy
                                </Typography>
                                <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary, marginBottom: 2 }}>
                                    Customer Service
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box >
            </Box >
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary, textAlign: 'center', padding: 2 }}>
                {'\u00A9'} 2024 Your Company Name. All rights reserved.
            </Typography>
        </Box>
    </footer >)
}

export default Footer;