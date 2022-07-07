
const getUsers = (req, res) => {
    res.json({
        "msg": "Desde API/USUARIOS"
    })
};
const createUser= async(req, res )=>{
    const {userEmail}= req.bady;
    const user =await userModel.fineOne({userEmail})
   if (user){
    res.json({
        "msg": "El email digitado ya se encuentra en uso!"
    });
    return;
   }else {
    try{

        const user= new userModel(req.body);
        const userSaved= await user.save();
        res.json({ "msg": `Usuario: ${userSaved.name}  fue creado con exito!`
        });
    }catch(error){
        res.json({
            "msg": `Error creando al usuario: ${error}`
        });
    }
   }
   const getUser = async (req, res) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    const user = await userModel.findOne({userEmail})
    if (user){
        if (user.password === userPassword){
            res.json({
                user
            });    
        }else{
            res.json({
                "msg": "Error: Password incorrecto!"
            });
        }
        
    }else{
        res.json({
            "msg": "Error: Usuario el usuario no esta registrado!"
        });
    }
}
}
export { getUsers, createUser, getUser };

