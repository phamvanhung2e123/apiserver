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
 *    "results":[
 *        {
 *          "id":1,
 *          "name":"Romantic Spots for Honeymoons",
 *          "location":"tokyo",
 *          "start_time":"2020-10-16T12:56:35.161Z",
 *          "end_time":"2020-12-15T12:56:35.161Z",
 *          "created_at":"2020-11-15T12:56:35.171Z",
 *          "updated_at":"2020-11-15T12:56:35.171Z"
 *        }
 *      ]
 *     }
 */
