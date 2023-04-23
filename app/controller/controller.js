
// declear all required variables.


const conn = require("../config/db"); //set up connection to the DB

//const {extmail} = require("../config/external");  // import details for email function

const external = require("../externalservice/external");

// get the validation check into the form

const { Validator } = require('node-input-validator');  // install npm i node-input-validator  

//create API to get all the articles

exports.get_articles =(req, res, next) =>{

    conn.query("Select * from articles", function(err, displaydata){
        if(!err){
            res.send(displaydata);
        } else{
            res.send(err);
        }
    });
};


//create API too insert new articles

exports.create_articles=(req, res, next) =>{
    
    let title = req.body.title;
    let content = req.body.content;
    let eaddress = req.body.eaddress;

    const v = new Validator(req.body,{
         title: 'required',
         content: 'required',
         eaddress: 'required|email'
    });
     
    v.check().then((matched)=>{
        if (!matched){
            res.status(422).send(v.errors);
        }
        else{
            const values = [title, content, eaddress];
            conn.query("Insert into articles (title, content, eaddress) values(?)",[values], function(err, datafileds){
                res.status(200).json({
                    status_code: "0", message: "successful",
                  }); 
                 } );
        }

    });
}


exports.create_user=(req, res) =>{
    
    let name = req.body.name;
    let address = req.body.address;
    let country = req.body.country;
    let eaddress = req.body.eaddress;

    const vuser = new Validator(req.body,{
        name: 'required',
        address: 'required',
        country: 'required',
        eaddress: 'required|email'

    });
    vuser.check().then((matched)=>{
        if (!matched){
            res.status(422).send(vuser.errors);
        }
        else{
            const values = [name, address, country, eaddress];
            conn.query("Insert into userdetails (name, address, country, eaddress) values(?)",[values], function(err, datafield){
            if(!err){
                external.email_sender(eaddress,'Registration', "<h4> Dear "+  name + ",<br> Thank you for your interest to join HPC, happy <strong> Ramadan</strong>. <br> <br> Thanks for the registration.</h4> ");
                res.status(200).json({
                status_code: "0", message: "successful",
              }); 
            }else
            {
                res.send(err);
            }
             } );
        }
    });
}
    // if(!name){
    //     return res.status(201).json({
    //         status_code: "1",
    //         message: "Invalid name"
    //     });
    // }
   

    // if(!address){
    //     return res.status(201).json({
    //         status_code: "1",
    //         message: "Invalid address"
    //     });

    //     }

    // if(!country){
    //         return res.status(201).json({
    //             status_code: "1",
    //             message: "Invalid country"
    //         });
    
    //     }
    //     if(!eaddress){
    //         return res.status(201).json({
    //             status_code: "1",
    //             message: "Invalid email address"
    //         });
    
    //     }
//     const values = [name, address, country, eaddress];
    
//     conn.query("Insert into userdetails (name, address, country, eaddress) values(?)",[values], function(err, datafileds){
//         if (!err){
//             external.email_sender(eaddress,'Registration', "<h4> Dear "+  name + ",<br> Thank you for your interest to join HPC, happy <strong> Ramadan</strong>. <br> <br> Thanks for the registration.</h4> ");
//             res.status(200).json({
//               status_code: "0", message: "successful",
//             });
//         }else {
//             res.send(err);
//         }
//     })
// }