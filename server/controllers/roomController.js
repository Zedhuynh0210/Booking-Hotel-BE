const Room = require("../models/roomModel")
const getRooms = async (req, res) => {
    try{
      const rooms = await Room.find();
      if(!rooms){
        res.status(400);
        throw new Error("rooms not found");
      }
      return res.status(200).json(rooms);
    }catch(error){
      next(error);
    }
};

//create room
const createRoom = async (req, res, next) => {
    try{
       const room = await Room.create(req.body)
       if(!room){
        res.status(400);
        throw new Error("there was a problem creating")
       }
       return res.status(201).json(room);
    }catch(error){
       next(error)
    }
};

//get single room
const getRoom = async(req, res, next) => {
    try{
        const room = await Room.findById(req.params.id);
        if(!room){
            res.status(400);
            throw new Error("room not found")
           }
           return res.status(200).json(room);
    }catch(error){
        next(error)
    }
}

//update room
const updateRoom = async(req, res, next) => {
    try{
        const updateRoom = await Room.findByIdAndUpdate(
            req.params.id, 
        {
            $set: req.body,
        },
        {new: true}
    );
    if(!updateRoom) {
        res.status(400)
        throw new Error("cannot update room")
    }
    return res.status(200).json(updateRoom);
    }catch(error){
        next(error)
    }
}

//delete room
const deleteRoom = async(req, res) => {
    try{
        const room = await Room.findByIdAndDelete(req.params.id);
        if(!room){
            res.status(400)
            throw new Error("cannot delete room")
        }
        return res.status(200).json({id: req.params.id});
    }catch(error){
        next(error)
    }
}


module.exports = {
    getRooms,
    createRoom,
    getRoom,
    updateRoom,
    deleteRoom,
};