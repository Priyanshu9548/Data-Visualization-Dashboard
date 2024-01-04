exports.search = (filter, pagination) => {
  const baseQuery = [
    {
      $match: {
        ...filter,
      },
    },
  ];

  const dataQuery = [
    ...baseQuery,
    {
      $sort: {
        createdAt: -1,
        updatedAt: -1,
      },
    },
  ];

  const countQuery = [
    ...baseQuery,
    {
      $count: "count",
    },
  ];

  return [
    {
      $facet: {
        data: dataQuery,
        count: countQuery,
      },
    },
  ];
};
