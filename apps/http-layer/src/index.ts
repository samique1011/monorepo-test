import express from "express";
import type { Request, Response } from "express";
import {prisma} from "@repo/db/client"
import cors from "cors"

import inputSanitation from "./middlewares/userInputSanitation.js";
const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    msg: "Hello",
  });
});

app.post("/signup", inputSanitation , async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    await prisma.user.create({
      data: {
        username: username,
        password: password,
      },
    });

    res.status(200).json({
      msg: "Created successfully",
    });
  } catch (e : any) {
    if (e.code === "P2002") {
      return res.status(409).json({
        msg: "User already exists",
      });
    }

    console.error(e);

    return res.status(500).json({
      msg: "Internal server error",
    });
  }
});


app.post("/signin" , inputSanitation , async (req : Request , res : Response) => {
    const username = req.body.username;
    const password = req.body.password;

        const Response = await prisma.user.findFirst({
            where : {
                username : username , 
                password : password
            } , 
            select : {
                username : true
            }
        })

        if(Response){
            res.status(200).json({
                msg : "Signup successful"
            })
        }
        else{
            res.status(404).json({
                msg : "Not found"
            })
        }
})
app.listen(3002, () => {
  console.log("App is listening on port 3002");
});
