const controller = {};

controller.register = (req, res) => {
    res.render('usuarios');
};

controller.save = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            console.log(err);
            return;
        }

        conn.query('INSERT INTO usuarios set ?', [req.body], (err, rows) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(rows);
            res.send("OK!");
        });
        
    });
}
controller.home = (req, res) => {
    res.render('home');
}

module.exports = controller;