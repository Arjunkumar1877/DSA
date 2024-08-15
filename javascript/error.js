try {
    // ReferenceError because the variable is not defined
    let result = someUndefinedVariable;
} catch (error) {
    if (error instanceof ReferenceError) {
        console.error("ReferenceError caught:", error.message);
    } else if (error instanceof TypeError) {
        console.error("TypeError caught:", error.message);
    } else {
        console.error("Other error caught:", error.message);
    }
} finally {
    console.log("Cleanup code executed.");
}


class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

try {
    throw new CustomError("This is a custom error");
} catch (error) {
    if (error instanceof CustomError) {
        console.error("CustomError caught:", error.message);
    } else {
        console.error("An unexpected error occurred:", error.message);
    }
}
