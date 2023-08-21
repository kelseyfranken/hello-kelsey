import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export default function MediaCard({ img, title, description, languages }) {
  const actions = [
    { title: "Github", url: "#" },
    { title: "Live", url: "#" },
  ];

  const languageList = languages.join(", ");

  return (
    <Card
      sx={{ width: 345 }}
      className="bg-navy hover:bg-lightNavy hover:shadow-lg hover:shadow-gray-900 hover:cursor-pointer"
    >
      <CardMedia sx={{ height: 140 }} image={img} title={title} />
      <CardContent>
        <h5 className="text-lylla font-bold text-xl">{title}</h5>
        <div className="text-snow">{description}</div>
        <span className="text-snow mt-2 text-xs">{languageList}</span>
      </CardContent>
      <CardActions>
        {actions.map((action, index) => (
          <Button
            size="small"
            className="text-aqua hover:bg-transparent hover:text-lylla hover:underline"
            key={`${index}-${action.title}`}
          >
            {action.title}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
}
