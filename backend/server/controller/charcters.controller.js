import product from "../models/product.js";
import { uploadImage, deleteImage } from "../libraries/cluodinary.js";

import fs from "fs-extra";

//------------------

export const getCharacters = async (req, res) => {
  try {
    const Characters = await product.find();
    res.send(Characters);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

//------------------

export const createCharacters = async (req, res) => {
  try {
    const { name, description, vivo } = req.body;
    let urlImage = null;

    if(req.files.urlImage){
      const fileUpload = await uploadImage(req.files.urlImage.tempFilePath)
      await fs.remove(req.files.urlImage.tempFilePath)
      urlImage = { 
        url: fileUpload.secure_url,
        public_id: fileUpload.public_id
      }
    }

    const newproduct = new product({ name, description, vivo, urlImage });
    await newproduct.save();
    return res.json(newproduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//------------------

export const updateCharacters = async (req, res) => {
  try {
    const updatedProduct = await product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, }
    );
    return res.send(updatedProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  
};

export const deleteCharacters = async (req, res) => {
  try {
    const productRemoved = await product.findByIdAndDelete(req.params.id);

    if (!productRemoved) {
      return res.sendStatus(404);
    } else {

      if (productRemoved.urlImage.public_id) {
        await deleteImage(productRemoved.urlImage.public_id);
      }
      return res.sendStatus(204);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// export const deleteCharacters1 = async (req, res) => {
//   try {
//     const productRemoved = await product.findByIdAndDelete(req.params.id);

//     if(!productRemoved) return res.status(404)
//     if(productRemoved.urlImage.public_id){
//       await deleteImage(productRemoved.urlImage.public_id)
//     }
//     return res.sendStatus(204)

//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

export const getProduct = async (req, res) => {
  const product = await product.findById(req.params.id);

  if (!product) {
    return res.sendStatus(404);
  } else {
    return res.json(product);
  }
};
