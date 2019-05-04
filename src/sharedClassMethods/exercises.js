function increaseWeight() {
  let { weight } = this.state;
  if (!weight) {
    weight = 0;
  }
  weight += 1;
  this.setState({ weight });
}

function lowerWeight() {
  let { weight } = this.state;
  if (!weight) {
    weight = 0;
  }
  weight -= 1;
  this.setState({ weight });
}

function increaseRepetitionNumber() {
  let { repetitionNumber } = this.state;
  if (!repetitionNumber) {
    repetitionNumber = 0;
  }
  repetitionNumber += 1;
  this.setState({ repetitionNumber });
}

function lowerRepetitionNumber() {
  let { repetitionNumber } = this.state;
  if (!repetitionNumber) {
    repetitionNumber = 0;
  }
  if (repetitionNumber > 0) {
    repetitionNumber -= 1;
    this.setState({ repetitionNumber });
  }
}

function increaseRestTime() {
  let { restTime } = this.state;
  if (!restTime) {
    restTime = 0;
  }
  restTime += 10;
  this.setState({ restTime });
}

function lowerRestTime() {
  let { restTime } = this.state;
  if (!restTime) {
    restTime = 0;
  }
  if (restTime > 0) {
    restTime -= 10;
    this.setState({ restTime });
  }
}

function onChangeName({ text }) {
  this.setState({ name: text });
}

function onSelectFocus(categoryId) {
  this.setState({ categoryId });
}

export {
  increaseWeight,
  lowerWeight,
  increaseRepetitionNumber,
  lowerRepetitionNumber,
  increaseRestTime,
  lowerRestTime,
  onChangeName,
  onSelectFocus,
};
