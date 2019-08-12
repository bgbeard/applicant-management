const load = async (options = {}) => {
    const {
        STAGE,
        AWS_LAMBDA_FUNCTION_NAME
    } = process.env

    try {
        const config = {
            stage: STAGE,
            lambdaFunctionName: AWS_LAMBDA_FUNCTION_NAME
        }

        // It is necessary to include the initial module.exports object along
        // with the recently fetched and exported SSM parameters.
        // Even though this load function only runs once, the lambda may be
        // executed in the same container on a future invocation. If this happens,
        // nothing is re-exported, and the function won't be accessible.

        // tl;dr: Just don't change it please 🙄

        module.exports = {
            ...module.exports,
            ...config
        }
    }

    catch (ex) {
        console.error(ex)
        throw ex
    }
}


module.exports = {
    load
}