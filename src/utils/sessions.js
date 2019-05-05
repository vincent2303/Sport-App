const sessionsAttributeMap = new Map([
  ['id'],
  ['name'],
  ['sessionTime'],
  ['exerciseIdMap'],
]);
const sessionsAttributeArray = Array.from(sessionsAttributeMap.keys());

function checkSessionValidity(session) {
  let missingString = '';
  const {
    name, sessionTime, exerciseIdMap,
  } = session;
  if (!name || !name.length) { missingString += 'Name is missing\n'; }
  if (!sessionTime) { missingString += 'Session time is missing\n'; }
  if (!exerciseIdMap || !exerciseIdMap.size) { missingString += 'No exercise in your session\n'; }
  const sessionAttributeArray = Object.keys(session);
  let sessionObjectValid = sessionsAttributeMap.size === sessionAttributeArray.length;
  sessionAttributeArray.forEach((attributeName) => {
    if (!sessionsAttributeMap.has(attributeName)) {
      sessionObjectValid = false;
    }
  });
  if (!sessionObjectValid) { missingString += 'ERROR: Exercise object invalid\n'; }
  const isValid = !missingString.length && sessionObjectValid;
  return { isValid, missingString };
}

function getSessionWithReplacedExerciseMap(session) {
  const { exerciseIdMap } = session;
  if (exerciseIdMap) {
    const storableSession = { exerciseIdArray: Array.from(exerciseIdMap.keys()) };
    sessionsAttributeArray.forEach((attributeName) => {
      if (attributeName !== 'exerciseIdMap') {
        storableSession[attributeName] = session[attributeName];
      }
    });
    return storableSession;
  }
  return session;
}

function getSessionWithReplacedExerciseArray(session) {
  const { exerciseIdArray } = session;
  if (exerciseIdArray) {
    const exerciseIdMap = new Map(exerciseIdArray.map(exerciseId => ([exerciseId])));
    const reduxSession = { };
    sessionsAttributeArray.forEach((attributeName) => {
      if (attributeName !== 'exerciseIdArray') {
        reduxSession[attributeName] = session[attributeName];
      }
    });
    reduxSession.exerciseIdMap = exerciseIdMap;
    return reduxSession;
  }
  return session;
}

function getStorableSessions(sessions) {
  return sessions.map(getSessionWithReplacedExerciseMap);
}

function getReduxSessions(sessions) {
  return sessions.map(getSessionWithReplacedExerciseArray);
}

export { checkSessionValidity, getStorableSessions, getReduxSessions };
