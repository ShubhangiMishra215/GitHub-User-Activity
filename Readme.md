# GitHub Activity CLI

A simple command-line tool that fetches and displays a GitHub user's recent public activity, using only Node.js built-ins (no external libraries).

Built as a project for [roadmap.sh](https://roadmap.sh/projects/github-user-activity).

## Features

- Fetches a user's recent public events from the GitHub API
- Displays activity in a readable format (pushes, stars, issues, forks, branches, tags, etc.)
- Handles invalid usernames and API errors gracefully
- Handles users with no recent public activity
- No external dependencies — pure Node.js `fetch`

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later (needed for the built-in `fetch` API)

## Installation

Clone the repo and link it as a global command:

```bash
git clone https://github.com/ShubhangiMishra215/GitHub-User-Activity.git
cd GitHub-User-Activity
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

## Notes

- The GitHub REST API is unauthenticated by default in this project, so requests are subject to GitHub's [rate limits for unauthenticated requests](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api) (60 requests/hour per IP). If you hit this limit frequently, consider adding a personal access token.

## License

This project is for personal learning purposes.