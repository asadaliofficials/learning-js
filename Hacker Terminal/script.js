console.log("hello world");


const commands = [
  "Initializing Hacking...",
  "Hacking files executing...",
  "Hacking Started...",
  "Getting Data...",
  "Uploading on Server...",
  "Hacking Completed..."
]

async function hello(text) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(text)
    }, getRandomTime())
  })
}
async function main() {
  for (let Commands of commands) {
    console.log(await hello(Commands))
  }
}

function getRandomTime(){
  let randomSeconds = Math.floor(Math.random() * 5) + 1
  return randomSeconds * 1000
}

main();