const languageContainerMap = {
    python3: "python3_container",
    java: "javac_container"
}

const detailedStatusCode = {
    Approved: "Approved",
    WA: "Wrong Answer",
    CompileError: "Compile Error",
    RuntimeError: "Runtime Error",
    TLE: "Time Limit Exceeded"
}

const exitCodeMap = {
    0: detailedStatusCode.Approved,
    1: detailedStatusCode.CompileError,
    2: detailedStatusCode.RuntimeError,
    124: detailedStatusCode.TLE
}


module.exports = {
    exitCodeMap,
    detailedStatusCode,
    languageContainerMap
}