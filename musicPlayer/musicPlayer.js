import domGenerator from "dom-generator";
import "./index.scss";

import buttonGenerator from "./component/buttonComponent/buttonComponent";
import cardGenerator from "./component/cardComponent/cardComponent";

function musicPlayerPlatform() {
  class music {
    constructor(name, address, image) {
      this.name = name;
      this.address = address;
      this.image = image;
      this.audio = new Audio(this.address);
    }

    play() {
      this.audio.play();
    }

    pause() {
      this.audio.pause();
    }
  }

  const music1 = new music(
      "Song 1",
      "https://v.delgarm.com/mp3/828/2021/07/27/1627368653_E6fU7.mp3",
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    ),
    music2 = new music(
      "Song 2",
      "https://v.delgarm.com/mp3/828/2021/07/27/1627368058_D5sW0.mp3",
      "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
    ),
    music3 = new music(
      "Song 3",
      "https://v.delgarm.com/mp3/828/2021/07/27/1627368352_M9iI7.mp3",
      "https://storage.googleapis.com/turbo-math.appspot.com/user-assets/gzMWmegNKSUlh64nFjBAIuqhqGr2/04-23-2023/image-to-image/image-to-image__5f419cc4305219bba97ae735b799a45d_1682284222619_1_1682284234.png"
    ),
    music4 = new music(
      "Song 4",
      "https://v.delgarm.com/mp3/828/2021/07/27/1627368415_S7vM7.mp3",
      "https://img.freepik.com/photos-premium/tete-paon_927851-1730.jpg"
    ),
    music5 = new music(
      "Song 5",
      "https://v.delgarm.com/mp3/828/2021/07/27/1627368740_R2sL0.mp3",
      "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
    );

  const musicArray = [music1, music2, music3, music4, music5];

  let currentMusicIndex = 0;
  let isPlaying = false;

  function renderImage() {
    const cardElement = document.querySelector(".CardMusicPlayer img");
    if (cardElement) {
      cardElement.src = musicArray[currentMusicIndex].image;
    }
  }
  function forwardButton() {
    if (currentMusicIndex < musicArray.length - 1) {
      musicArray[currentMusicIndex].pause();
      currentMusicIndex++;
      if (isPlaying) {
        musicArray[currentMusicIndex].play();
      }
      renderImage();
    }
  }

  function rewindButton() {
    if (currentMusicIndex > 0) {
      musicArray[currentMusicIndex].pause();
      currentMusicIndex--;
      if (isPlaying) {
        musicArray[currentMusicIndex].play();
      }
      renderImage();
    }
  }
  function playButton() {
    if (isPlaying) {
      musicArray[currentMusicIndex].pause();
      isPlaying = false;
    } else {
      musicArray[currentMusicIndex].play();
      isPlaying = true;
    }
  }

  let musicPlayer = domGenerator({
    tag: "div",
    attributes: { id: "appPlayer" },
    children: [
      {
        tag: cardGenerator({
          size: "medium",
          status: "primary",
          eventListeners: { click: renderImage },
          className: "CardMusicPlayer",
          upImage: musicArray[currentMusicIndex].image,
        }),
        children: [
          {
            tag: "div",
            attributes: { id: "musicController" },
            children: [
              {
                tag: buttonGenerator({
                  content: "play",
                  size: "medium",
                  statues: "primary",
                  eventListeners: { click: rewindButton },
                }),
              },
              {
                tag: buttonGenerator({
                  content: "play",
                  size: "large",
                  statues: "primary",
                  eventListeners: { click: playButton },
                }),
              },
              {
                tag: buttonGenerator({
                  content: "play",
                  size: "medium",
                  statues: "primary",
                  eventListeners: { click: forwardButton },
                }),
              },
            ],
          },
        ],
      },
    ],
  });

  document.body.append(musicPlayer);
}
export default musicPlayerPlatform;
