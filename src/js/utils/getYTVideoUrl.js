const urlsPull = [
  "https://www.youtube.com/embed/EuDzvfmuPhQ",
  "https://www.youtube.com/embed/SX7EZM3363U",
  "https://www.youtube.com/embed/NUO9F4eUO_A"
]

export const getYTVideoUrl = (id = "0") => {
  return urlsPull[parseInt(id) % 3];
}