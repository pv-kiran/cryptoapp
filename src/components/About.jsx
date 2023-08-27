import { Paper, Typography } from "@mui/material";

function About() {
  const resourceArr = [
    {
      title: "React",
      link: "https://react.dev/",
      description:
        "A toolkit that helps make cool websites by organizing things neatly and quickly",
    },
    {
      title: "Material-UI",
      link: "https://mui.com/material-ui",
      description:
        "A design toolkit that gives your website a fashionable makeover with pre-designed elements",
    },
    {
      title: "Chart.JS",
      link: "https://www.chartjs.org/",
      description:
        "An artist for your data, creating eye-catching charts and graphs that turn boring numbers into visual stories",
    },
    {
      title: "Coingecko API",
      link: "https://www.coingecko.com/en/api/documentation",
      description:
        "A data source for cryptocurrency details like prices, trends, and more",
    },
    {
      title: "The News API",
      link: "https://www.thenewsapi.com/",
      description:
        "A digital newsstand, providing access to a wide range of news articles and headlines from various sources around the world.",
    },
  ];
  return (
    <Paper
      sx={{
        width: "100%",
        backgroundColor: "#5f7f96",
        padding: "1rem",
      }}>
      <Typography variant="h5">Used Resources</Typography>
      <ul style={{ padding: "1rem" }}>
        {resourceArr.map((resource, index) => {
          const { title, link, description } = resource;
          return (
            <li
              key={index}
              style={{
                padding: ".3rem",
                position: "relative",
              }}>
              <a
                href={link}
                style={{
                  fontSize: "1.2rem",
                  color: "#31314f",
                  textDecoration: "none",
                }}>
                {title} :{" "}
              </a>
              <span>{description}</span>
            </li>
          );
        })}
      </ul>
    </Paper>
  );
}

export default About;
