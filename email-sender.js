var nodemailer=require("nodemailer")
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'mariamdiallo@gmail.com',
        pass:'feshhudfuhhf55'
    }
});
var mailOptions={
    from:'mariamdiallo@gmail.com',
    to:'mariamdiallo@gmail.com',
    subject:'Sending Email Using Nodejs',
    text:'hello it is my new email' 
}
 transporter.sendMail(mailOptions,function(err,info){
    if(err){
      console.log(err);
    }else
    {
        console.log('Email send' + info.response);
    }

});