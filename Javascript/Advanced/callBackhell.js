// callback

function firstAction(callBack) {
  setTimeout(() => {
    console.log("First action completed");
    callBack();
  }, 1000);
}

function secondAction(callBack) {
  setTimeout(() => {
    console.log("second action completed");
    callBack();
  }, 1000);
}

function thirdAction(callBack) {
  setTimeout(() => {
    console.log("Third action completed");
    callBack();
  }, 1000);
}

firstAction(() => {
  secondAction(() => {
    thirdAction(() => {
      console.log("All Actions are completed");
    });
  });
});

//callback hell / pyramid of DOOM => promises / async await
