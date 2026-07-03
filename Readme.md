# GitHub Activity CLI

A simple command-line tool that fetches and displays a GitHub user's recent public activity, using only Node.js built-ins (no external libraries).

Built as a project for [roadmap.sh](https://roadmap.sh/projects/github-user-activity).

## Features

- Fetches a user's recent public events from the GitHub API
- Displays activity in a readable format (pushes, stars, issues, forks, branches, tags, etc.)
- Handles invalid usernames and API errors gracefully
- Handles users with no recent public activity
- No external dependencies — pure Node.js `fetch`

## Installation

Clone the repo and link it as a global command:

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
npm link
```

## Usage

```bash
github-activity <username>
```

Example:

```bash
github-activity kamranahmedse
```

Example output:

```
Pushed 3 commits to kamranahmedse/developer-roadmap
Opened a new issue in kamranahmedse/developer-roadmap
Starred kamranahmedse/developer-roadmap
```

## Error Handling

- If no username is provided, the CLI prints an error and exits.
- If the username doesn't exist or the API request fails, the CLI prints the failure status and exits.
- If the user has no recent public activity, the CLI prints a friendly message instead of an empty list.

## Tech Stack

- Node.js (built-in `fetch`, `process.argv`)
- GitHub REST API — [`/users/{username}/events`](https://docs.github.com/en/rest/activity/events)
