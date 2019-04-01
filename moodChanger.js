window.onload = function() {
    const confused = '(ﾟヘﾟ)';
    const happy = '(≧▽≦)';
    const sad = 'ಠ⌣ಠ';
    const angry = 'ლಠ益ಠ)ლ';
    let faceElement = document.querySelector("#face");
    faceElement.innerText = moodStore.getState().mood;

    moodStore.subscribe(() => {
      const currentMood= moodStore.getState().mood;
      faceElement.innerText = currentMood;
    })
  
    document.querySelector("#happy")
        .addEventListener("click", function () {
          moodStore.dispatch({ type: "HAPPY", payload: happy });
          // const currentMood= moodStore.getState().mood;
          // faceElement.innerText = currentMood;
    });
  
    document.querySelector("#sad")
    .addEventListener("click", function () {
      moodStore.dispatch({ type: "SAD", payload: sad });
      // const currentMood= moodStore.getState().mood;
      // faceElement.innerText = currentMood;
    });

    document.querySelector("#confused")
    .addEventListener("click", function () {
      moodStore.dispatch({ type: "CONFUSED", payload: confused });
      // const currentMood= moodStore.getState().mood;
      // faceElement.innerText = currentMood;
    });

    document.querySelector("#angry")
    .addEventListener("click", function () {
      moodStore.dispatch({ type: "ANGRY", payload: angry });
      // const currentMood= moodStore.getState().mood;
      // faceElement.innerText = currentMood;
    });
  }