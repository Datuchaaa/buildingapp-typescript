import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Slider from "@mui/material/Slider";
import Carousel from "react-material-ui-carousel"; // Import the Carousel component

const images = [
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/303",
  // Add more image URLs here
];

const Home: React.FC = () => {
  const [fontSize, setFontSize] = useState(20);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setFontSize(newValue as number);
  };

  return (
    <div>
      <AppBar position="static">
        {/* ... App bar content ... */}
      </AppBar>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            {/* ... Button stack ... */}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ fontSize: `${fontSize}px` }}
                >
                  Dynamic Font Size
                </Typography>
              </CardContent>
            </Card>
            <Slider
              aria-label="slider"
              value={fontSize}
              onChange={handleSliderChange}
              min={10}
              max={50}
            />
            <Carousel>
              {images.map((image, index) => (
                <Card key={index}>
                  <CardMedia component="img" height="140" image={image} />
                </Card>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
