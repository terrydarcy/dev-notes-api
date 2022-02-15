const router = require("express").Router();

router.get("/", (req: any, res: any) => {
    res.send("Dev Notes Server is live!!");
  });

module.exports = router;