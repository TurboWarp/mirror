# Mirror

https://mirror.turbowarp.xyz/

These are some scripts for making mirrors of [TurboWarp](https://turbowarp.org/).

## How to make your own mirror

If you have a GitHub account, it's easy to make your own mirror with a URL like: `username.github.io/mirror/`

1. Fork the repository on GitHub. The name of the repository determines the path of the mirror's URL.
2. Go to the settings page on your fork > Pages > Set source branch to `gh-pages` and `/ (root)` and save.
3. Wait a few minutes and refresh. GitHub will give you the link to the mirror in a green box.

By default, the mirror won't automatically update in forks. If you want to enable automatic updates:

1. Open your fork on GitHub
2. Go to the Actions page
3. Enable Actions if prompted. If not prompted select the "Build" option and enable scheduled workflows.
4. Your mirror will now be updated once a week.

You can manually trigger updates if you go to Actions > Build > Run workflow > Run on `main`
