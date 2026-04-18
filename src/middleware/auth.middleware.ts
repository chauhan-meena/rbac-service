
import jwt from "jsonwebtoken";

// export const authMiddleware = (req:any,res:any,next:any)=>{
//   const token = req.headers.authorization?.split(" ")[1];
//   if(!token) return res.status(401).json({error:"No token"});
//   try{
//     const decoded:any = jwt.verify(token,"secret");
//     req.user = {userId:decoded.sub, tenantId:decoded.tenantId};
//     next();
//   }catch{
//     res.status(401).json({error:"Invalid token"});
//   }
// }

export const authMiddleware = (req: any, res: any, next: any) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        errorCode: "AUTH_UNAUTHORIZED",
        message: "No token provided",
        service: "rbac-service"
      });
    }
    let secret = process.env.JWT_SECRET || "default_secret";
    console.log("Using JWT secret:", secret);
    const decoded: any = jwt.verify(token, secret);

    // validate required fields
    if (!decoded.sub || !decoded.tenantId) {
      return res.status(401).json({
        errorCode: "AUTH_INVALID_TOKEN",
        message: "Invalid token payload",
        service: "rbac-service"
      });
    }

    // ✅ optional validation (good practice)
    if (decoded.iss !== "baalvion-auth") {
      return res.status(401).json({
        errorCode: "AUTH_INVALID_TOKEN",
        message: "Invalid issuer",
        service: "rbac-service"
      });
    }

    if (decoded.aud !== "baalvion-platform") {
      return res.status(401).json({
        errorCode: "AUTH_INVALID_TOKEN",
        message: "Invalid audience",
        service: "rbac-service"
      });
    }

    //full identity
    req.user = {
      userId: decoded.sub,
      tenantId: decoded.tenantId,
      sessionId: decoded.sessionId,
      deviceId: decoded.deviceId,
      roles: decoded.roles || [],
      permissions: decoded.permissions || [],
      authLevel: decoded.authLevel
    };

    next();

  } catch (err: any) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({
        errorCode: "AUTH_TOKEN_EXPIRED",
        message: "Access token expired",
        service: "rbac-service"
      });
    }

    return res.status(401).json({
      errorCode: "AUTH_INVALID_TOKEN",
      message: "Invalid token",
      service: "rbac-service"
    });
  }
};
