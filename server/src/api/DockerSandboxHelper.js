const languageContainerMap = {
  python3: { container: "alexngn/python3_container", fileName: "File.py" },
  java: { container: "alexngn/javac_container", fileName: "File.java" },
  checker: { container: "alexngn/checker_container", fileName: "Checker.java" },
};

const detailedStatusCode = {
  APPROVED: "Approved",
  WA: "Wrong Answer",
  COMPILE_ERROR: "Compile Error",
  RUNTIME_ERROR: "Runtime Error",
  TLE: "Time Limit Exceeded",
  CORRECT: "Correct",
};

const exitCodeMap = {
  0: detailedStatusCode.APPROVED,
  1: detailedStatusCode.RUNTIME_ERROR,
  2: detailedStatusCode.COMPILE_ERROR,
  3: detailedStatusCode.WA,
  124: detailedStatusCode.TLE,
};

const checkerExitCodeMap = {
  0: detailedStatusCode.CORRECT,
  1: detailedStatusCode.RUNTIME_ERROR,
  2: detailedStatusCode.COMPILE_ERROR,
  3: detailedStatusCode.WA,
  124: detailedStatusCode.TLE,
};

module.exports = {
  exitCodeMap,
  detailedStatusCode,
  languageContainerMap,
  checkerExitCodeMap,
};
