var credential = require('../credential');
var express = require('express');
var router = express.Router();
var watson = require('watson-developer-cloud');
var cont = {}

var conversation = watson.conversation(credential.watson.conversation);

router.get('/', function(req, res, next) {

  res.render('index');

});

router.post('/', function(req, res, next){
  var txt = { text: req.body.text }
  workspace = credential.watson.conversation.workspace_id;
  // conversation.message({workspace_id: workspace , input: txt, context: cont}, function(err, response){
  //   if(err){
  //     console.log('Deu erro', err);
  //   }else{
  //     res.json(response);
  //   }
  // })
  sendMessage = (message = null) => new Promise((resolve, reject) => {
        conversation.message({
            input: txt,
            workspace_id: workspace,
            context: cont
        }, function (err, response) {
            if (err) {
                reject(err)
            } else {
                cont = response.context
                resolve(response.output.text)
                res.json(response);
            }
        })
    })

    sendMessage()

})


module.exports = router;
