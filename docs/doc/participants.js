/**
 * @api {GET} /api/v1/participants Get participants by user
 * @apiName GET
 * @apiGroup Participants
 * @apiHeader {String} Authorization The token can be generated from authenticate api
 * @apiHeaderExample {Header} Header-Example
 *     "Authorization: Bearer TOKEN"
 * @apiExample {bash} Curl example
 * curl -X GET http://localhost:3000/api/v1/participants -H 'Authorization: Bearer TOKEN'
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *    "results":[
 *      {
 *        "id":1,
 *        "user_id":1,
 *        "event_id":1,
 *        "created_at":"2020-11-15T12:57:02.630Z",
 *        "updated_at":"2020-11-15T12:57:02.630Z"
 *      }
 *    ]
 *    }
 */


/**
 * @api {get} /api/v1/events/:event_id/participants Get participants by event
 * @apiName Get
 * @apiGroup Participants
 * @apiHeader {String} Authorization The token can be generated from authenticate api
 * @apiHeaderExample {Header} Header-Example
 *     "Authorization: Bearer TOKEN"
 * @apiExample {bash} Curl example
 * curl -X GET http://localhost:3000/api/v1/events/1/participants -H 'Authorization: Bearer TOKEN'
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *    "results":[
 *      {
 *        "id":1,
 *        "user_id":1,
 *        "event_id":1,
 *        "created_at":"2020-11-15T12:57:02.630Z",
 *        "updated_at":"2020-11-15T12:57:02.630Z"
 *      }
 *    ]
 *    }
 */

/**
 * @api {POST} /api/v1/events/:event_id/participants Join an event
 * @apiName POST
 * @apiGroup Participants
 * @apiHeader {String} Authorization The token can be generated from authenticate api
 * @apiHeaderExample {Header} Header-Example
 *     "Authorization: Bearer TOKEN"
 * @apiExample {bash} Curl example
 * curl -X POST http://localhost:3000/api/v1/events/1/participants -H 'Authorization: Bearer TOKEN'
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *    {
 *      "results":{
 *        "id":4,
 *        "user_id":1,
 *        "event_id":4,
 *        "created_at":"2020-11-16T22:28:55.652Z",
 *        "updated_at":"2020-11-16T22:28:55.652Z"
 *      }
 *    }
 */

/**
 * @api {DELETE} /api/v1/events/:event_id/participants Delete an event
 * @apiName DELETE
 * @apiGroup Participants
 * @apiHeader {String} Authorization The token can be generated from authenticate api
 * @apiHeaderExample {Header} Header-Example
 *     "Authorization: Bearer TOKEN"
 * @apiExample {bash} Curl example
 * curl -X DELETE http://localhost:3000/api/v1/events/1/participants -H 'Authorization: Bearer TOKEN'
 * @apiSuccess {String} result <code>ok</code> if everything went fine.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "result": "ok"
 *     }
 */
