'use strict';

const DEFAULT_PORT = 8000;
const PUBLIC_DIR = `public`;
const USER_ARGV_INDEX = 2;
const DEFAULT_COMMAND = `--help`;
const FILE_NAME = `mocks.json`;
const MAX_ID_LENGTH = 6;
const MAX_COMMENTS = 4;

const ExitCode = {
  SUCCESS: 0,
  ERROR: 1,
};
const HttpCode = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

module.exports = {
  USER_ARGV_INDEX,
  DEFAULT_COMMAND,
  ExitCode,
  HttpCode,
  DEFAULT_PORT,
  PUBLIC_DIR,
  FILE_NAME,
  MAX_ID_LENGTH,
  MAX_COMMENTS,
};
