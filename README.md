GIT:
-------

  1)Connect Laptop <-> Website , using:-
   git config --global user.email “09vishaldeep@gmail.com”
   git config --global user.name “vishaldeep9”

Check:  git config --list
 ---------

2)Connect Project <-> Repository
  =======================

  git init
  git remote add origin repoURL

Check: git remote -v
--------------

3)Code Sync Process 
=====================

git add .   (means all folders selected)
git commit -m "commit msg"
git push