/**
 * @api {get} /api/v1/users Get user
 * @apiName GetEvents
 * @apiGroup User
 *
 * @apiSuccess {Number} id
 * @apiSuccess {String} email
 * @apiSuccess {Date} created_at
 * @apiSuccess {Date} updated_at
 * @apiHeader {String} Authorization The token can be generated from authenticate api
 * @apiHeaderExample {Header} Header-Example
 *     "Authorization: Bearer TOKEN"
 * @apiExample {bash} Curl example
 * curl http://localhost:3000/api/v1/users -H 'Authorization: Bearer TOKEN'
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
 *   "results": {
 *     "id": 1,
 *     "email": "john.doe@example.com",
 *     "created_at": "2020-11-15T12:56:35.951Z",
 *     "updated_at": "2020-11-15T12:56:35.951Z"
 *     }
 *  }
 */
