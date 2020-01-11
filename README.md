# The smallest possible Gatsby theme

## Quick Start

```shell
mkdir my-blog
cd my-blog
yarn init
# install @leomanlapera/gatsby-theme-blog and it's dependencies
yarn add gatsby react react-dom @leomanlapera/gatsby-theme-blog
```

Then add the theme to your `gatsby-config.js`. We'll use the long form
here for education purposes.

```javascript
module.exports = {
  plugins: [
    {
      resolve: `@leomanlapera/gatsby-theme-blog`,
      options: {
        contentPath: `blogs`,
        basePath: `/blog`,
      },
    },
  ],
}
```

That's it, you can now run your gatsby blog using

```shell
yarn gatsby develop
```

Your blog will be available on `localhost:8000/blog`
