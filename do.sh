#!/usr/bin/bash
#do.sh
# (1.  gitr
# (2. yarn biome check $1
# (3. npm list    - list of installed packages
# (4. vite server
# (5. shellcheck
# "
# do_what = read -p
# echo "do.sh    $do_what"
#!/bin/bash
# Define functions
# Prompt user for input
# Select and execute function based on input

# Define functions
function shell-check() {  # !! bash funcs don't get global $@, global $@ is what is passed in
for file in "$@"; do
    echo "//// $file"
    shellcheck "$file"
done
}


function yarn_biom() {
	for file in "$@"; do
		 read -p "loop  $file"
    echo "//// $file"    # "./1lints"
    yarn biome check "$file" format #2>&1 | tee >> "./1lints"
done
    echo "yarn dlx biome fix !!?"
}

function function_three() {
    echo "Executing Function Three..."
    uptime
}

# Prompt user for input
echo "FILES TARGETED ARE: $1 , results to ./1lints" 
echo "timestamp: $(date +'%H:%M:%S')" > "./1lints"
echo "choose a number from this list, yarn /npm tasks
(1. shellcheck
(2. yarn biome check 
(3. npm list    - list of installed packages
(4. vite server
(5. gitr
"
read -p  "Enter your choice (1, 2, or 3): " choice
# !! read -p "prompt string"  choice
# Select and execute function based on input
case "$choice" in
    1)
        shell-check "$@"
        ;;
    2)
        yarn_biom "$@" 
        ;;
    3)
        function_three
        ;;
    *)
        echo "Invalid choice. Please enter 1, 2, or 3."
        ;;
esac


#!/usr/bin/bash
#do.sh
#echo "choose a number from this list, yarn /npm tasks
# (1.  gitr
# (2. yarn biome check $1
# (3. npm list    - list of installed packages
# (4. vite server
# (5. shellcheck
# "
# do_what = read -p
# echo "do.sh    $do_what"