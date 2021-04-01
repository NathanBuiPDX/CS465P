## Setup Instructions

### Installation

1. Install Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

2. Download VS Code as your code editor: https://code.visualstudio.com/

   - Launch VS Code from the command line: https://code.visualstudio.com/docs/editor/command-line#_launching-from-command-line

   - Install the following extensions to start with:
     - Live Server
     - Prettier
     - ESLint
     - Git Lens
     - Bracket Pair Colorizer

3. Sign up for a GitHub account and the GitHub Student Pack: https://education.github.com/pack

4. Set up SSH keys for GitHub: https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/connecting-to-github-with-ssh

### Setting up the Homework Repo

1. Navigate to your preferred folder and clone the repo.

```console
$ git clone https://github.com/caterinasworld/fullstack-homework fullstack-homework
Cloning into 'fullstack-homework'...
remote: Enumerating objects: 8, done.
remote: Counting objects: 100% (8/8), done.
remote: Compressing objects: 100% (6/6), done.
remote: Total 8 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (8/8), done.
```

2. Navigate into your newly created `fullstack-homework` folder and rename the remote.

```console
$ cd fullstack-homework/

$ git remote -v
origin	  https://github.com/caterinasworld/fullstack-homework.git (fetch)
origin	  https://github.com/caterinasworld/fullstack-homework.git (push)

$ git remote rename origin upstream

$ git remote -v
upstream	https://github.com/caterinasworld/fullstack-homework.git (fetch)
upstream	https://github.com/caterinasworld/fullstack-homework.git (push)
```

3. Navigate to your account on GitHub and create a **private repo**, i.e.private-student-repo-name.

4. Add collaborator(s). Go to 'Settings' --> 'Manage Access' --> click the 'Invite a collaborator' button.

5. Add the GitHub repo that you created as a remote.

```console
$ git remote add origin https://github.com/student/private-student-repo-name.git

$ git remote -v
origin	  https://github.com/student/private-student-repo-name.git (fetch)
origin	  https://github.com/student/private-student-repo-name.git  (push)
upstream	hhttps://github.com/caterinasworld/fullstack-homework.git (fetch)
upstream	https://github.com/caterinasworld/fullstack-homework.git (push)
```

6. Update the branch name to 'main'.

```console
$ git branch -M main
```

7. Push the files cloned into the newly created private remote.

```console
$ git push -u origin main
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 4 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (8/8), 2.67 KiB | 1.33 MiB/s, done.
Total 8 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), done.
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

8. Once 'main' is set up to track the remote origin, you can push changes with the following command.

```console
$ git push
```
