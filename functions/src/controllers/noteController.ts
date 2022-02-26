const db = require("../db");
interface Note {
  id: number;
  user_id: string;
  note_text: string;
  timestamp: Date;
}

const setNote = async (req: any, res: any, next: any) => {
  const { user_id, note_text, timestamp }: Note = req.body;

  if (user_id && note_text && timestamp) {
    const queryString ="INSERT INTO notes(user_id, note_text, timestamp) VALUES($1, $2, $3) RETURNING *";
    const values = [user_id, note_text, timestamp];

    await db.query(queryString, values)
      .then((data: any) => {
        res.send(data.rows[0])
      })
      .catch((e: any) => {
        next(e.stack);
      });
  }
};

const getUserNotes = async (req: any, res: any, next: any) => {
  const { id } = req.params;

  if (id) {
    const queryString ="SELECT * FROM notes WHERE user_id = $1";
    const values = [id];

    await db.query(queryString, values)
      .then((data: any) => {
        console.log(data.rows);
        res.send(data.rows);
      })
      .catch((e: any) => {
        next(e.stack);
      });
  }


};

module.exports = { setNote, getUserNotes };
