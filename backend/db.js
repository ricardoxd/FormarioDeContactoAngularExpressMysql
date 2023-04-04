import mysql from "mysql";
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testadsum'
});
connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
  });
export async function  guardarContacto(data) {
        let datos = data.body;
        connection.query(
            "INSERT INTO `contactos` (`nombre`, `empresa`, `correo`, `telefono`, `id_categoria`, `mensaje`) " +
            "VALUES ( '" + datos.nombre + "', '" + datos.empresa + "', '" + datos.correo + "', '" + datos.telefono + "', '" + datos.id_categoria + "', '" + datos.mensaje + "')",
            function (error, resultado, fields) {
                if (error) {
                    //throw error;
                    return {
                        error: true,
                        mensaje: "Error",
                        data: resultado
                    };
                } else {
                    return {
                        error: false,
                        mensaje: "Registrado",
                        data: resultado
                    };
                }
            });
    }
    export async function listarCategorias() {
        return new Promise((resolve,reject)=>{
            connection.query('select * from categorias', (err, resp) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(resp)
                }
            })
        })
    }
