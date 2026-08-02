# FlavorAtlas GitHub Pages site

This directory is a dependency-free static site intended for GitHub Pages.

## Support address

The public support address is `tobias@frech-online.net`. If it changes, update `SUPPORT_EMAIL` in `assets/site.js` and the `mailto:` links in `privacy.html` and `support.html`.

## Preview locally

From the repository root:

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

## Publish with GitHub Pages

After committing and pushing the files, open the repository on GitHub and go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and the **`/(root)`** folder, then save.

No custom domain is configured. If you add one later, create `CNAME` with only the domain name and configure the matching DNS records.
