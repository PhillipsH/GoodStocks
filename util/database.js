const { Pool } = require('pg');

// PostGres
const pool = new Pool ({
    host: "ec2-34-193-113-223.compute-1.amazonaws.com",
    user: "ijxpcunzisdzwe",
    database: "d37cgb2g46cvj7",
    password: "65a1ca72fe1c333124da8765e544a039c39f6ffca9ba1e89932d1904938ae225",
    ssl: {
        rejectUnauthorized:false
    },
});

pool.on('error', (err, client) => {
    console.error('Error:', err);
});

module.exports = pool;
