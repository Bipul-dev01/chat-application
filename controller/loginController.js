
//get login page
function getlogin(req, res, next){
    res.render("index");
    // res.render("index",{
    //     title : "login- chat application"
    // });
}

module.exports = {
    getlogin
};