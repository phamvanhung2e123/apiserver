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
