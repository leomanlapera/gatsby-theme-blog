/** @jsx jsx */
import { jsx } from "theme-ui";

export default ({ py, twitter, github, ...props }) => (
  <div
    sx={{
      py
    }}
  >
    <a
      sx={{
        color: "heading",
        mr: 2,
        textDecoration: "none",
        "&:active, &:focus": {
          color: "heading"
        }
      }}
      href={twitter}
      target="_blank"
      rel="noopener noreferrer"
    >
      twitter
    </a>
    <a
      sx={{
        color: "heading",
        textDecoration: "none",
        "&:active, &:focus": {
          color: "heading"
        }
      }}
      href={github}
      target="_blank"
      rel="noopener noreferrer"
    >
      github
    </a>
  </div>
);
