---
sidebar_position: 2
title: Main style
description: The main style of our design.
---

:::caution
Reminder: OXYDE stills in Beta phase.
:::

# Fonts

When designing, fonts are an important point. AvdanOS font for User Interface is **Ubuntu**.
![OXYDE Fonts](Docsite/static/img/Fonts.png)

# Colors

Other imporant point is adding color to our program. Designing with consisten colors makes the experience more intuitive, by making the UI feel more alive and visual. So, these are the AvdanOS main colors, both for Dark mode and Light mode.
:::tip
Although there are many themes in AvdanOS using slightly different colors, each theme has a tag that defines if it is a light theme or dark theme, based on the main and accent colors.
:::
![OXYDE Colors](Docsite/static/img/Colors.png)

**Light mode** palette
```
Oxyde pink = #FF2E88
Oxyde blue =  #2E88FF
Oxyde purple = #882EFF
Oxyde green = #18F563
Oxyde fresh mint = #00D0AD
Oxyde orange = #FF602E
Oxyde red = #FF1D13
Oxyde yellow = #FFCD63
Oxyde jungle green = #50785A
Oxyde grey = #282832
Black = #000
White = #FFF
```
**Dark mode** palette
```
Oxyde pink = #C01AC3
Oxyde blue =  #173F9B
Oxyde purple = #B30381
Oxyde green = #009131
Oxyde fresh mint = #009471
Oxyde orange = #EA4500
Oxyde red = #D11D13
Oxyde yellow = #C8AA1E
Oxyde jungle green = #285046
Oxyde grey = #282843
Black = #000
White = #FFF
```
:::tip
To keep your palette organised, just add the "L" or "D" sufix to the color names. "Oxyde pink L", "Oxyde green D".
:::

# Icons

Every app must have **two** different versions of its icon:
> Normal
> Symolic
> Preview version _(Optional)_

## Normal icons
Your normal app icon is the default one, shown in most places, like the dock and the start menu. You will need three sizes: 128x128px, 64x64, and 32x32. The corner radius is of 10.
Here, a reference.
![OXYDE Core icons](Docsite/static/img/AvdanOS Homemade icons.png)
See? Make a balance between simplicity and detail, using colors, shadows, depth, and a few details.

To design your icon, use these boundaries:
![OXYDE Icon Guidelines](Docsite/static/img/Icon Guidelines.png)
<a href="https://github.com/Avdan-OS/icons/blob/main/templates/Icon%20template/Icon%20Guidelines.svg" target="_blank" class="button">Download SVG from GitHub</a>

## Symbolic icons
The symbolic icon is, as the own name says, a symbol that represents the program. It's used in certain menus, so you will need one or AvdanOS won't be able to display it.
For this task, we recommend using GNOME's Symbolic icons guidelines.
![GNOME's Symbolic icons](Docsite/static/img/GNOME's Symbolic icons.png)

And also, we recommend you to add a different icon to the preview builds.
:::tip
Most apps offer a preview build (this means, a Beta version). These contain experimental features and updates that aren't finished, so users can test them and give feedback to the dev. To help differenciate, we recommend having a different version of your icon for this version.
:::

### The UI Icons
The UI icons are the icons that are inside an app, to simbolize each menu. A common example is adding a recycle bin icon in a "Delete" button.
For this, we recomend using the UI icons from WhiteSur, since they match the AvdanOS style, they are simple, visible, and clean. They are available in our GitHub, so if you need them you can download them.
<a href="https://github.com/Avdan-OS/icons/tree/main/src" target="_blank" class="button">WhiteSur icon pack</a>

:::tip
Don't confuse UI icons and Symbolic icons
**SYMBOLIC**: Minimal version of the app icon for certain menus - GNOME Icon pack
**UI ICONS**: Icons to add inside your app, representanting the UI menus - WHITESUR Icon pack
:::

#. App naming

App names are something essential for the user to know what they are. They provide detail and define the app.
So, how to give a good name to my app?

DO:
> One or two simple words
> Be related to what the app is for
> Be short (less than 18 characters)
> Be easy to pronunce
> Be easily paired with your icon
> Use header capitalization (Ex. "System Themes" instead of "System themes")

DON'T DO:
> Use trademarks or names of other projects, or the name of the OS itself (Ex. "Media Player for AvdanOS" or "AvdanOS System Themes")
> Overcomplicated names or acronims
> Joking names
> Non-standard punctuation or whitespaces (Ex. "OptixConnect")
> Made-up words or word combinations

To choose a good name, take your time to brainstorm. Think about multiple ideas and note them. When you have a list of
possible ideas, check if any name is already used by any web, app, or other thing. If they are in use, remove them from your list
to avoid copyright problems. Finally, just start discarding names until you find your winner name.

:::tip
Actually, these tips are useful for any app, not only AvdanOS ones.
:::