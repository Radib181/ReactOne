import React from "react";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import Logo2 from "../images/TextLogo.png";


function Footer() {
  const FooterData = [
    {
      title: "Home",
      links: ["About Us", "Careers", "Blog"],
    },
    {
      title: "Products",
      links: ["Features", "Pricing", "Docs"],
    },
    {
      title: "Legals",
      links: ["Privacy Policy", "Terms of Service", "License"],
    },
    {
      title: "Company",
      links: ["Contact Us", "Partners", "Support"],
    },
  ];

  const SocialIcons = [
    { icon: <Facebook />, href: "https://facebook.com" },
    { icon: <Twitter />, href: "https://twitter.com" },
    { icon: <Instagram />, href: "https://instagram.com" },
  ];

  return (
    <footer className="mt-36">
      <Box sx={{ bgcolor: "#000", color: "#fff", py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Logo Section */}
            <Grid item xs={12} sm={6} md={3}>
              <Box mb={2}>
                <img className="rounded-2xl text-black cursor-pointer" src={Logo2} alt="Logo" style={{ width: "150px" }} />
              </Box>
              <Typography variant="body2" color="gray">
                © 2024 Your Company Name. All rights reserved.
              </Typography>
            </Grid>

            {/* Links Section */}
            {FooterData.map((section, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Typography variant="h6" gutterBottom>
                  {section.title}
                </Typography>
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href="#"
                    underline="hover"
                    color="inherit"
                    sx={{ display: "block", mb: 1 }}
                  >
                    {link}
                  </Link>
                ))}
              </Grid>
            ))}

            {/* Social Media Section */}
            <Grid  item xs={12} md={3}>
              <hr />
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Box>
                {SocialIcons.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "#fff", mx: 0.5 }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
