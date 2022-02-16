exports.note_create_post = function (req: any, res: any) {
    console.log(req.params.id);
    res.send(`NOT IMPLEMENTED: Create a new note POST with id: ${req.params.id}`);
};

exports.notes_fetch_get = function (req: any, res: any) {
    res.send("NOT IMPLEMENTED: Get notes GET");
  };