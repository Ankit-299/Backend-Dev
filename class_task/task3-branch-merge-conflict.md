\# Task 3: Branching, Merging \& Conflict Resolution



\## 1. Create a branch feature-ui

```bash

git checkout -b feature-ui





2\. Make changes and commit

nano app.txt

git add app.txt

git commit -m "Update UI text"



3\. Merge the branch into main

git checkout main

git merge feature-ui



4\. Simulate a merge conflict



Developer A:



git checkout main

nano app.txt   # change line 1

git commit -am "Main change"





Developer B:



git checkout feature-ui

nano app.txt   # change same line differently

git commit -am "Feature change"


Now merge:



git checkout main

git merge feature-ui



5\. Resolve conflict manually



Git will show conflict markers:



<<<<<<< HEAD

Main version text

=======

Feature version text

>>>>>>> feature-ui





Fix it manually, then:



git add app.txt

git commit -m "Resolved merge conflict"






