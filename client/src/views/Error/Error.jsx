import { Typography } from "@mui/material"
import { Box } from "@mui/system"

const Error = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { mobile: "column", desktop: "row" },
        marginTop: "3%",
        marginBottom: "-3%",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: "2.5vw",
          fontFamily: "Arima Madurai",
          color: "white",
          marginLeft: "10%",
        }}
      >
        Ooops...! Page not found...
      </Typography>
      <Box
        component="img"
        sx={{
          maxWidth: "60%",
          height: "auto",
        }}
        alt="error"
        src="./img/error.png"
      />
    </Box>
  )
}

export default Error
