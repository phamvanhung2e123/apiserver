/**
 * @api {get} /api/v1/events/:event_id/participants Request for list of participants
 * @apiName Get
 * @apiGroup Participants
 * @apiHeader {String} Authorization The token can be generated from authenticate api
 * @apiHeaderExample {Header} Header-Example
 *     "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHBpcnkiOjE2MDU1MjI2NTF9.fJMBMER8Sl99GBhqAUiTZn15m_OFeFlUbcVGMxDKgoY"
 * @apiExample {bash} Curl example
 * curl -X GET http://localhost:3000/api/v1/events/1/participants -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHBpcnkiOjE2MDU1MjI2NTF9.fJMBMER8Sl99GBhqAUiTZn15m_OFeFlUbcVGMxDKgoY'
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
