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
    
    data.forEach(element => {
        switch(element.type){
        case "PushEvent":
            console.log(`Pushed to ${element.repo.name}`)
            break
        case "WatchEvent":
            console.log(`Starred someone ${element.repo.name}`)
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
                console.log(`Opened ${element.repo.name}`)
            }
            else if(element.payload.action == "closed"){
                console.log(`Closed ${element.payload.issue.title}`)
            }
            else if(element.payload.action == "reopened"){
                console.log(`Reopened ${element.payload.issue.title}`)
            }
            breake
        default:
            console.log(`${element.type} event`)
        }
        
        
    })
}

github()

