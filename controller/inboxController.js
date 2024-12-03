//get Inbox page
function getInbox(req, res, next){
    res.render("inbox");
    // res.render("inbox",{
    //     title : "Inbox- chat application"
    // });
}

module.exports = {
    getInbox
};