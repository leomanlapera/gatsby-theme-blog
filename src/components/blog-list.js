/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Link } from "gatsby";

import Avatar from "./avatar";

export default ({ blogs }) => (
  <div>
    <Avatar
      src="https://avatars2.githubusercontent.com/u/1639186?s=460&v=4"
      alt="June Leoman Lapera"
    />
    <Styled.ul>
      {blogs.map(({ node }) => (
        <Styled.li key={node.id}>
          <Styled.h2 sx={{ marginBottom: 3, marginTop: 0 }}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </Styled.h2>
          <div>
            {new Date(node.frontmatter.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            })}{" "}
            ☕️ {node.timeToRead} min read
          </div>
          <div>{node.frontmatter.description}</div>
        </Styled.li>
      ))}
    </Styled.ul>
  </div>
);
