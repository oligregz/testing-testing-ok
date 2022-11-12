const createStudent = (name) => {
  let feedbk = {
    name: name,
    feedback: '',
  };
  const analisys = () => {
    return "Eita pessoa boa!";
  }
  feedbk.name = name;
  feedbk.feedback = analisys;
  return feedbk;
};

module.exports = createStudent;
