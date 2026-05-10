

const express = require("express");
const Visit = require("../models/Visit");

const router = express.Router();


router.get("/hourly-visits", async (req, res) => {
    const data = await Visit.aggregate([
        {
            $group: {
                _id: {
                    hour: { $hour: "$visitedAt" }
                },
                users: { $sum: 1 }
            }
        },

        {
            $project: {
                _id: 0,

                hour: {
                    $let: {
                        vars: {
                            h: "$_id.hour"
                        },
                        in: {
                            $concat: [
                                {
                                    $toString: {
                                        $cond: [
                                            { $gt: ["$$h", 12] },
                                            { $subtract: ["$$h", 12] },
                                            {
                                                $cond: [
                                                    { $eq: ["$$h", 0] },
                                                    12,
                                                    "$$h"
                                                ]
                                            }
                                        ]
                                    }
                                },

                                " ",

                                {
                                    $cond: [
                                        { $gte: ["$$h", 12] },
                                        "PM",
                                        "AM"
                                    ]
                                }
                            ]
                        }
                    }
                },

                users: 1
            }
        },

        {
            $sort: {
                hour: 1
            }
        }
    ]);

    res.json(data);
});

// });

module.exports = router;