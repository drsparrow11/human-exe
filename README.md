# HUMAN.EXE

GitHub Pages-ready static site for HUMAN.EXE.

## Publish With GitHub Pages

Upload the contents of this folder to the root of a GitHub repository, then enable Pages from the repository `main` branch.

This build keeps the site lightweight enough for GitHub's browser uploader:

- All images are below 25MB.
- Web MP3 audio files are included for the built-in track player.
- The intro video uses the public YouTube embed.
- Full track playback points to the public YouTube playlist.
- Lyrics and visual archive files are included locally.
- `robots.txt`, `sitemap.xml`, and `llms.txt` are included for crawler and AI-search readability.
- `archive-entry.html` is a restrained first-party archive entry for curious readers.
- `developer-archive.html` is a hybrid developer archive made of exports, notes, logs, recovered fragments, and unresolved files connected to Sparrow and Echo.
- Discord Signal Archive invite: https://discord.gg/TBEvkV45WW

## Local Preview

From the parent project folder:

```powershell
python -m http.server 4174
```

Open:

```text
http://localhost:4174/human_exe_site_github/
```

Use `human_exe_site_publish/` for the richer portable version with the local intro MP4, and `human_exe_site/` for the full local archive.

## SEO / AI Search Files

After uploading, these should resolve:

```text
https://drsparrow11.github.io/human-exe/robots.txt
https://drsparrow11.github.io/human-exe/sitemap.xml
https://drsparrow11.github.io/human-exe/llms.txt
https://drsparrow11.github.io/human-exe/archive-entry.html
https://drsparrow11.github.io/human-exe/developer-archive.html
```

Use `BACKLINK_CHECKLIST.md` for public places to link the site.
