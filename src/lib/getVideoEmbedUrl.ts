// export const  getVideoEmbedUrl = (url: string) => {
//     if (!url) return "";
//     const ytRegex =
//         /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/;

//     const match = url.match(ytRegex);

//     if (match?.[1]) {
//         const videoId = match[1];
//         return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0`;
//     }

//     return url;
// }


export const getVideoEmbedUrl = (url: string): string | null => {
  if (!url) return null;

  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/);

  if (match) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }
  return null;
}

