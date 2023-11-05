const pg= require('pg');
const config = {user:"postgres",password:"postgres",database:"postgres"}
const client = new pg.Client(config);
client.connect().then(()=>{
    console.log('Connected');
});

try {
    
    client.query(`SELECT NOW()`).then((res)=>{
        console.log(res) 
    });
    
 } catch (err) {
    console.error(err);
}