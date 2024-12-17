# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js: inadequate error handling in an HTTP server. The initial code lacks error handling, causing the server to crash silently if a problem occurs (like the port being in use).  The solution demonstrates best practices for handling these errors gracefully.

## Bug

The `bug.js` file contains a simple HTTP server that doesn't handle errors properly.  Running this code and attempting to start the server on a port that's already occupied will result in a crash without any clear indication of the cause.

## Solution

The `bugSolution.js` file provides the corrected code.  It uses the `error` event listener to gracefully handle server errors, preventing the server from crashing and providing more informative error messages to the user. 