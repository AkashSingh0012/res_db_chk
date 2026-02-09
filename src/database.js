    import mysql2 from 'mysql2';

    import dotenv from 'dotenv';
    dotenv.config();

    const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    }).promise();


    export async function getRegistrationById(registrationId) {
    const [rows] = await pool.query(
        `SELECT registration_id, salutation, first_name, last_name, contact_no
        FROM registered_master
        WHERE registration_id = ?`,
        [registrationId]
    );
    return rows[0];
    }

    export async function abstractExists(registrationId) {
    const [rows] = await pool.query(
        `SELECT 1 FROM abstract_submission WHERE registration_id = ?`,
        [registrationId]
    );
    return rows.length > 0;
    }

    export async function insertAbstract(data) {
    const sql = `
        INSERT INTO abstract_submission (
        registration_id, salutation, first_name, last_name, designation,
        abstract_title, abstract_category, keywords,
        file_name, file_type, file_size_kb, abstract_file
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        data.registration_id,
        data.salutation,
        data.first_name,
        data.last_name,
        data.designation,
        data.abstract_title,
        data.abstract_category,
        data.keywords,
        data.file_name,
        data.file_type,
        data.file_size_kb,
        data.abstract_file
    ];

    return pool.query(sql, values);
    }
/*
    // testing if data is loaded from the database or not
async function fetchData() {
    const [result] = await pool.query('SELECT * FROM registered_master');
    return result;
}
console.log(await fetchData());

//

*/

