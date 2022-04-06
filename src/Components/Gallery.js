import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import Carousel, { Modal, ModalGateway } from "react-images";
import SwipeableViews from "react-swipeable-views";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import PhotoGallery from "react-photo-gallery";
import { photos } from "../data/photos";
import { ThemeProvider } from "@mui/material/styles";
import Loader from "./Loader";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const BasicRows = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback(({ photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div>
      <PhotoGallery photos={props.photos} onClick={openLightbox} />
      <ModalGateway >
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={props.photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

const theme = createTheme({
  palette: {
    type: "ligth",
    primary: {
      main: "#000",
      opacity: 0,
    },
    secondary: {
      main: "#F57365",
    },
  },
});

const AntTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
  textTransform: "none",
  minWidth: 0,
  [theme.breakpoints.up("sm")]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: "#B3DAC6",
  fontFamily: [].join(","),
  "&:hover": {
    color: "#c14f42",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "#F57365",
    fontWeight: theme.typography.fontWeightMedium,
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#d1eaff",
  },
}));

const Gallery = () => {
  const [value, setValue] = React.useState(0);
  const [selectedPhotos, setSelectedPhotos] = useState(photos);
  const [selectedTags, setSelectedTags] = useState([]);
  const [done, setDone] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 2000);
  }, []);
  let allPhotos = photos;
  useEffect(() => {
    console.log("selected tag ---->" + selectedTags);
    console.log("selected photos ---->" + JSON.stringify(selectedPhotos));
  }, [selectedPhotos, selectedTags]);

  

  const filter = (tag) => {

      var element = document.getElementById(tag);
      element.classList.toggle("filtered");
    let selected = [];

    if (selectedTags.includes(tag)) {
      console.log("selectedTags"+ selectedTags )
      selected = selectedTags.filter(sTag => sTag !== tag);
      console.log("selectedT bad"+ selected )
      setSelectedTags([...selected]);
    }
    if (!selectedTags.includes(tag)) {
      selected = selectedTags;
      selected.push(tag);
      selected.sort();
      setSelectedTags([...selected]);
    }

    let localPhotos = [];
    if (selected.length === 0) {
      localPhotos = allPhotos;
      console.log("local photos" + JSON.stringify(localPhotos));
    }
    else{
      for (let i = 0; i < allPhotos.length; i++) {
        console.log(JSON.stringify(allPhotos[i].tags) === JSON.stringify(selected));
        if (
        selected.every(elem => allPhotos[i].tags.indexOf(elem) > -1)) {
          localPhotos.push(allPhotos[i]);
        } else continue;
      }
      console.log("local photos" + JSON.stringify(localPhotos));
    }

    setSelectedPhotos([...localPhotos]);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
  {!done ? (
    
<Loader/>
  ) : (
    <div className="gallery">
      <ThemeProvider theme={theme}>
        <h1 className="gallery-title">Art Works</h1>
        <Box sx={{ maxWidth: "100%", bgcolor: "transparent" }}>
          <AppBar
            position="static"
            elevation={0}
            style={{ background: "rgba(0,0,0,0)" }}
          >
            <Tabs
              className="tabs"
              value={value}
              color="secondary"
              onChange={handleChange}
              indicatorColor="transparent"
              textColor="secondary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <AntTab
                className="main-tab"
                label={<span className="main-tab">Visual Branding</span>}
                {...a11yProps(0)}
              />
              <AntTab
                className="main-tab"
                label={<span className="main-tab">Animation & Motion</span>}
                {...a11yProps(1)}
              />
              <AntTab
                className="main-tab"
                label={<span className="main-tab">Teaser & Video</span>}
                {...a11yProps(2)}
              />
            </Tabs>
          </AppBar>
          <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
            <TabPanel value={value} index={0}>
              <div className="tab-div">
                <div className="filters">
                  <button id="logo" className="tab-button" onClick={() => filter("logo")}>
                    +logo
                  </button>
                  <button id="cl" className="tab-button" onClick={() => filter("cl")}>
                    +Cl
                  </button>
                  <button
                    id="catalog"
                    className="tab-button"
                    onClick={() => filter("catalog")}
                  >
                    +Catalog
                  </button>
                </div>
                <BasicRows photos={selectedPhotos} />
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </SwipeableViews>
        </Box>
      </ThemeProvider>
    </div>
  )}
  </>
    
  );
};
export default Gallery;
