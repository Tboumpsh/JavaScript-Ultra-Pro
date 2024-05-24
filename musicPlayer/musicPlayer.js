import domGenerator from "dom-generator";
import "./index.scss";

import buttonGenerator from "./component/buttonComponent/buttonComponent";
import cardGenerator from "./component/cardComponent/cardComponent";
import listMusics from "./listMusic";

function musicPlayerPlatform() {
  let musicPlayer = domGenerator({
    tag: "div",
    attributes: { id: "appPlayer" },
    children: [
      {
        tag: cardGenerator({
          size: "medium",
          status: "primary",
          className: "CardMusicPlayer",
          upImage:
            "../public/images/musicPlayer/danny-howe-bn-D2bCvpik-unsplash.jpg",
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
  // listMusics();
  class music {
    constructor(name, address, image) {
      this.name = name;
      this.address = address;
      this.image = image;
    }

    play() {
      const audio = new Audio(this.address);
      audio.play();
    }

    pause() {
      const audio = new Audio(this.address);
      audio.pause();
    }
  }


  const music1 = new music(
      "Song 1",
      "https://file.mediabaz.net/sound%20effect/transition/MediaBaz.net-Notifications%20and%20Buttons%20-04.mp3",
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    ),
    music2 = new music(
      "Song 2",
      "https://dl.musicdel.ir/tag/music/1400/08/06/%20-%20Instrumental%201%20(320).mp3?_=1",
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    ),
    music3 = new music(
      "Song 3",
      "https://dl.musicdel.ir/tag/music/1400/08/06/%20-%20Instrumental%201%20(320).mp3?_=1",
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    ),
    music4 = new music(
      "Song 4",
      "https://www.chosic.com/wp-content/uploads/2021/02/happy-clappy-ukulele.mp3",
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    ),
    music5 = new music(
      "Song 5",
      "https://www.fesliyanstudios.com/musicfiles/Happy_Music-2018-09-18_-_Beautiful_Memories_-_David_Fesliyan.mp3",
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    );

  const musicArray = [music1, music2, music3, music4, music5];
  let currentMusicIndex = 0;
  function playButton() {
    // if (!musicArray[currentMusicIndex].play) {
    //   musicArray[currentMusicIndex].play();
    //   console.log('play');
    // } else {
    //   musicArray[currentMusicIndex].pause();
    //   console.log('pause');
    // }
  }
  
  function forwardButton() {
    if (currentMusicIndex < musicArray.length - 1) {
      currentMusicIndex++;
      musicArray[currentMusicIndex].play();
    } else {
      currentMusicIndex = 0;
      musicArray[currentMusicIndex].play();
    }
  }
  
  function rewindButton() {
    if (currentMusicIndex > 0) {
      currentMusicIndex--;
      musicArray[currentMusicIndex].play();
    } else {
      currentMusicIndex = musicArray.length - 1;
      musicArray[currentMusicIndex].play();
    }
  }

  document.body.append(musicPlayer);
}
export default musicPlayerPlatform;
