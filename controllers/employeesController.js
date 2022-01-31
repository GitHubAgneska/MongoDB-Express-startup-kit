const employeesService = require('../services/employeesService')

module.exports.createEmployee = async (req, res) => {
    let response = {}

    try {
        const responseFromService = await employeesService.createUser(req.body)
        response.status = 200
        response.message = 'Employee successfully created'
        response.body = responseFromService
    } catch (error) {
        console.error('Something went wrong in EmployeeController.js', error)
        response.status = 400
        response.message = error.message
    }

    return res.status(response.status).send(response)
}