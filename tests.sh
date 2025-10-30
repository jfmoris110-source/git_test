#! /usr/bin/bash
#tests.sh

echo "////  js   lint?"     2>&1 | tee   lints
npx eslint *.js             2>&1 | tee  -a  lints
echo "////  css   lint?"    2>&1 | tee  -a  lints
npx stylelint *.css         2>&1 | tee  -a  lints
echo "////  html   lint?"   2>&1 | tee  -a  lints
npx html-eslint  *.html     2>&1 | tee  -a  lints

# Explanation of File Descriptors:
# 0: Standard Input (stdin)
# 1: Standard Output (stdout)
# 2: Standard Error (stderr)
# The > operator redirects file descriptor 1 by default.
#  2> redirects file descriptor 2. 
#  &> (or >&) redirects both 1 and 2.