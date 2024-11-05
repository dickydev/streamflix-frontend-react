import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ py: 3, backgroundColor: "primary.main", color: "white", mt: 4 }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Movie Store. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
