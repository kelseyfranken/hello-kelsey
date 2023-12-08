import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import GitHub from "@mui/icons-material/GitHub";
import PublishIcon from "@mui/icons-material/Publish";

export default function MediaCard({
  img,
  title,
  description,
  languages,
  urls,
}) {
  const actions = [
    { title: <GitHub className="text-4xl" />, url: urls.git },
    { title: <PublishIcon className="text-4xl" />, url: urls.live },
  ];

  const languageList = languages.join(", ");

  return (
    <Card
      sx={{ width: 345, borderRadius: "10px", margin: "1rem" }}
      className="bg-navy hover:bg-lightNavy hover:shadow-lg hover:shadow-gray-900 hover:translate-y-[-8px] border border-navy"
    >
      <CardMedia sx={{ height: 140 }} image={img} title={title} />
      <CardContent>
        <h5 className="text-lylla font-bold text-2xl">{title}</h5>
        <div className="text-snow">{description}</div>
        <span className="text-snow mt-6 text-xs">{languageList}</span>
      </CardContent>
      <CardActions className="gap-4 ml-2">
        {actions.map((action, index) => (
          <a
            href={action.url}
            target="_blank"
            className="text-aqua hover:bg-transparent hover:text-lylla hover:underline"
            key={`${index}-${action.title}`}
          >
            {action.title}
          </a>
        ))}
      </CardActions>
    </Card>
  );
}
