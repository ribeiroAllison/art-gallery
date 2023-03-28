# React Pokedex

![alt screenshot of the program](/src/screenshot.jpg "Program screenshot")

## Table of contents

- [Overview](#overview)
  - [What is this?](#what-is-this)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)



## Overview

### What is this?

This is a web app for an Art Gallery. Is displays a picture and give information of some famous paintings.
It is also possible to activate a slideshow feature, where all arts are displayed for a few seconds each.


### The challenge

Users should be able to:

- Click in any painting and see information about it, such as its year of creation, painter and description.
- See the web app in any screen size with an appropriate style for each of them.
- Start a slideshow where each painting is displayed for a few seconds.
- See no loading or refresh screen anywhere on the page.


### Links

- Finished project: [galleria](https://art-gallery-ribeiroallison.vercel.app/)
-

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- Route hooks (useEffect, useState, useNavigate)
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- A ridiculous amount of media query adaptations

### What I learned

Took me somewhere about 30 hours to finish this.

- Sometimes CSS can be harder to deal with than React.
- How to better use proportions instead of fix pixel values while sizing stuff in CSS.
- How to manipulate the useEffect hook in a more complex way (you'll see it bellow...).

#### Some code I'm pride of


Definitely this beast here. 

I finally understood how useEffect can handle asynchronous process that depend on each other in a way that they follow the event flow I want. 

```js
useEffect(() => {
        
        if (slideShowStatus) {
            navigate(url)
            const timeoutId = setTimeout(() => {
            const pageArtArray = artArray.filter((element) => element.order === position);
            const pageArt = pageArtArray[0];
            if (pageArt) {
                const path = `/${props.transformName(pageArt.name)}`;
                setUrl(path);
                setPosition((prevPosition) => prevPosition === 15 ? 1 : prevPosition + 1);
            } else {
                setSlideShowStatus(false);
            }
            },  7000);
            return () => clearTimeout(timeoutId);
        }
    }, [slideShowStatus, position]);
```



### Continued development

It would be nice to have a progression bar during the slideshow.