const router = require("express").Router();
const Tarea = require("../models/Tarea.model");

router.get("/", async (req, res) => {
  try { 
    const task = await Tarea.findAll();
    res.send(user);
  } catch (task) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

router.get("/buscar", async (req, res) => {
  const status = req.body.status;
  try { 
    const task = await Usuario.findOne({where: {status: status}})
    res.send(task);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

router.post("/add", async (req, res) => {
  const { tarea_id, nombre, status } = req.body;
  try { 
    await Tarea.sync()
    const task = await Tarea.create({
      tarea_id: tarea_id,
      nombre: nombre,
      status: status
    });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
    console.log(error);
  }
});
router.put("/update/:tarea_id", async (req, res) => {
  const tarea_id = req.params.tarea_id;
  const { nombre, status } = req.body;
  try { 
    const usuario = await Tarea.update({
      nombre: nombre,
      status: status
    }, { where: { tarea_id: tarea_id} });
    res.send("Tarea modificada correctamente");
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

router.delete("/delete/:tarea_id", async (req, res) => {
  try { 
    const usuario = await Tarea.destroy({ where: { tarea_id: req.params.tarea_id} });
    res.send("Usuario eliminado correctamente");
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
    console.log(error);
  }
});
module.exports = router;