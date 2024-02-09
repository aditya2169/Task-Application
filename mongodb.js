//Crud operations 
const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName ='task-manager'

MongoClient.connect(connectionURL,{ useNewUrlParser : true },(error,client)=>{
    if(error){
        return console.log('Unable to connect to database!!')
    }

    const db=client.db(databaseName)
    
    // db.collection('users').insertOne({
    //     name:'Aditya',
    //     age:21
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.insertedIds)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'darshan',
    //         age:21
    //     },
    //     {
    //         name:'anshul',
    //         age:22
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Error')
    //     }
    //     else{
    //         console.log(result.insertedIds)
    //     }
    // })

    db.collection('tasks').insertMany([
        {
            description:'Food',
            completed:false
        },
        {
            description:'study',
            completed:false
        }
    ],(error,result)=>{
        if(error){
            return console.log('Error!!')
        }
        else{
            console.log(result)
        }
    })

})