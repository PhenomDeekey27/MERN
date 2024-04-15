const userDataValidation = ({ name, email, password }) => {
    return new Promise((resolve, reject) => {
    
      if (!email || !password || !name) reject("Data is missing");
  
      if (typeof name !== "string") reject("name is not a text");
      if (typeof email !== "string") reject("email is not a text");
      if (typeof password !== "string") reject("password is not a text");
  
      if (name.length < 3 || name.length > 50)
        reject("name length should be 3-50");
      if (password.length < 3 || password.length > 50)
        reject("password length should be 3-50");
  
     
  
      resolve();
    });
  };

  module.exports=userDataValidation