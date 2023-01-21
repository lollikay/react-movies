const urlsPull = [
  "EuDzvfmuPhQ",
  "SX7EZM3363U",
  "NUO9F4eUO_A"
]

export const getYTVideoId = (id = "0") => {
  return urlsPull[parseInt(id) % 3];
}