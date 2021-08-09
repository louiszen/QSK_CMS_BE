/**
 * Generate Design Document
 * @param {String} fieldName 
 */
const Gen = (fieldName) => {
  return {
    _id: "_design/" + fieldName,
    language: "query",
    views: {
      "dateTime-json-index": {
        map: {
          fields: {
            [fieldName]: "asc",
          },
          partial_filter_selector: {},
        },
        reduce: "_count",
        options: {
          def: {
            fields: [fieldName],
          },
        },
      },
    },
  };
};

module.exports = Gen;
