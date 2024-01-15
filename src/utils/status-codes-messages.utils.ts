export default class StatusMessage {
  static readonly HTTP_CODES = {
    SUCCESS: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
  };

  static readonly SERVER_ERRORS = {
    internal_error: 'Internal Error',
    rate_limit_reached: 'Rate limt exceeded, please try again later some time.',
    missing_field_failed: 'Required Field is missing',
    queryDate: 'Both start date and end date are required',
    queryDateFormat: 'Date should be in YYYY/MM/DD format',
    queryStartDateBetweenEndDate: 'Start date should be less than end date',
    querySort: 'Both sortBy and sort order are required',
    db_error: 'Database connection issues',
    no_information_provided: 'No Information provided to update',
    Unexpected_field: 'Unexpected field',

    reviews: {
      name_not_found: 'Reviewer Name is missing',
      name_type: 'Reviewer name type should be string',
      name_length: 'Reviewer Name length should be in 3 to 200 characters',
      review_not_found: 'Review is missing',
      review_type: 'Review type should be string',
      rating_not_found: 'Rating is missing',
      rating_type: 'Rating type should be number',
      rating_limit: 'Rating can be out of 5',
      isNegative_not_found: 'isNegative field is missing',
      isNegative_type: 'isNegative type should be boolean',
      invalid_id: 'Invalid Review Id',
      add_failed: 'Failed to add new review',
      get_failed: 'Failed to fetch reviews',
      update_failed: 'Failed to update the review',
      delete_failed: 'Failed to delete the review',
    },
  };

  static readonly ERROR_CODES = {
    internal_error_msg: [1001, StatusMessage.SERVER_ERRORS.internal_error, 500],

    reviews: {
      information_not_provided_msg: [1002, StatusMessage.SERVER_ERRORS.reviews.update_failed, 400],
      name_not_found_msg: [1003, StatusMessage.SERVER_ERRORS.missing_field_failed, 400],
      name_type_msg: [1004, StatusMessage.SERVER_ERRORS.reviews.name_type, 400],
      name_length_msg: [1005, StatusMessage.SERVER_ERRORS.reviews.name_length, 400],
      review_type_msg: [1006, StatusMessage.SERVER_ERRORS.reviews.review_type, 400],
      review_not_found_msg: [1007, StatusMessage.SERVER_ERRORS.reviews.review_not_found, 400],
      rating_not_found_msg: [1008, StatusMessage.SERVER_ERRORS.reviews.rating_not_found, 400],
      rating_type_msg: [1009, StatusMessage.SERVER_ERRORS.reviews.rating_type, 400],
      rating_limit_msg: [1010, StatusMessage.SERVER_ERRORS.reviews.rating_limit, 400],
      isNegative_not_found_msg: [1010, StatusMessage.SERVER_ERRORS.reviews.isNegative_not_found, 400],
      isNegative_type_msg: [1011, StatusMessage.SERVER_ERRORS.reviews.isNegative_type, 400],
      add_db_error_msg: [1012, StatusMessage.SERVER_ERRORS.reviews.add_failed, 500],
      get_db_error_msg: [1013, StatusMessage.SERVER_ERRORS.reviews.get_failed, 500],
      update_db_error_msg: [1014, StatusMessage.SERVER_ERRORS.reviews.update_failed, 500],
      delete_db_error_msg: [1015, StatusMessage.SERVER_ERRORS.reviews.delete_failed, 500],
      get_invalid_id_msg: [1016, StatusMessage.SERVER_ERRORS.reviews.get_failed, 400],
      update_invalid_id_msg: [1017, StatusMessage.SERVER_ERRORS.reviews.update_failed, 400],
      delete_invalid_id_msg: [1018, StatusMessage.SERVER_ERRORS.reviews.delete_failed, 400],
    },
  };

  static readonly SERVER_SUCCESS = {
    reviews: {
      data_added: 'review data saved successfully',
      data_fetched: 'reviews data fetched successfully',
      data_updated: 'review data updated successfully',
      data_deleted: 'review data delete successfully',
    },
  };

  static readonly DB_ERRORS = {
    uniqueConstantError: 'MongoDBUniqueConstraintError',
    validationError: 'MongoDBValidationError',
    accessDeniedError: 'MongoDBAccessDeniedError',
    MongoDBConnectionError: 'MongoDBConnectionError',
  };

  static readonly DB_LOGS = {
    DB_CONNECTED_SYNC_SUCCESS_MSG: '####### Database connected and synced successfully #######',
    DB_NOT_CONNECTED_MSG: '####### Database not connected successfully #######',
  };

  constructor() {}
}
