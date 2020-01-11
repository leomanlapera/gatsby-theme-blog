/** @jsx jsx */
import { jsx } from "theme-ui";

export default ({ src, alt }) => (
  <div sx={{ display: "flex", alignItems: "center", paddingBottom: 5 }}>
    <img
      sx={{ width: 56, height: 56, borderRadius: "50%", marginRight: 4 }}
      src={src}
      alt={alt}
    />
    <p sx={{ margin: 0, fontSize: 2, maxWidth: 350 }}>
      Personal blog by{" "}
      <a
        href="https://twitter.com/leomanlapera"
        target="_blank"
        rel="noopener noreferrer"
      >
        June Leoman Lapera
      </a>
      <br />
      I explore and learn new things on web
    </p>
  </div>
);
