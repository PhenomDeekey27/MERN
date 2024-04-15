const ProfileValidation=({name,date,gender,father,mother,job,salary,religion,profile_img})=>{
    return new Promise((resolve, reject) => {
        if(!name) reject("Name is required")
        if(typeof name !=="string") reject("Name is not a text")
        if(!date) reject("Date is required")
       
        if(!gender) reject("Gender is required")
        if(typeof gender !=="string") reject("Gender is not a text")
        if(!father) reject("Father Name is required")
        if(typeof father !=="string") reject("Father Name is not a text")
        if(!mother) reject("Mother Name is required")
        if(typeof mother !=="string") reject("Mother Name is not a text")
        if(!job) reject("Job is required")
        if(typeof job !=="string") reject("Job is not a text")
        if(!salary) reject("salary is required")
        if(isNaN(salary)) reject("Salary is not a number")
        if(!religion) reject("Religion is not a text")
        if(typeof religion!=="string") reject("Religion is not a text")
        if (name.length < 3 || name.length > 50)
        reject("name length should be 3-50");
        if (father.length < 3 || father.length > 50)
        reject("Father name length should be 3-50");
        if (mother.length < 3 || mother.length > 50)
        reject("Mother name length should be 3-50");
        // if(!profile_img) reject("profile img is required")


        resolve()
        
    })
}

module.exports=ProfileValidation