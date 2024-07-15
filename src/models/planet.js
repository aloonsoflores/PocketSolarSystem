import mongoose from "mongoose";

/* const mongoose = require("mongoose"); */

const planetSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  cultura_pop: {
    type: String,
    required: true,
  },
  historias: {
    type: "Array",
    items: {},
  },
  facts: {
    properties: {
      Introduccion: {
        type: String,
        required: true,
      },
      Nombre: {
        type: String,
        required: true,
      },
      Potencial_para_la_vida: {
        type: String,
        required: true,
      },
      Tamaño_y_Distancia: {
        type: String,
        required: true,
      },
      Orbita_y_Rotacion: {
        type: String,
        required: true,
      },
      Lunas: {
        type: String,
        required: true,
      },
      Anillos: {
        type: String,
        required: true,
      },
      Formacion: {
        type: String,
        required: true,
      },
      Estructura: {
        type: String,
        required: true,
      },
      Superficie: {
        type: String,
        required: true,
      },
      Atmosfera: {
        type: String,
        required: true,
      },
      Magnetosfera: {
        type: String,
        required: true,
      },
    },
  },
});

export default mongoose.models.Planet || mongoose.model("Planet", planetSchema);
