const express = require("express");
const router = express.Router();
const Reservations = require("../models/Reservations");
const { body, validationResult } = require("express-validator");

// Route 1   : Get all the reservations: GET "/api/reservations/fetchallreservations". No Login Required
router.get("/fetchallreservations", async (req, res) => {
  try {
    const reservations = await Reservations.find({ id:req.id });

    res.json(reservations);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error occured");
  }
});

//Route 2    : Add a new reservations using: POST "/api/reservations/addreservations". No Login Required
router.post(
  "/addreservations",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("message", "Message must be of 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { name,email, message } = req.body;
      // if there are errors, return bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const reservations = new Reservations({
        name,
        email,
        message,
      });
      const savedReservations = await reservations.save();

      res.json(savedReservations);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error occured");
    }
  }
);


//   //ROUTE 3: Delete an existing reservations using: Delete "/api/reservations/deletereservations".No Login Required
router.delete(
  "/deletereservations/:id",
  async (req, res) => {
try {

//Find the contacts to be deleted and delete it
let reservations =await Reservations.findById(req.params.id);
if(!reservations){
  return res.status(404).send("Not Found")}

// //Allow deletion if only user owns this Note
//   if(note.user.toString()!==req.user.id){
//     return res.status(401).send("Not Allowed");
//   }

  reservations=await Reservations.findByIdAndDelete(req.params.id)
  res.json({"Success":"This Reservation has been deleted",reservations:reservations});


} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server error occured");
}



  })

module.exports = router;
