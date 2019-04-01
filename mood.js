
const defaultMood = '(ノ￣ー￣)ノ';
const INITIAL_STATE = { mood: defaultMood };


function moodReducer(state=INITIAL_STATE, action){
    switch (action.type) {
        case "HAPPY":
          return { mood: action.payload };
    
        case "SAD":
          return { mood: action.payload };

        case "ANGRY":
          return { mood: action.payload };
    
        case "CONFUSED":
          return { mood: action.payload };
    
        default:
          return state;
      }
}

let moodStore = Redux.createStore(moodReducer);

