---
layout: post
title: CSS Flexbox Cheatsheet VS Code extension v2
---

A few months ago I noticed that my [CSS Flexbox Cheatsheet](https://marketplace.visualstudio.com/items?itemName=dzhavat.css-flexbox-cheatsheet) VS Code extension had been installed 5k times. This was a huge milestone for me because I never imagined such a simple extension would get that much attention. At that time I promised myself that if the installs ever get to 10k I will release v2 with redesigned visuals. 

Well, ten days ago what was once something unimaginable, finally happened! The extension [hit 10k installs](https://dzhavat.github.io/2020/03/08/css-flexbox-cheatsheet-vscode-extension-hit-10k-installs.html)! Now I had to keep my promise and deliver v2.

Not long before that I got an idea of showing the visuals of how the flexbox properties work as part of the hover popup. I thought this will bring the cheatsheet closer to where it’s actually needed and make it easier to understand each property. I quickly generated a demo extension to try this out. It turned out to be relatively easy to achieve. The content in the hover popup supports Markdown so images could be included as well. Perfect!

This got me to work. My next challenge was to figure out a way to detect whether the text under the hover is in fact a flexbox property and if so, show the relevant visual from the cheatsheet. I used some RegEx to target these properties. The final result is something I’m quite happy with. There are probably ways to make it smarter and with less lines of code but I’ll save that for v3. You know what they say “Fake it 'til you make it”. 💪

This leads me to a special announcement - [v2 is out](https://marketplace.visualstudio.com/items?itemName=dzhavat.css-flexbox-cheatsheet)! 🚀

After installing it, besides the normal cheatsheet, you will also see a visual in the hover popup showing you how a particular flexbox property works. Hopefully you’ll like this update and have an easier time working with flexbox.

Here’s a little demo:

<figure>
  <img src="/assets/img/2020/03/18/flexbox-hover-image.gif" alt="Flexbox visuals inside the hover popup">
  <figcaption>Flexbox visuals inside the hover popup</figcaption>
</figure>

As for redesigning the visuals, this can wait until v3. Hopefully at the 20k mark. 😉