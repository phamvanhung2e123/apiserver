/**
 * @api {get} /api/v1/authenticate Request auth_token
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {email} email Users email.
 * @apiParam {password} password Users password.
 *
 * @apiSuccess {String} auth_token Api key of the User.
 * @apiExample {bash} Curl example
 * curl -X POST http://localhost:3000/api/v1/authenticate \
 * -H 'content-type: multipart/form-data' \
 * -F 'email=john.doe@example.com' -F 'password=test123'
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "auth_token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHBpcnkiOjE2MDU1NjgxNzl9.MOirZDwT_UtTpZBFufmISlEcc8FViIYNnR-3GSvp4BM"
 *     }
 */

/**
 * @api {get} /api/v1/events Request for list of events
 * @apiName GetEvents
 * @apiGroup Event
 *
 * @apiSuccess {Number} id
 * @apiSuccess {String} name
 * @apiSuccess {String} location
 * @apiSuccess {Date} start_time
 * @apiSuccess {Date} end_time
 * @apiSuccess {Date} created_time
 * @apiSuccess {Date} updated_time
 *
 * @apiExample {bash} Curl example
 * curl http://localhost:3000/api/v1/events
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      results: [
 *        {
 *        id: 1,
 *        name: "Romantic Spots for Honeymoons",
 *        location: "tokyo",
 *        start_time: "2020-10-16T12:56:35.161Z",
 *        end_time: "2020-12-15T12:56:35.161Z",
 *        created_at: "2020-11-15T12:56:35.171Z",
 *        updated_at: "2020-11-15T12:56:35.171Z"
 *        }
 *      ]
 *     }
 */

https://github.com/apidoc/apidoc/blob/master/example/example.js