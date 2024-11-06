import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Typography } from "@mui/material";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import PropTypes from "prop-types";

const FullScreenSwiper = ({ movies }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "70vh", md: "80vh" },
        overflow: "hidden",
        mb: 3,
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide
            key={movie.id}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <Typography
                variant="h4"
                color="white"
                sx={{ textAlign: "center", px: 2 }}
              >
                {movie.title}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

FullScreenSwiper.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default FullScreenSwiper;
