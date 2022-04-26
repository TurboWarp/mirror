# Mirror

https://mirror.turbowarp.xyz/

These are some scripts for making mirrors of [TurboWarp](https://turbowarp.org/).

## How to make your own mirror

1. Fork the repository on GitHub
2. Go to the settings page on your fork > Pages > Set source branch to gh-pages (root) / 
3. Wait a few minutes and refresh, GitHub should give you the link in a nice green box

By default, the mirror won't automatically update in forks. If you want to enable automatic updates:

1. Open your fork on GitHub
2. Go to the Actions page
3. Enable Actions if prompted. If not prompted select the "Build" option and enable scheduled workflows.
4. Your mirror will now be updated once a week.

You can manually trigger updates if you go to Actions > Build > Run workflow > Run on `main`
