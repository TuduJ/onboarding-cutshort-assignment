import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, CardHeader, CardMedia } from "@mui/material";
import userIcon from "../user.png";

function CustomCard(props) {
  return (
    <>
      <Card
        sx={{
          maxWidth: 200,
          maxHeight: 200,
          margin: 1,
          border: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <CardContent>
        <img src={userIcon} style={{ maxWidth: "30px", marginBottom: 10 }}></img>
          <Typography variant="h5" component="div">
            Heading
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            lorem ipsum desc
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default CustomCard;
