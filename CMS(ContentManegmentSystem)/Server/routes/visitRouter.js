

const express = require("express");
const Visit = require("../models/Visit");

const router = express.Router();


router.get("/hourly-visits", async (req, res) => {

  try {

    // Today start & end
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    // Get today's visits
    const visits = await Visit.find({
      visitedAt: {
        $gte: startOfDay,
        $lte: endOfDay
      }
    });

    // Default 24 hours data
    const hourlyData = Array.from(
      { length: 24 },
      (_, hour) => {

        const hour12 =
          hour % 12 === 0 ? 12 : hour % 12;

        const ampm =
          hour < 12 ? "AM" : "PM";

        return {
          time: `${hour12} ${ampm}`,
          users: 0
        };
      }
    );

    // Count visits
    visits.forEach((visit) => {

      const hour =
        new Date(visit.visitedAt).getHours();

      hourlyData[hour].users += 1;
    });

    res.status(200).json({
      success: true,
      data: hourlyData
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message
    });
  }
});

// });

module.exports = router;