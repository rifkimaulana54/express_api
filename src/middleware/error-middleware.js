import { ResponseError } from "../error/response-error"

const errorMiddleware = async (err, req, res, newxt) => {
    if (err instanceof ResponseError) {
        res.status(err.status).json({
            errors: err.message
        }).end();
    } else if(err instanceof ValidationError){

    } else {
        res.status(500).json({
            errors: err.message
        })
    }
}