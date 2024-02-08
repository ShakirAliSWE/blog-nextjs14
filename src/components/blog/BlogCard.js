import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Skeleton } from "@mui/material";
import Link from "next/link";

export const BlogCard = (props) => {
  return (
    <Link href={`blogs/${props?.id}`}>
      <Card sx={{ height: 280 }}>
        <CardActionArea>
          <CardMedia component="img" height="180" image={props?.photo_url} alt={props?.title} />
          <CardContent>
            <Typography variant="h5" color="text.primary">
              {props?.title}
            </Typography>
            <Typography
              sx={{
                fontStyle: "italic",
              }}
              variant="body2"
              color="text.secondary"
              overflow={"hidden"}
              noWrap
              textOverflow={"ellipsis"}
            >
              {props?.content_text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export const BlogCardLoading = () => {
  return (
    <Card>
      <CardActionArea>
        <Skeleton
          variant="rounded"
          width={300}
          height={180}
          style={{ objectFit: "cover", width: "100%" }}
        />
        <CardContent>
          <Skeleton variant="text" width={"100%"} height={40} />
          <Skeleton variant="text" width={"100%"} height={25} />
          <Skeleton variant="text" width={"100%"} height={25} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
