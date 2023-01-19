const express = require("express");
const router = express.Router();
const Contacts = require("../models/Contacts");
const { body, validationResult } = require("express-validator");

// Route 1   : Get all the contacts: GET "/api/contacts/fetchallcontacts". No Login Required
router.get("/fetchallcontacts", async (req, res) => {
  try {
    const contacts = await Contacts.find({ id:req.id });

    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error occured");
  }
});

//Route 2    : Add a new posts using: POST "/api/contacts/addposts". No Login Required
router.post(
  "/addcontacts",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("description", "Description must be of 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { name,email, description } = req.body;
      // if there are errors, return bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const contacts = new Contacts({
        name,
        email,
        description,
      });
      const savedContacts = await contacts.save();

      res.json(savedContacts);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error occured");
    }
  }
);


//   //ROUTE 3: Delete an existing contacts using: Delete "/api/contacts/deletecontacts".No Login Required
router.delete(
  "/deletecontacts/:id",
  async (req, res) => {
try {

//Find the contacts to be deleted and delete it
let contacts =await Contacts.findById(req.params.id);
if(!contacts){
  return res.status(404).send("Not Found")}

// //Allow deletion if only user owns this Note
//   if(note.user.toString()!==req.user.id){
//     return res.status(401).send("Not Allowed");
//   }

  contacts=await Contacts.findByIdAndDelete(req.params.id)
  res.json({"Success":"This Contact has been deleted",contacts:contacts});


} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server error occured");
}



  })

module.exports = router;
