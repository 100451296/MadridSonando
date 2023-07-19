const controller = {};

controller.register = (req, res) => {
    res.render('usuarios');
};

controller.sound = (req, res) => {
    res.render('sonido');
};
controller.audiovisual = (req, res) => {
    res.render('audiovisual');
};

controller.marketing = (req, res) => {
    res.render('marketing');
};

controller.fashion = (req, res) => {
    res.render('moda');
};

controller.sound = (req, res) => {
    res.render('sonido');
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
            // Redireccionar a la raíz '/'
            res.redirect('/');

        });
        
    });
}
controller.home = (req, res) => {
    res.render('home');
}

module.exports = controller;