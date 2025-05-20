#!/bin/bash

# Stage all changes
git add .

# Prompt for commit message
read -p "Enter commit message: " commit_msg

# Commit with the provided message
git commit -m "$commit_msg"

# Push to the current branch
git push
