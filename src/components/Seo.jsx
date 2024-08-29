import { Helmet } from "react-helmet-async";



export const Seo = ({
    title = "PFOLIO - Alfian Portofolio Website",
    description = "alfianramadani.me : Website for showing my portfolio and projects",
    url = "https://alfianramadani.me",
    image = "https://i.imgur.com/60BQCff.png",
  }) => {
    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="alfianramadani.me" />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    );
  };
  