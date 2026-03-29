export const getEmbedUrl = (url?: string) => {
  if (!url) return "";

  if (url.includes("youtu.be")) {
    return url.replace("youtu.be/", "www.youtube.com/embed/");
  }

  if (url.includes("watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }

  if (url.includes("shorts")) {
    return url.replace("shorts", "embed")
  }

  return url;
};