const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuarios', (err, rows) => {
            if (err) {
                console.log(err);
            }
            console.log(rows);
            res.render('usuarios', {
                data: rows
            });
        });
    });
};

module.exports = controller;