import User from "../model/User.model.js"

export const createUser=async (req,res) => {
  try {
    const {name,email,address,phone}=req.body;
    
    

    const newUser=new User({
        name,
        email,
        address,
        phone
    })

    const userExist=await User.findOne({email});
    if(userExist){
        return res.status(404).json({success:false,message:"User already exist..."});
    }

    await newUser.save();
    
    res.status(201).json({message:"New user created successfully"});

  } catch (error) {
    console.log(error);
    res.status(500).json({success:false,message:"Internal server error....."});
    
  }
}

export const getUser=async (req,res) => {
  try {
    const data=await User.find();
    if(!data||data.length===0){
        res.status(404).json({success:false,message:"No user data aviable..."});
    }
    res.send(data);

  } catch (error) {
    console.log(error);
    res.status(500).json({success:false,message:"Internal server error....."});
    
  }
}


export const singleUser=async (req,res) => {
  try {
    const userId=req.params.id;
    const data=await User.findById(userId);
    if(!data){
        res.status(404).json({success:false,message:"data not exist..."});
    }
    res.send(data);

  } catch (error) {
    console.log(error);
    res.status(500).json({success:false,message:"Internal server error....."});
    
  }
}


export const updateUser=async (req,res) => {
  try {
    const userId=req.params.id;
    const data=await User.findByIdAndUpdate(userId,req.body,{new:true});
    if(!data){
        res.status(404).json({success:false,message:"data not exist..."});
    }
    res.status(201).json({message:"user updated successfully....."});
    // console.log(data);
    

  } catch (error) {
    console.log(error);
    res.status(500).json({success:false,message:"Internal server error....."});
    
  }
}

export const deleteUser=async (req,res) => {
  try {
    const userId=req.params.id;
    const data=await User.findByIdAndDelete(userId);
    if(!data){
        res.status(404).json({success:false,message:"data not exist..."});
    }
    res.status(201).json({message:"User deleted successfully...."})

  } catch (error) {
    console.log(error);
    res.status(500).json({success:false,message:"Internal server error....."});
    
  }
}
