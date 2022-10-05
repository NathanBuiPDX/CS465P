## Instructions for Setup

### What to Install

1. Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

2. Download [VS Code](https://code.visualstudio.com/) as your code editor.

   - Set Up VS Code to [launch from the command line](https://code.visualstudio.com/docs/editor/command-line#_launching-from-command-line).

   - Install the following extensions:
     - Live Server
     - Prettier
     - Git Lens

3. Sign up for a GitHub account and the [GitHub Student Pack](https://education.github.com/pack).

4. Set up [SSH keys for GitHub](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/connecting-to-github-with-ssh).

### Setting up the Homework Repo (with SSH)

1. Navigate to your preferred folder and clone the repository.

```console
$ git clone git@github.com:caterinasworld/fullstack-homework.git fullstack-homework

Cloning into 'fullstack-homework'...
remote: Enumerating objects: 179, done.
remote: Counting objects: 100% (179/179), done.
remote: Compressing objects: 100% (98/98), done.
remote: Total 179 (delta 94), reused 149 (delta 73), pack-reused 0
Receiving objects: 100% (179/179), 39.81 KiB | 251.00 KiB/s, done.
Resolving deltas: 100% (94/94), done.

```

2. Navigate into the newly created `fullstack-homework` folder and rename the remote.

```console
$ cd fullstack-homework/

$ git remote -v
origin	git@github.com:caterinasworld/fullstack-homework.git (fetch)
origin	git@github.com:caterinasworld/fullstack-homework.git (push)

$ git remote rename origin homework

$ git remote -v
homework	git@github.com:caterinasworld/fullstack-homework.git (fetch)
homework	git@github.com:caterinasworld/fullstack-homework.git (push)
```

3. Navigate to your GitHub account and create a public repository, i.e. student-repo-fullstack.

   Important: Do not create a README file. There’s already one in the repository you have cloned.

4. Add your TA and all your discussion group members as collaborators.

   Go to ‘Settings’ → ‘Manage Access’ → click the “Invite a collaborator’ button. Search for everyone's names or GitHub handles. 
   All GitHub handles were shared during the first discussion. See the Canvas home page for your TA's GitHub handle.

5. Add the GitHub repository you created as a remote.

```console
$ git remote add origin git@github.com:student-username/student-repo-fullstack.git

$ git remote -v
homework    git@github.com:caterinasworld/fullstack-homework.git (fetch)
homework    git@github.com:caterinasworld/fullstack-homework.git (push)
origin   git@github.com:student-username/student-repo-fullstack.git (fetch)
origin   git@github.com:student-username/student-repo-fullstack.git (push)
```

6. Check the branch name. If it's not ‘main,’ update the branch name to ‘main’.

```console
$ git branch

$ git branch -M main
```

7. Push the files you cloned into the newly created remote repository.

```console
$ git push -u origin main
Enumerating objects: 163, done.
Counting objects: 100% (163/163), done.
Delta compression using up to 4 threads
Compressing objects: 100% (74/74), done.
Writing objects: 100% (163/163), 68.15 KiB | 13.63 MiB/s, done.
Total 163 (delta 80), reused 163 (delta 80), pack-reused 0
remote: Resolving deltas: 100% (80/80), done.
To github.com:student-username/student-repo-fullstack.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

8. Once 'main' is set up to track the remote origin, you can push changes with the following command.

```console
$ git push
```

9. When there are updates to the homework starter files, pull the new updates from the ‘homework’ remote.

```console
$ git pull homework main
```

### Submitting a Pull Request (PR)

1. Create a new branch. 

```console
$ git branch <newbranch>
$ git checkout <newbranch>

or

$ git checkout -b <newbranch>
```

2. Make changes to your code in that branch.

3. Commit the changes to the remote.

```console
$ git add <filename>

$ git commit -m <commitmessage>

$ git push <remote> <branchname>
```

4. When your code is pushed to the remote, you will see a link to the PR in the commnand line. Alternatively, you can open the remote repository on GitHub and search for your PR in the "Pull requests" tab. 

5. Add your TA and two students from the discussion group as reviewers on the pull request.

   In the description textarea, make sure to explain what changes you made, why you made those changes, and what feedback you are looking for.

### Required Reading

- Use the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) for all JavaScript code submitted.
- [How to Create a Pull Request | GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
- [How to write the description for your pull request or for how to give feedabck](https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/)
- Examples of pull requests:
  - [Pull request in Fastify.js](https://github.com/fastify/fastify/pull/4264)
  - [Pull request in GitHub Primer](https://github.com/primer/react/pull/2337)



