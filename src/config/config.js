const config = {
  URL_API_LEADLO: "https://llapi.leadlovers.com/webapi/lead?",
  TOKEN_API_LEADLO: "E13EAEA2337C43EB9E11CF02E6B06511",
  MACHINE_CODE_LEADLO: 361766,
  EMAIL_SEQUNCE_CODE_LEADLO: 820520,
  SEQUENCE_LEVEL_CODE_LEADLO: 1,
  AUTHORIZATION:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6IldlYkFwaSIsInN1YiI6IldlYkFwaSIsInJvbGUiOlsicmVhZCIsIndyaXRlIl0sImlzcyI6Imh0dHA6Ly93ZWJhcGlsbC5henVyZXdlYnNpdGVzLm5ldCIsImF1ZCI6IjFhOTE4YzA3NmE1YjQwN2Q5MmJkMjQ0YTUyYjZmYjc0IiwiZXhwIjoxNjA1NDQxMzM4LCJuYmYiOjE0NzU4NDEzMzh9.YIIpOycEAVr_xrJPLlEgZ4628pLt8hvWTCtjqPTaWMs",
  ID_FACEBOOK_APP: "1587835084717764",
  URL_BTN_SHARED:
    process.env.NODE_ENV !== "development"
      ? "https://gracious-ritchie-65a69e.netlify.app"
      : "https://gracious-ritchie-65a69e.netlify.app",
};

export default config;
