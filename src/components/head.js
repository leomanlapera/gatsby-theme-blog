/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Link } from "gatsby";

export default ({ py, title, toggleMode, mode, ...props }) => (
  <div
    {...props}
    sx={{
      py,
      display: "flex",
      justifyContent: "space-between",
      width: "100%"
    }}
  >
    <Styled.h1
      sx={{
        margin: 0,
        fontSize: [3, 5],
        display: "flex",
        alignItems: "center",
        lineHeight: 1
      }}
    >
      <Link
        to="/blog"
        sx={{
          textDecoration: "none",
          color: "heading"
        }}
      >
        {title}
      </Link>
    </Styled.h1>
    <div sx={{ display: "flex", alignItems: "center" }}>
      <button
        sx={{
          background: "transparent",
          appearance: "none",
          border: "2px solid",
          borderColor: "heading",
          cursor: "pointer",
          color: "heading",
          display: "block",
          fontWeight: "bold",
          textAlign: "center",
          py: 2,
          width: 60,
          outline: "none",
          textTransform: "capitalize",
          fontSize: 0
        }}
        title="Toggle Dark Mode"
        onClick={toggleMode}
      >
        {mode}
      </button>
    </div>
  </div>
);
