const quizData = {
    topics: [
        {
            name: "Git - Getting Started",
            questions: [
                {
                    question: "What is Version Control System?",
                    answers: [
                        "Software to facilitate working with different states of the same document.",
                        "Special equipment that allows you to securely store important information.",
                        "An online resource that backs up your code.",
                        "Access control system in Unix environment.",
                    ],
                    correct: 0,
                },
                {
                    question:
                        "Does Version Control System allow getting information about the user who made changes to the repository?",
                    answers: ["No", "Yes"],
                    correct: 1,
                },
                {
                    question:
                        "What type of Version Control System is Mercurial?",
                    answers: ["Hierarchical", "Centralized", "Decentralized"],
                    correct: 2,
                },
                {
                    question:
                        "What type of Version Control System is more reliable?",
                    answers: ["Hierarchical", "Centralized", "Decentralized"],
                    correct: 2,
                },
                {
                    question:
                        "Does Version Control System allow viewing repository change history?",
                    answers: ["No", "Yes"],
                    correct: 1,
                },
                {
                    question: "What type of Version Control System is SVN?",
                    answers: ["Hierarchical", "Centralized", "Decentralized"],
                    correct: 1,
                },
                {
                    question: "What type of Version Control System is Git?",
                    answers: ["Decentralized", "Centralized", "Hierarchical"],
                    correct: 0,
                },
                {
                    question:
                        "Choose a type of Version Control System that does not exist.",
                    answers: ["Centralized", "Decentralized", "Hierarchical"],
                    correct: 2,
                },
                {
                    question:
                        "Select a description that is not suitable for Git?",
                    answers: [
                        "Free software",
                        "To work with Git repository, you need to connect to a server",
                        "Cross-platform software",
                    ],
                    correct: 1,
                },
            ],
        },
        {
            name: "Git - Fundamentals",
            questions: [
                {
                    question:
                        "Which command should be used to clone the git repository?",
                    answers: [
                        "git get [repository address]",
                        "git pull [repository address]",
                        "git clone [repository address]",
                        "clone [repository address]",
                    ],
                    correct: 2,
                },
                {
                    question:
                        "Which command should be used to remove the index.js file from the list of tracked, as well as from local repository? Notice that changes have been made to the index.js file since the last indexing.",
                    answers: [
                        "git rm -f index.js",
                        "git remove index.js",
                        "git rm index.js",
                        "git rm -f --cached index.js",
                    ],
                    correct: 0,
                },
                {
                    question:
                        "Which standard command should be used to check the status of the repository?",
                    answers: [
                        "git st",
                        "git details",
                        "git info",
                        "git status",
                    ],
                    correct: 3,
                },
                {
                    question:
                        "Which command should be used to add the index.html file to the list of tracked files?",
                    answers: [
                        "git watch index.html",
                        "git record index.html",
                        "git watch --file index.html",
                        "git add index.html",
                    ],
                    correct: 3,
                },
                {
                    question:
                        "Which command should be used to publish your changes to the server?",
                    answers: [
                        "git publish",
                        "git upload",
                        "git pull",
                        "git push",
                    ],
                    correct: 3,
                },
                {
                    question:
                        "Which command should be used to initialize the git repository?",
                    answers: [
                        "init",
                        "git init",
                        "initialize",
                        "git initialize",
                    ],
                    correct: 1,
                },
                {
                    question:
                        "Which command should be used to stop tracking of the index.js file with Git?",
                    answers: [
                        "git remove --cached index.js",
                        "git rm --cached index.js",
                        "git rm -f -cached index.js",
                        "git rm -f index.js",
                    ],
                    correct: 1,
                },
                {
                    question:
                        "Which command should be used to update the last commit?",
                    answers: [
                        "git --amend",
                        "git commit --rollback",
                        "git commit --amend",
                        "git commit --return",
                    ],
                    correct: 2,
                },
                {
                    question:
                        "Which Git command should be used to rename index.js file to header.js?",
                    answers: [
                        "git mv index.js header.js",
                        "git rm index.js header.js",
                        "git rename index.js header.js",
                        "git rename -f index.js header.js",
                    ],
                    correct: 0,
                },
                {
                    question:
                        "Which file is responsible for the list of files to be ignored?",
                    answers: [
                        ".ignore",
                        ".gitignore",
                        "gitignore",
                        "ignoreFiles",
                    ],
                    correct: 1,
                },
            ],
        },
        {
            name: "Git - Branching",
            questions: [
                {
                    question:
                        "Which command should be used to view local and remote branches?",
                    answers: [
                        "git branch local remotes",
                        "git branch -a",
                        "git branch -all",
                        "git show branch -a",
                    ],
                    correct: 1,
                },
                {
                    question:
                        "Which command should be used to reset the branch state to a commit with the hashtag c150b1?",
                    answers: [
                        "git rollback c150b1",
                        "git reset c150b1",
                        "git rollback -h c150b1",
                        "git reset --h c150b1",
                    ],
                    correct: 1,
                },
                {
                    question:
                        "You want to squash the last 3 commits into one. Which command correctly starts this process?",
                    answers: [
                        "git rebase -i HEAD~3",
                        "git merge -i HEAD~3",
                        'git squash HEAD~3 -m "Last 3 commit combined"',
                        "git squash HEAD~3",
                    ],
                    correct: 0,
                },
                {
                    question:
                        "Which command should be used to pull all changes to the current branch from a remote repository?",
                    answers: [
                        "git download",
                        "git update",
                        "git pull",
                        "git fetch",
                    ],
                    correct: 2,
                },
                {
                    question:
                        "Which command should be used to switch a branch from the current to dev?",
                    answers: [
                        "git switch dev",
                        "git checkout dev",
                        "git change dev",
                        "git jump dev",
                    ],
                    correct: 0,
                },
                {
                    question:
                        "Which command should be used to merge changes from PAN-46 branch into dev branch using the rebase algorithm?",
                    answers: [
                        "git change PAN-46 and then git rebase dev",
                        "git switch dev and then git merge --rebase PAN-46",
                        "git checkout dev and then git rebase PAN-46",
                        "git checkout PAN-46 and then git rebase dev",
                    ],
                    correct: 3,
                },
                {
                    question:
                        "Which command should be used to remove PAN-46 branch?",
                    answers: [
                        "git branch -remove PAN-46",
                        "git branch -d PAN-46",
                        "git remove -b PAN-46",
                        "git branch -delete PAN-46",
                    ],
                    correct: 1,
                },
                {
                    question:
                        "You are on the feature branch and realize that two commits from main (abc123 and def456) contain bug fixes you also need. You don't want to merge the entire branch—only those two commits. Which command should you run ?",
                    answers: [
                        "git cherry-pick abc123 def456",
                        "git cherrypick abc123 def456",
                        "git merge main --commits=abc123,def456",
                        "git cherrypick abc123,def456",
                    ],
                    correct: 0,
                },
                {
                    question:
                        "Which command should be used to create a new dev branch?",
                    answers: [
                        "git branch create dev",
                        "git new dev",
                        "git branch dev",
                        "git create branch dev",
                    ],
                    correct: 2,
                },
                {
                    question:
                        "Which command shoulb be used to see the list of local branches only?",
                    answers: [
                        "git branch",
                        "git branch --local",
                        "git branch -a",
                        "git branch -p local",
                    ],
                    correct: 0,
                },
                {
                    question:
                        "Which command should be used to merge changes from PAN-46 branch into dev branch?",
                    answers: [
                        "git checkout dev and then git merge PAN-46",
                        "git change PAN-46 and then git merge dev",
                        "git checkout PAN-46 and then git merge dev",
                        "git switch dev and then git merge PAN-46",
                    ],
                    correct: 0,
                },
                {
                    question:
                        "Which command should be used to update information about all branches?",
                    answers: [
                        "git fetch",
                        "git show -b",
                        "git update",
                        "git branch --update",
                    ],
                    correct: 0,
                },
            ],
        },
    ],
};
