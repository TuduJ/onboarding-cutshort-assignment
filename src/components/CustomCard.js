import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function CustomCard(props) {

    const {icon, heading, description} = props;

  return (
    <>
      <Card
        sx={{
          maxWidth: 200,
          maxHeight: 200,
          margin: 2,
          border: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <CardContent>
        <img src={icon} style={{ width: "25px", marginBottom: 10 }}></img>
          <Typography variant="h6" component="div" style={{ marginBottom: "10px" }}>
            {heading}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default CustomCard;
