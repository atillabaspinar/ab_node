module.exports = class ContentController {
    static getArticle (req, res, next) {
        console.log(req.url);
    }

    static getCategory (req, res, next) {
        console.log(req.url);
    }
};
