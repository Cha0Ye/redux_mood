const confused = '(ﾟヘﾟ)';
const happy = '(≧▽≦)';
const sad = 'ಠ⌣ಠ';
const angry = 'ლಠ益ಠ)ლ';
const defaultMood = '(ノ￣ー￣)ノ';
const INITIAL_STATE = { mood: defaultMood };


function moodReducer(state=INITIAL_STATE, action){
    switch (action.type) {
        case "HAPPY":
          return { mood: happy };
    
        case "SAD":
          return { mood: sad };

        case "ANGRY":
          return { mood: angry };
    
        case "CONFUSED":
          return { mood: confused };
    
        default:
          return state;
      }
}

let moodStore = Redux.createStore(moodReducer);