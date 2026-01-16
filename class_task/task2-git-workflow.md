\# Task 2: Git Basic Workflow \& Undo Operations



\## 1. Initialize a Git repository

```bash

git init





2\. Add README.md and commit it

touch README.md

git add README.md

git commit -m "Add README file"




3. Modify a file and check changes before committing

nano README.md

git status

git diff




4. Unstage a file after adding it

git add README.md

git reset README.md




5.Fix a wrong commit message

git commit --amend -m "Correct commit message"





6.Revert a commit safely

git revert <commit-hash>

