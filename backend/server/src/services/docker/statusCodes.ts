export enum StatusCode {
  TimeLimitExceeded = 'Time Limit Exceeded',
  Accepted = 'ACCEPTED',
  WrongAnswer = 'Wrong Answer',
  CompileError = 'Compile Error',
  UnkownError = 'Unknown Error',
  RuntimeError = 'Runtime Error',
  InternalError = 'Internal Error',
  MemoryLimitExceeded = 'MemoryLimitExceeded',
}

export function convertRuntimeVerdictExitCodes(
  runtimeExitCode: number,
  verdictExitCode: number,
): StatusCode {
  if (runtimeExitCode != 0) {
    switch (runtimeExitCode) {
      case 1:
        return StatusCode.RuntimeError;
      case 137:
        return StatusCode.TimeLimitExceeded;
      default:
        return StatusCode.UnkownError;
    }
  }
  switch (verdictExitCode) {
    case 0:
      return StatusCode.Accepted;
    case 1:
      return StatusCode.WrongAnswer;
    case 137:
      return StatusCode.TimeLimitExceeded;
    default:
      return StatusCode.UnkownError;
  }
}
