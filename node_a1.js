const fs = require("fs")
Q1.(i)
fs.mkdirSync("space_project")

Q1.(ii)
fs.mkdir("space_project",(err)=>{
    if(err){
        throw err
    }
    console.log("File created")
})

Q2.(i)
data = "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft."
fs.writeFileSync("./space_project/log.txt", data)

Q2.(ii)
data = "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft."
fs.writeFile("./space_project/log.txt", data,(err)=>{
    if(err){
        throw err
    }
    console.log("Wrote the file")
})

Q3.(i)
data = "ISRO has started working on Gaganyaan."
fs.writeFileSync("./space_project/log.txt",data)

Q3.(ii)
data = "ISRO has started working on Gaganyaan."
fs.writeFile("./space_project/log.txt",data,(err)=>{
    if(err){
        throw err
    }
    console.log("Written the file")
})


Q4.(i)
data1 = "\nThe current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission."
fs.appendFileSync("./space_project/log.txt",data1)

Q4.(ii)
data1 = "\nThe current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission."
fs.appendFile("./space_project/log.txt",data1,(err)=>{
    if(err){
        throw err
    }
    console.log("Append the files")
})

Q5.(i)
fs.renameSync("./space_project/log.txt","./space_project/update.txt")

Q5.(ii)
fs.rename("./space_project/log.txt","./space_project/update.txt",(err)=>{
    if(err){
        throw err
    }
    console.log("Rename the file")
})

Q6.(i)
let x = fs.readFileSync("./space_project/update.txt")
console.log(x.toString())
console.log("We are excited")

Q6.(ii)
fs.readFile("./space_project/update.txt",(err)=>{
        if(err){
            throw err
        }
        console.log(x.toString())
    })
console.log("We are excited")
    

Q7.(i)
fs.unlinkSync("./space_project/update.txt");

Q7.(ii)
fs.unlink("./space_project/update.txt",(err=>{
    if(err){
        throw err
    }
    console.log("File deleted Successfully")
}))


Q8.(i)
fs.rmdirSync("space_project");

Q8.(ii)
fs.rmdir("space_project",(err)=>{
    if(err){
        throw err
    }
    console.log("Folder deleted Successfully")
})

