#!/usr/bin/env node

const username = process.argv[2];

if(!username){
    console.error("Error please provide a username")
    process.exit(1);
}

const url = `https://api.github.com/users/${username}/events`

async function github() {
    const response = await fetch(url);
    
    if(!response.ok){
        console.error(`Request failed:${response.status}`)
        process.exit(1);
    }
    const data = await response.json()
    
    if(data.length===0){
        console.log("No data inside the repo");
        return
    }
    
    data.forEach(element => {
        switch(element.type){
        case "PushEvent":
            console.log(`Pushed ${element.payload.commits?.length ?? 0} commits to ${element.repo.name}`)
            break
        case "WatchEvent":
            console.log(`Starred ${element.repo.name}`)
            break
        case "CreateEvent":
            if(element.payload.ref_type == "repository"){
                console.log("Created a new repository")
            }
            else if(element.payload.ref_type == "branch"){
                console.log(`Created a new branch in ${element.repo.name}`)
            }
            else if(element.payload.ref_type == "tag"){
                console.log(`Created a new tag ${element.repo.name}`)
            }
            break
        case "IssuesEvent":
            if(element.payload.action == "opened"){
                console.log(`Opened a new ${element.payload.issue.title} in ${element.repo.name}`)
            }
            else if(element.payload.action == "closed"){
                console.log(`Closed a new ${element.payload.issue.title} in ${element.repo.name}`)
            }
            else if(element.payload.action == "reopened"){
                console.log(`Reopened a new ${element.payload.issue.title} in ${element.repo.name}`)
            }
            break
        case "ForkEvent":
            console.log(`Forked ${element.payload.forkee.name}`)
            break

        default:
            console.log(`${element.type} event`)
        }
        
        
    })
}

github()

