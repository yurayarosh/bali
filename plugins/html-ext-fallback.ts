import { existsSync } from "fs";
import { extname, join } from "path";

const HtmlExtFallbackPlugin = (options: { rootDir: string } = { rootDir: __dirname }) => ({
  name: 'html-ext-fallback',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      // Check extensionless URLs but ignore the `/` root path
      if (req.originalUrl.length > 1 && !extname(req.originalUrl)) {
        if (existsSync(join(options.rootDir, `${req.originalUrl}.html`))) {
          req.url += '.html';
        }
      }
      next();
    });
  },
});

export default HtmlExtFallbackPlugin